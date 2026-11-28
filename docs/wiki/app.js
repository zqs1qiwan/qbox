(function () {
  var state = { lang: "zh", pageId: "home", query: "" };

  var brandLink = document.getElementById("brandLink");
  var versionPill = document.getElementById("versionPill");
  var nav = document.getElementById("sidebarNav");
  var sidebar = document.getElementById("sidebar");
  var menuToggle = document.getElementById("menuToggle");
  var langToggle = document.getElementById("langToggle");
  var searchInput = document.getElementById("searchInput");
  var searchBanner = document.getElementById("searchResultsBanner");
  var articleBody = document.getElementById("articleBody");
  var pagerLinks = document.getElementById("pagerLinks");
  var navHeading = document.getElementById("navHeading");
  var releaseLink = document.getElementById("releaseLink");
  var altReadmeLink = document.getElementById("altReadmeLink");
  var footerDisclaimer = document.getElementById("footerDisclaimer");
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  var latestVersion = "";
  try {
    latestVersion = window.sessionStorage ? (sessionStorage.getItem("qbox_latest_ver") || "") : "";
  } catch (e) {}

  function parseHash() {
    var raw = (window.location.hash || "").replace(/^#/, "");
    if (!raw) return;
    var parts = raw.split("/");
    if (parts[0] === "zh" || parts[0] === "en") {
      state.lang = parts[0];
      if (parts[1]) state.pageId = parts[1];
    } else if (parts[0]) {
      state.pageId = parts[0];
    }
  }

  function currentPages() {
    return (window.WIKI_DATA && window.WIKI_DATA[state.lang]) || [];
  }

  function setHash(lang, pageId) {
    window.location.hash = "#" + lang + "/" + pageId;
  }

  function renderChrome() {
    var meta = window.WIKI_META[state.lang];
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    if (brandLink) brandLink.href = "#" + state.lang + "/home";
    navHeading.textContent = meta.navHeading;
    searchInput.placeholder = meta.searchPlaceholder;
    langToggle.textContent = meta.switchToLabel;
    releaseLink.textContent = meta.downloadLabel;
    altReadmeLink.textContent = meta.readmeLabel;
    altReadmeLink.href = meta.readmeHref;
    footerDisclaimer.textContent = meta.disclaimer;
    applyLatestVersion();
  }

  function applyLatestVersion() {
    if (!latestVersion) return;
    if (versionPill) versionPill.textContent = latestVersion + " Wiki";
    articleBody.querySelectorAll('[data-latest-version="badge"]').forEach(function (el) {
      el.textContent = state.lang === "zh" ? ("最新版本 " + latestVersion) : ("Latest " + latestVersion);
    });
    articleBody.querySelectorAll('[data-latest-version="paren"]').forEach(function (el) {
      el.textContent = "(" + latestVersion + ")";
    });
  }

  function syncLatestVersion() {
    if (latestVersion || !window.fetch) return;
    fetch("https://api.github.com/repos/zqs1qiwan/qbox/releases/latest", {
      headers: { Accept: "application/vnd.github+json" }
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        var tag = data && typeof data.tag_name === "string" ? data.tag_name.trim() : "";
        if (!/^v?\d+\.\d+/.test(tag)) return;
        latestVersion = tag;
        try {
          if (window.sessionStorage) sessionStorage.setItem("qbox_latest_ver", tag);
        } catch (e) {}
        applyLatestVersion();
      })
      .catch(function () {});
  }

  function renderNav() {
    var pages = currentPages();
    if (!pages.some(function (p) { return p.id === state.pageId; }) && pages.length) {
      state.pageId = pages[0].id;
    }
    nav.innerHTML = pages
      .map(function (p) {
        var cls = p.id === state.pageId ? "nav-item active" : "nav-item";
        return '<a class="' + cls + '" href="#' + state.lang + "/" + p.id + '"><span>' + p.icon + '</span><span>' + p.title + "</span></a>";
      })
      .join("");
  }

  function renderArticle() {
    var pages = currentPages();
    var idx = pages.findIndex(function (p) { return p.id === state.pageId; });
    if (idx < 0) idx = 0;
    var page = pages[idx];
    if (!page) return;

    articleBody.innerHTML = page.html;
    document.title = page.title + " · QBox Wiki";
    applyLatestVersion();

    articleBody.querySelectorAll(".shot-card img").forEach(function (img) {
      img.addEventListener("click", function () {
        var cap = img.parentElement && img.parentElement.querySelector("figcaption");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "";
        lightboxCaption.textContent = cap ? cap.textContent : img.alt || "";
        lightbox.classList.remove("hidden");
      });
    });

    var prev = idx > 0 ? pages[idx - 1] : null;
    var next = idx < pages.length - 1 ? pages[idx + 1] : null;
    var meta = window.WIKI_META[state.lang];
    pagerLinks.innerHTML =
      (prev
        ? '<a href="#' + state.lang + "/" + prev.id + '">← ' + meta.prevLabel + ": " + prev.title + "</a>"
        : "<span></span>") +
      (next
        ? '<a href="#' + state.lang + "/" + next.id + '">' + meta.nextLabel + ": " + next.title + " →</a>"
        : "<span></span>");

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function renderSearch() {
    var q = (state.query || "").trim().toLowerCase();
    if (!q) {
      searchBanner.classList.add("hidden");
      searchBanner.innerHTML = "";
      return;
    }
    var meta = window.WIKI_META[state.lang];
    var pages = currentPages();
    var hits = pages.filter(function (p) {
      var text = (p.title + " " + p.html.replace(/<[^>]+>/g, " ")).toLowerCase();
      return text.indexOf(q) !== -1;
    });
    if (!hits.length) {
      searchBanner.innerHTML = "<strong>" + meta.noSearchHits + "</strong>";
    } else {
      searchBanner.innerHTML =
        "<div style='margin-bottom:6px;font-weight:600'>" + meta.searchHitsTitle + " (" + hits.length + ")</div>" +
        hits
          .map(function (h) {
            return '<a class="search-hit" href="#' + state.lang + "/" + h.id + '">' + h.icon + " " + h.title + "</a>";
          })
          .join("");
    }
    searchBanner.classList.remove("hidden");
  }

  function renderAll() {
    renderChrome();
    renderNav();
    renderArticle();
    renderSearch();
  }

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  langToggle.addEventListener("click", function () {
    var nextLang = state.lang === "zh" ? "en" : "zh";
    setHash(nextLang, state.pageId);
  });

  searchInput.addEventListener("input", function () {
    state.query = searchInput.value;
    renderSearch();
  });

  window.addEventListener("hashchange", function () {
    parseHash();
    sidebar.classList.remove("open");
    renderAll();
  });

  lightboxClose.addEventListener("click", function () {
    lightbox.classList.add("hidden");
  });
  lightbox.addEventListener("click", function (ev) {
    if (ev.target === lightbox) lightbox.classList.add("hidden");
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") lightbox.classList.add("hidden");
  });

  parseHash();
  renderAll();
  syncLatestVersion();
})();
