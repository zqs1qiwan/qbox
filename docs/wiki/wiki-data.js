window.WIKI_META = {
  zh: {
    navHeading: "文档目录",
    searchPlaceholder: "搜索安装、TVBox 配置、直播源、遥控按键...",
    switchToLabel: "English",
    downloadLabel: "下载 APK",
    readmeLabel: "仓库主页 (README)",
    readmeHref: "https://github.com/zqs1qiwan/qbox/blob/main/README.md",
    prevLabel: "上一篇",
    nextLabel: "下一篇",
    searchHitsTitle: "站内匹配结果",
    noSearchHits: "未找到匹配章节，请尝试更换关键词。",
    disclaimer: "QBox 仅作为本地视频与配置播放器，不内置、不提供、不推荐任何影视内容或订阅源；基于 FongMi/TV 5.6.1 与 Media3 1.11.0，以 GPL-3.0 开源。"
  },
  en: {
    navHeading: "Documentation",
    searchPlaceholder: "Search install, TVBox config, live playlists, remote keys...",
    switchToLabel: "中文",
    downloadLabel: "Download APK",
    readmeLabel: "Repository (README)",
    readmeHref: "https://github.com/zqs1qiwan/qbox/blob/main/README.md",
    prevLabel: "Previous",
    nextLabel: "Next",
    searchHitsTitle: "Matching Sections",
    noSearchHits: "No matching pages found. Try another keyword.",
    disclaimer: "QBox is a pure player shell with zero built-in media or playlists. Built on FongMi/TV 5.6.1 & Media3 1.11.0 under GPL-3.0."
  }
};

window.WIKI_DATA = {
  zh: [
    {
      id: "home",
      icon: "🏠",
      title: "首页概览",
      html: `
        <section class="hero">
          <div class="hero-brand-row">
            <img src="assets/qbox-logo.png" alt="QBox Logo" class="hero-logo" />
            <div>
              <h1>QBox</h1>
              <p class="hero-subtitle">为 Android TV、电视盒子与手机/平板打造的清爽 TVBox 兼容播放器，无广告、无账号、重交互。</p>
            </div>
          </div>
          <div class="hero-badges">
            <span class="hero-badge highlight" data-latest-version="badge">最新版本 Latest</span>
            <span class="hero-badge">TV + 手机/平板双端</span>
            <span class="hero-badge">Android 7.0+ (API 24+)</span>
            <span class="hero-badge">FongMi/TV 5.6.1 + Media3 1.11.0</span>
            <span class="hero-badge">默认简体中文 · GPL-3.0</span>
          </div>
          <div class="hero-actions">
            <a class="hero-btn primary" href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-tv-armeabi-v7a.apk" target="_blank" rel="noopener">⬇ TV 主流 32 位 APK <span data-latest-version="paren"></span></a>
            <a class="hero-btn secondary" href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-mobile-arm64-v8a.apk" target="_blank" rel="noopener">📱 手机/Pad 64 位 APK</a>
            <a class="hero-btn" href="#zh/getting-started">🚀 快速开始</a>
            <a class="hero-btn" href="https://github.com/zqs1qiwan/qbox/releases" target="_blank" rel="noopener">📦 全部版本 Releases</a>
          </div>
        </section>

        <div class="callout warn">
          <strong>纯播放器声明：</strong>QBox 不提供、不内置、不采集、不托管任何影视内容、播放源、直播源或账号接口。所有分类、海报、聚搜结果与频道均来自你自行导入的配置源。
        </div>

        <h2>⚡ 3 步快速上手</h2>
        <div class="quickstart-strip">
          <div class="qs-step">
            <div class="qs-num">1</div>
            <h3>选对版本并安装</h3>
            <p>电视/机顶盒优先选 <code>tv-armeabi-v7a</code>（高端 64 位盒子选 <code>tv-arm64-v8a</code>）；手机与平板选 <code>mobile-arm64-v8a</code>。</p>
          </div>
          <div class="qs-step">
            <div class="qs-num">2</div>
            <h3>扫码或导入配置源</h3>
            <p>打开 <strong>设置 → 点播 / 直播</strong>，用同 Wi-Fi 手机扫码推送链接，或直接输入网络地址 / 导入本地文件。</p>
          </div>
          <div class="qs-step">
            <div class="qs-num">3</div>
            <h3>遥控与触屏畅快观影</h3>
            <p>TV 端按方向键与菜单键直达选集、换源、倍速、音轨字幕与统计面板；手机/平板端完整支持触屏手势与分屏。</p>
          </div>
        </div>

        <h2>✨ 核心特性与架构优势</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>磨砂玻璃海报墙与沉浸详情</h3>
            <p>首页、分类筛选、聚搜与详情页采用一致的暗色质感与高斯模糊氛围背景，焦点框清晰，长剧名与网盘文件名自动提取集数与 4K/HDR 角标。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>TV 遥控优先 + Mobile 触屏适配</h3>
            <p>TV 端精简层级、防焦点丢失且支持 3 次长按返回逃生；手机/平板端独立布局，支持横竖屏切换、Pad 多列与设置不中断。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔌</div>
            <h3>完整兼容 FongMi/TV 爬虫生态</h3>
            <p>播放与爬虫底座严格对齐 FongMi/TV 5.6.1 与 Media3 1.11.0，现有 Jar / JS (QuickJS) / JSON 配置源开箱可用。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎛️</div>
            <h3>专业播控与 Nerd 统计面板</h3>
            <p>支持 0.1x–5.0x 倍速、长按上键倍速加速、片头片尾跳过、多音轨/外挂字幕/视角切换与实时网速/编码状态面板。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🇨🇳</div>
            <h3>默认简体中文 · 双语热切换</h3>
            <p>即使在英文系统或外贸电视盒子上，首次安装也默认显示简体中文；可在「设置 → 系统 → 语言」随时手动切换英文。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>零广告零上报 · 本地备份</h3>
            <p>不接任何统计、广告或账号 SDK；观看历史、收藏、点播/直播配置全部存于本机，支持数据库一键备份与恢复。</p>
          </div>
        </div>

        <h2>📸 实机界面预览（点击放大 · <a href="#zh/ui-remote">查看全部截图与操作说明 →</a>）</h2>
        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/v203-home.jpg" alt="QBox 首页海报墙" loading="lazy" />
            <figcaption>首页海报墙 · 莫兰迪蓝立体徽标、分类导航与推荐海报</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-detail.jpg" alt="影视详情与选集预览" loading="lazy" />
            <figcaption>详情页 · 小窗预览、演员/简介完整排版、线路与换源入口</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-player.jpg" alt="全屏播放控制条" loading="lazy" />
            <figcaption>全屏播控 · 底部操作条、选集、倍速、清晰度、音轨与字幕</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/collect-search.png" alt="多站聚合搜索" loading="lazy" />
            <figcaption>多站聚搜 ·「全部」筛选标签、站点 emoji 徽标与实时结果</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/config-qr.png" alt="扫码配置导入弹窗" loading="lazy" />
            <figcaption>扫码推源 · 局域网二维码、网页地址、本地文件选择与快捷输入</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/setting-zh.png" alt="设置页简体中文界面" loading="lazy" />
            <figcaption>设置中心 · 默认简体中文、DoH DNS、语言切换与本地备份</figcaption>
          </figure>
        </div>
      `
    },
    {
      id: "getting-started",
      icon: "🚀",
      title: "安装、双端选包与语言",
      html: `
        <h1>安装、双端选包与语言设置</h1>
        <p>自 <code>v2.0.6</code> 起，QBox 同时提供 <strong>TV 端（<code>leanback</code>）</strong> 与 <strong>手机/平板端（<code>mobile</code>）</strong> 两类独立安装包，在线更新器会自动按本机类型和 CPU 架构匹配对应包，不会串包。</p>

        <h2>1. 我该下载哪一个 APK？</h2>
        <table>
          <thead>
            <tr><th>设备类型</th><th>推荐下载（<code>latest</code> 固定链接）</th><th>适用场景说明</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>电视 / 机顶盒（主流）</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-tv-armeabi-v7a.apk" target="_blank" rel="noopener"><code>QBox-latest-tv-armeabi-v7a.apk</code></a></td>
              <td>绝大多数智能电视、运营商机顶盒、32 位芯片电视盒子（兼容性最强）。</td>
            </tr>
            <tr>
              <td><strong>电视 / 高配 64 位盒子</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-tv-arm64-v8a.apk" target="_blank" rel="noopener"><code>QBox-latest-tv-arm64-v8a.apk</code></a></td>
              <td>确认系统为 64 位 Android TV 的新款旗舰盒子，内存调度与解码效率更佳。</td>
            </tr>
            <tr>
              <td><strong>手机 / 平板 Pad（主流）</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-mobile-arm64-v8a.apk" target="_blank" rel="noopener"><code>QBox-latest-mobile-arm64-v8a.apk</code></a></td>
              <td>现代安卓手机与平板电脑（支持触屏、竖屏/横屏、Pad 多列与分屏）。</td>
            </tr>
            <tr>
              <td><strong>老旧 32 位平板</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-mobile-armeabi-v7a.apk" target="_blank" rel="noopener"><code>QBox-latest-mobile-armeabi-v7a.apk</code></a></td>
              <td>仅支持 32 位 ARM 的早期平板或车机。</td>
            </tr>
          </tbody>
        </table>

        <div class="callout info">
          <strong>覆盖升级说明：</strong><code>1.9.13</code> 及以上版本的正式版共用同一签名，直接下载新版安装或在应用内点击「版本」检查更新即可覆盖升级，配置源、收藏与播放记录都会保留。（<code>1.9.12</code> 及更早版本需先卸载再安装。）
        </div>

        <h2>2. 安装步骤（TV 端常见方式）</h2>
        <ol>
          <li><strong>U 盘安装</strong>：电脑下载对应 <code>tv-*.apk</code> 拷入 U 盘，插到电视/盒子 USB 口，用系统「文件管理器」打开安装包（首次需开启「允许未知来源应用」）。</li>
          <li><strong>ADB 局域网安装</strong>：在电脑终端执行 <code>adb connect &lt;盒子IP&gt;:5555</code>，再执行 <code>adb install -r QBox-latest-tv-armeabi-v7a.apk</code>。</li>
          <li><strong>手机传输安装</strong>：用电视自带的「无线传应用 / 快传」把 APK 发送到电视端安装。</li>
        </ol>

        <h2>3. 默认简体中文与中英文手动切换</h2>
        <p>QBox 在启动入口即锁定默认语言为 <strong>简体中文</strong>——即使外贸盒子或测试环境系统本身是 <code>en-US</code>，冷启动也会直接呈现中文界面。需要切换英文时：</p>
        <ul>
          <li><strong>TV 端</strong>：打开 <strong>设置 → 系统 → 语言</strong>，按遥控器确认键即可在「简体中文」与「English」间即时切换。</li>
          <li><strong>手机 / 平板端</strong>：进入底部导航 <strong>设置 → 语言</strong>，点击弹出单选框切换即可，原有配置与播放服务均会保留不断连。</li>
        </ul>

        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/setting-zh.png" alt="默认简体中文设置页" loading="lazy" />
            <figcaption>默认简体中文 · 系统区域无痕模式、DoH、图片尺寸、语言与版本完整显示</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/setting-en.png" alt="手动切换英文设置页" loading="lazy" />
            <figcaption>手动切换英文 · 点击「语言」即时生效并持久化保存</figcaption>
          </figure>
        </div>
      `
    },
    {
      id: "ui-remote",
      icon: "📺",
      title: "界面导览、遥控与触屏",
      html: `
        <h1>界面导览、遥控与触屏操作</h1>
        <p>QBox 针对大屏遥控器与移动触屏分别优化了导航路径和视觉反馈。</p>

        <h2>1. 核心界面导览</h2>
        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/v203-filter.jpg" alt="分类与筛选抽屉" loading="lazy" />
            <figcaption>分类与筛选 · 顶部条件芯片一键展开/收起，按年代/地区/类型快速过滤</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/collect-search.png" alt="聚搜页" loading="lazy" />
            <figcaption>聚搜结果 · 跨站并行搜索，顶部站点 Tab 可快速过滤来源</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-episodes.jpg" alt="长剧名选集展示" loading="lazy" />
            <figcaption>选集网格 · 左侧提取集数前缀 + 画质/HDR 角标，右侧滚动保留完整原名</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/detail-zh-chips.png" alt="选集分组高对比度标签" loading="lazy" />
            <figcaption>分组标签 · 选中分组采用高对比度纯白文字，大屏远距清晰可辨</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-pause.jpg" alt="暂停精简态" loading="lazy" />
            <figcaption>暂停精简态 · 暂停画面干净不遮挡，左右方向键可直接微调进度</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-player.jpg" alt="全屏控制栏" loading="lazy" />
            <figcaption>全屏控制栏 · 集中呼出选集、倍速、画面、音轨、字幕与统计详情</figcaption>
          </figure>
        </div>

        <h2>2. TV 端遥控器按键速查</h2>
        <table>
          <thead>
            <tr><th>页面 / 状态</th><th>按键操作</th><th>实际功能</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>全局任意界面</strong></td><td><code>长按 返回键</code>（连发 3 次+）</td><td>万能逃生键：直接退出 QBox 回到电视桌面（应对盒子待机黑屏/卡死）。</td></tr>
            <tr><td><strong>分类 / 点播页</strong></td><td><code>菜单键 (MENU)</code></td><td>快速展开或收起顶部筛选条件栏。</td></tr>
            <tr><td><strong>详情页</strong></td><td><code>OK / 确认键</code>（焦点在播放按钮）</td><td>直接进入全屏播放当前选中的剧集。</td></tr>
            <tr><td><strong>全屏播放中</strong></td><td><code>OK</code> / <code>下键</code> / <code>菜单键</code></td><td>呼出底部播放控制条与快捷动作栏；再次按 <code>下键</code> 移至动作按钮。</td></tr>
            <tr><td><strong>全屏播放中</strong></td><td><code>左 / 右键</code>（含暂停态）</td><td>快退 / 快进；松手防重触发，精准跳转。</td></tr>
            <tr><td><strong>全屏播放中</strong></td><td><code>长按 上键</code></td><td>按住触发临时倍速加速（默认 2.0x+，可在倍速设置中自定义），松手还原。</td></tr>
            <tr><td><strong>直播全屏</strong></td><td><code>上 / 下键</code> · <code>左 / OK</code></td><td>上下换台；呼出分组与频道列表（含 EPG 节目单预览）。</td></tr>
          </tbody>
        </table>

        <h2>3. 手机 / 平板（Mobile / Pad）触屏操作</h2>
        <ul>
          <li><strong>底部导航切换</strong>：直接在「点播 / 直播 / 设置」间点按切换；长按「直播」支持固定桌面快捷方式。</li>
          <li><strong>Pad 与横竖屏自适应</strong>：根据屏幕宽度与横竖屏动态计算海报列数（保底至少 2 列），切换主题、语言或分屏时不清空当前源与本地服务。</li>
          <li><strong>播放器手势与面板</strong>：全屏横屏下右侧滑出侧边设置面板（倍速/画面/音频/字幕/弹幕），竖屏下采用底部抽屉面板。</li>
        </ul>
      `
    },
    {
      id: "vod-config",
      icon: "📦",
      title: "点播配置源导入与格式",
      html: `
        <h1>点播配置源导入与格式指南</h1>
        <p>QBox 支持标准 TVBox JSON 配置格式（完整字段说明可参考仓库文档 <code>docs/CONFIG.md</code> 与 <code>docs/SPIDER.md</code>）。</p>

        <h2>1. 导入配置源的 3 种方式</h2>
        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/config-qr.png" alt="配置源导入弹窗" loading="lazy" />
            <figcaption>配置弹窗 · 左侧扫码、右上网页推送地址，下方输入链接或选本地文件</figcaption>
          </figure>
        </div>
        <ol>
          <li><strong>手机扫码推送（TV 端最省心）</strong>：打开 <strong>设置 → 点播</strong>，用与电视同一 Wi-Fi 的手机扫描二维码或在浏览器打开界面显示的 <code>http://&lt;电视IP&gt;:9978</code>，粘贴你的配置链接点推送即可。</li>
          <li><strong>快捷前缀输入</strong>：在输入框里直接键入首字母会自动补全协议头：<code>h</code> → <code>http://</code>，<code>f</code> → <code>file://</code>，<code>a</code> → <code>assets://</code>。</li>
          <li><strong>本地配置文件</strong>：点「选择」按钮，授权存储权限后直接挑选盒子或手机本机的 <code>.json</code> 配置文件。</li>
        </ol>

        <h2>2. 配置源常见结构示例</h2>
        <pre><code>{
  "spider": "https://example.com/spider.jar;md5;xxxxxxxxxxxxxxxx",
  "wallpaper": "https://example.com/bg.jpg",
  "sites": [
    {
      "key": "example_site",
      "name": "示例站点",
      "type": 3,
      "api": "csp_Example",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    }
  ],
  "parses": [
    { "name": "解析1", "type": 1, "url": "https://example.com/parse?url=" }
  ],
  "flags": ["youku", "qq", "iqiyi", "mgtv"],
  "doh": [
    { "name": "Tencent", "url": "https://doh.pub/dns-query", "ips": ["119.29.29.29"] },
    { "name": "Alibaba", "url": "https://dns.alidns.com/dns-query", "ips": ["223.5.5.5"] }
  ]
}</code></pre>
        <ul>
          <li><code>type: 3</code> 为 Jar 爬虫或 QuickJS JS 扩展（<code>api</code> 指向 <code>.js</code> 地址）；<code>type: 0/1</code> 为 XML/JSON 采集站接口；<code>type: 4</code> 为服务端远程接口。</li>
          <li>支持在配置中声明 <code>lives</code> 节点，一份配置即可同时带入点播站点与直播频道。</li>
          <li><strong>换源与多站聚搜</strong>：点「首页图标」可切换主站，并支持勾选哪些站点参与首页搜索与详情页「换源」。</li>
        </ul>
      `
    },
    {
      id: "live-config",
      icon: "📡",
      title: "直播源格式与频道配置",
      html: `
        <h1>直播源格式与频道配置</h1>
        <p>直播源既可以随点播配置的 <code>lives</code> 字段自动加载，也可以在 <strong>设置 → 直播</strong> 中单独填入直播订阅地址或本地文件（完整规范见 <code>docs/LIVE.md</code>）。</p>

        <h2>1. TXT 分组格式（最常见）</h2>
        <pre><code>央视频道,#genre#
CCTV-1,https://example.com/cctv1.m3u8
CCTV-5,https://example.com/cctv5_1.m3u8
CCTV-5,https://example.com/cctv5_2.m3u8

卫视频道,#genre#
湖南卫视,https://example.com/hunan.m3u8</code></pre>
        <p>同名频道（如上例两个 <code>CCTV-5</code>）会自动合并为同一频道的多条备选线路，播放失败或卡顿时可在播放界面切换线路。</p>

        <h2>2. M3U / #EXTINF 格式（支持台标与回看）</h2>
        <pre><code>#EXTM3U x-tvg-url="https://example.com/epg.xml.gz"
#EXTINF:-1 tvg-name="CCTV1" tvg-logo="https://example.com/cctv1.png" group-title="央视" catchup="append" catchup-source="?playseek=\${(b)yyyyMMddHHmmss}-\${(e)yyyyMMddHHmmss}",CCTV-1 综合
https://example.com/cctv1.m3u8</code></pre>
        <ul>
          <li><code>x-tvg-url</code>：指定 XMLTV 格式的 EPG 节目单地址。</li>
          <li><code>tvg-logo</code>：频道台标图标（QBox 内置 128dp 尺寸保护与失败缓存控制，防止大图撑爆内存）。</li>
          <li><code>catchup</code> / <code>catchup-source</code>：开启时移与节目单回看支持。</li>
        </ul>

        <h2>3. 频道请求头与 DRM 声明</h2>
        <p>M3U 支持通过 <code>#EXTVLCOPT:http-user-agent=...</code>、<code>#EXTVLCOPT:http-referrer=...</code> 或 <code>#KODIPROP:inputstream.adaptive.license_type=...</code> 为特定频道声明 UA、Referer 或 ClearKey / Widevine DRM 授权。</p>
      `
    },
    {
      id: "playback-settings",
      icon: "🎛️",
      title: "播放设置、解码与调校",
      html: `
        <h1>播放设置、解码与音画调校</h1>
        <p>QBox 在 TV 端（<strong>设置 → 播放设置</strong>）和全屏播控栏内提供了细粒度的播放器参数控制。</p>

        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/player-settings.png" alt="播放设置页面" loading="lazy" />
            <figcaption>播放设置 · 引擎、解码设置、智能去广、渲染方式、缩放比例、缓冲与预载</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-player.jpg" alt="全屏控制栏" loading="lazy" />
            <figcaption>播控悬浮面板 · 5 套设置弹窗统一居中、自适应滚动且不裁切</figcaption>
          </figure>
        </div>

        <h2>1. 核心播放与解码选项</h2>
        <table>
          <thead>
            <tr><th>设置项</th><th>可选值</th><th>建议与说明</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>播放引擎</strong></td><td><code>EXO</code> / <code>IJK</code></td><td>默认推荐使用基于 Media3 1.11.0 的 <code>EXO</code> 引擎（含解码失败自动回退机制）；老片源兼容异常可切 <code>IJK</code>。</td></tr>
            <tr><td><strong>解码设置</strong></td><td>硬解 / 软解 / 隧道模式 / 音频直通 / 杜比视界</td><td>日常保持硬解；若遇特定 10bit/特殊封装黑屏有声，可进「解码设置」尝试视频软解或调整杜比视界输出策略（自动/开/关）。</td></tr>
            <tr><td><strong>渲染方式</strong></td><td><code>Surface</code> / <code>Texture</code></td><td>电视端优先 <code>Surface</code>（性能最佳）；遇到动画叠加或部分盒子画面撕裂时可切 <code>Texture</code>。</td></tr>
            <tr><td><strong>缩放比例</strong></td><td>原始 / 16:9 / 4:3 / 填充 / 裁剪</td><td>可全局设置，也可在全屏播控栏针对单部剧单独调整并记入历史。</td></tr>
            <tr><td><strong>缓冲与预载</strong></td><td>1~10 倍缓冲 · 预载设置</td><td>网络波动大时适当调高缓冲倍数；开启预载可在切集时更顺滑。</td></tr>
          </tbody>
        </table>

        <h2>2. 观影实用技巧</h2>
        <ul>
          <li><strong>倍速播放</strong>：支持 <code>0.1x ~ 5.0x</code> 精细调节，支持「长按上键」临时倍速（如 2.0x / 3.0x）。</li>
          <li><strong>片头 / 片尾跳过</strong>：追连续剧时可在全屏控制台设定本剧的片头/片尾时长，后续集数自动跳过并从正片开播。</li>
          <li><strong>Nerd 统计信息</strong>：在全屏控制栏打开统计开关，可实时查看当前解码器、视频分辨率、FPS、音轨格式与缓冲速率，方便排查片源本身是否卡顿。</li>
        </ul>
      `
    },
    {
      id: "local-push-backup",
      icon: "📱",
      title: "扫码推送、局域网与备份",
      html: `
        <h1>扫码推送、局域网文件与本地备份</h1>

        <h2>1. 局域网 Web 推送与本地 HTTP 服务</h2>
        <p>QBox 在进程启动时即拉起内置本地 HTTP 服务（默认端口 <code>9978</code>，端口占用时自动顺延），即使尚未导入任何配置，也可以随时进入「推送」或扫码弹窗。</p>
        <ul>
          <li>手机与电视处于同一局域网下，微信/浏览器扫码打开控制页即可直接推送点播链接、配置 URL、搜索关键词，或上传本地配置包。</li>
          <li>高级自动化场景可调用本地 HTTP API（详见仓库 <code>docs/LOCAL.md</code>），支持 <code>/action</code>、<code>/file</code>、<code>/upload</code>、<code>/media</code>、<code>/device</code> 等端点。</li>
        </ul>

        <h2>2. 局域网 / 本地文件浏览</h2>
        <p>通过首页入口或文件管理页面可浏览本机存储与挂载盘里的视频、字幕及 <code>.m3u</code> / <code>.json</code> 配置，直接起播本地高码率影片。</p>

        <h2>3. 备份、恢复与缓存清理</h2>
        <ul>
          <li><strong>备份与恢复</strong>：在 <strong>设置 → 维护 → 备份 / 恢复</strong> 中可将本机数据库（含已保存配置、历史记录与收藏）导出为备份文件，刷机或换盒子后一键还原。</li>
          <li><strong>缓存管理</strong>：设置页实时展示本地图片与临时下载缓存大小，点击「缓存」即可清理释放盒子空间。</li>
        </ul>
      `
    },
    {
      id: "faq",
      icon: "❓",
      title: "常见问题排查",
      html: `
        <h1>常见问题排查 (FAQ)</h1>

        <h3>1. 安装时提示「解析包错误」或「应用未安装」？</h3>
        <ul>
          <li><strong>架构不匹配</strong>：绝大多数电视与盒子只能装 <strong><code>tv-armeabi-v7a</code></strong>，装了 <code>arm64-v8a</code> 会报错；反之极少数纯 64 位新手机只支持 <code>mobile-arm64-v8a</code>。</li>
          <li><strong>旧版签名不同</strong>：如果你安装过 <code>1.9.12</code> 或更早版本，先卸载旧版再装新包；<code>1.9.13</code> 之后可直接覆盖安装保留数据。</li>
        </ul>

        <h3>2. 手机扫码打不开推送网页？</h3>
        <ul>
          <li>请确保手机和电视/盒子连在<strong>同一个路由器 Wi-Fi</strong> 下（不要手机开流量或连在访客隔离 Wi-Fi）。</li>
          <li>若使用电脑安卓模拟器，模拟器内部地址常显示为 <code>10.0.2.15:9978</code>（NAT 虚地址），需先做端口转发或直接在输入栏手动粘贴配置地址。</li>
        </ul>

        <h3>3. 播放时有声音黑屏，或画面花屏？</h3>
        <ul>
          <li>进入 <strong>设置 → 播放设置 → 解码设置</strong>，尝试开启「视频软解」或关闭「隧道模式」；也可以在全屏菜单把渲染方式从 <code>Surface</code> 切换为 <code>Texture</code> 或更换播放引擎为 <code>IJK</code>。</li>
        </ul>

        <h3>4. 为什么在 x86 模拟器里提示「当前设备为 x86 架构，弹幕暂不可用」？</h3>
        <ul>
          <li>内置弹幕底层原生库仅提供 ARM（<code>armeabi-v7a</code> / <code>arm64-v8a</code>）版本，因此在 x86_64 模拟器上会主动降级禁用并弹出提示，不会崩溃；真实电视、盒子、手机与平板均可正常使用。</li>
        </ul>

        <h3>5. 为何没有直接升级到 FongMi/TV 5.9 的 mpv/libass 功能？</h3>
        <ul>
          <li>上游 <code>FongMi/media</code> 公开仓库目前停留在 <code>release-1.11.0-fongmi</code>（Media3 1.11.0），新版 media 尚未开源放出。为保证爬虫生态稳定与可独立编译，QBox 在保持 Media3 1.11.0 底座的同时，已选择性移植上游服务保活、倍速安全校验等不依赖新版 media 的改进。</li>
        </ul>
      `
    }
  ],
  en: [
    {
      id: "home",
      icon: "🏠",
      title: "Home",
      html: `
        <section class="hero">
          <div class="hero-brand-row">
            <img src="assets/qbox-logo.png" alt="QBox Logo" class="hero-logo" />
            <div>
              <h1>QBox</h1>
              <p class="hero-subtitle">A clean, TVBox-compatible player shell for Android TV, TV Boxes, Phones, and Tablets — zero ads, zero tracking, built for remotes and touch.</p>
            </div>
          </div>
          <div class="hero-badges">
            <span class="hero-badge highlight" data-latest-version="badge">Latest</span>
            <span class="hero-badge">TV + Mobile/Pad Builds</span>
            <span class="hero-badge">Android 7.0+ (API 24+)</span>
            <span class="hero-badge">FongMi/TV 5.6.1 + Media3 1.11.0</span>
            <span class="hero-badge">GPL-3.0 Open Source</span>
          </div>
          <div class="hero-actions">
            <a class="hero-btn primary" href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-tv-armeabi-v7a.apk" target="_blank" rel="noopener">⬇ TV 32-bit APK <span data-latest-version="paren"></span></a>
            <a class="hero-btn secondary" href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-mobile-arm64-v8a.apk" target="_blank" rel="noopener">📱 Mobile/Pad 64-bit APK</a>
            <a class="hero-btn" href="#en/getting-started">🚀 Getting Started</a>
            <a class="hero-btn" href="https://github.com/zqs1qiwan/qbox/releases" target="_blank" rel="noopener">📦 All Releases</a>
          </div>
        </section>

        <div class="callout warn">
          <strong>Pure Player Notice:</strong> QBox does NOT bundle, host, or recommend any media streams, playlists, or accounts. All catalogs, posters, search results, and live channels come solely from the configuration URLs you import.
        </div>

        <h2>⚡ 3-Step Quick Start</h2>
        <div class="quickstart-strip">
          <div class="qs-step">
            <div class="qs-num">1</div>
            <h3>Install the Right Build</h3>
            <p>Use <code>tv-armeabi-v7a</code> for most Android TVs/boxes (<code>tv-arm64-v8a</code> for 64-bit boxes), or <code>mobile-arm64-v8a</code> for phones &amp; tablets.</p>
          </div>
          <div class="qs-step">
            <div class="qs-num">2</div>
            <h3>Scan QR or Import Config</h3>
            <p>Open <strong>Setting → Vod / Live</strong>, scan the LAN QR code from your phone, paste a URL, or pick a local <code>.json</code> file.</p>
          </div>
          <div class="qs-step">
            <div class="qs-num">3</div>
            <h3>Watch with Remote or Touch</h3>
            <p>Use D-pad + Menu on TV for episodes, speed, tracks, and stats; use touch gestures and adaptive multi-column grids on Mobile/Pad.</p>
          </div>
        </div>

        <h2>✨ Highlights</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Glassmorphism Poster Wall</h3>
            <p>Ambient blurred backdrops, clean focus rings, and smart episode parsing that extracts episode numbers and 4K/HDR badges from long cloud filenames.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>TV Remote + Mobile/Pad Touch</h3>
            <p>Dedicated Leanback UI with focus safeguards and 3x Back emergency exit; dedicated Mobile UI with responsive phone/tablet columns and split-screen support.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔌</div>
            <h3>FongMi/TV Spider Compatible</h3>
            <p>Core playback and spider contracts stay aligned with FongMi/TV 5.6.1 &amp; Media3 1.11.0 for broad compatibility with Jar &amp; QuickJS sources.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎛️</div>
            <h3>Rich Playback Controls</h3>
            <p>0.1x–5.0x speed, long-press Up speed boost, intro/outro skip, audio/subtitle tracks, and YouTube-style nerd stats overlay.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>Default Simplified Chinese + English Switch</h3>
            <p>Defaults to Simplified Chinese even on <code>en-US</code> devices, with a one-click manual switch to English in Settings on both TV and Mobile.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Zero Telemetry &amp; Local Backup</h3>
            <p>No analytics, ads, or login SDKs. Watch history, favorites, and configs stay strictly on-device with local backup/restore.</p>
          </div>
        </div>

        <h2>📸 Screenshots (Click to Zoom · <a href="#en/ui-remote">See All &amp; Keymap →</a>)</h2>
        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/v203-home.jpg" alt="Home Poster Wall" loading="lazy" />
            <figcaption>Home Poster Wall · Brand badge, categories, and recommendations</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-detail.jpg" alt="Detail & Preview" loading="lazy" />
            <figcaption>Detail Page · Mini preview, synopsis, lines, and source switching</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-player.jpg" alt="Fullscreen Player OSD" loading="lazy" />
            <figcaption>Fullscreen Controls · Episodes, speed, quality, audio &amp; subtitle</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/collect-search.png" alt="Multi-Site Search" loading="lazy" />
            <figcaption>Multi-Site Search · Filterable source tabs and site badges</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/config-qr.png" alt="Config QR Dialog" loading="lazy" />
            <figcaption>Config Import · LAN QR push, browser URL, and local file picker</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/setting-en.png" alt="English Settings" loading="lazy" />
            <figcaption>Settings (English) · Manual language switch, DoH, and backup</figcaption>
          </figure>
        </div>
      `
    },
    {
      id: "getting-started",
      icon: "🚀",
      title: "Install, Builds & Language",
      html: `
        <h1>Install, Builds &amp; Language</h1>
        <p>Starting from <code>v2.0.6</code>, QBox publishes dedicated <strong>TV (<code>leanback</code>)</strong> and <strong>Mobile/Pad (<code>mobile</code>)</strong> APKs. The built-in updater strictly matches your device mode and ABI so updates never cross-install.</p>

        <h2>1. Choosing the Right APK</h2>
        <table>
          <thead>
            <tr><th>Device</th><th>Download (<code>latest</code>)</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Android TV / Box (Most Devices)</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-tv-armeabi-v7a.apk" target="_blank" rel="noopener"><code>QBox-latest-tv-armeabi-v7a.apk</code></a></td>
              <td>Best compatibility for 32-bit smart TVs and set-top boxes.</td>
            </tr>
            <tr>
              <td><strong>Android TV (64-bit Box)</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-tv-arm64-v8a.apk" target="_blank" rel="noopener"><code>QBox-latest-tv-arm64-v8a.apk</code></a></td>
              <td>For 64-bit Android TV devices.</td>
            </tr>
            <tr>
              <td><strong>Phone / Tablet (Most Devices)</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-mobile-arm64-v8a.apk" target="_blank" rel="noopener"><code>QBox-latest-mobile-arm64-v8a.apk</code></a></td>
              <td>Recommended for modern 64-bit phones and tablets.</td>
            </tr>
            <tr>
              <td><strong>Legacy 32-bit Tablet</strong></td>
              <td><a href="https://github.com/zqs1qiwan/qbox/releases/latest/download/QBox-latest-mobile-armeabi-v7a.apk" target="_blank" rel="noopener"><code>QBox-latest-mobile-armeabi-v7a.apk</code></a></td>
              <td>For older 32-bit ARM tablets.</td>
            </tr>
          </tbody>
        </table>

        <h2>2. Default Language &amp; Switching to English</h2>
        <p>QBox defaults to <strong>Simplified Chinese</strong> on first launch. To switch to English:</p>
        <ul>
          <li><strong>TV</strong>: Open <strong>设置 → 系统 → 语言</strong> and press OK to toggle between <code>简体中文</code> and <code>English</code>.</li>
          <li><strong>Mobile / Pad</strong>: Open the <strong>Setting</strong> tab → <strong>语言</strong> and pick <code>English</code>.</li>
        </ul>

        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/setting-zh.png" alt="Settings in Chinese" loading="lazy" />
            <figcaption>Default Simplified Chinese UI</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/setting-en.png" alt="Settings in English" loading="lazy" />
            <figcaption>Switched to English via Settings → Language</figcaption>
          </figure>
        </div>
      `
    },
    {
      id: "ui-remote",
      icon: "📺",
      title: "UI Tour, Remote & Touch",
      html: `
        <h1>UI Tour, Remote Controls &amp; Touch</h1>
        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/v203-filter.jpg" alt="Category Filter" loading="lazy" />
            <figcaption>Category &amp; Filter Bar · Toggle filters via Menu key on TV</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-episodes.jpg" alt="Episode List" loading="lazy" />
            <figcaption>Episode Grid · Parsed episode prefixes &amp; 4K/HDR badges</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/detail-zh-chips.png" alt="Group Chips" loading="lazy" />
            <figcaption>Episode Group Chips · High-contrast selected state</figcaption>
          </figure>
          <figure class="shot-card">
            <img src="assets/screenshots/v203-pause.jpg" alt="Paused View" loading="lazy" />
            <figcaption>Clean Pause Mode · Unobstructed frame with D-pad seek</figcaption>
          </figure>
        </div>

        <h2>TV Remote Keymap</h2>
        <table>
          <thead>
            <tr><th>Context</th><th>Key</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Global</strong></td><td><code>Long-press Back</code> (3+ repeats)</td><td>Emergency exit to TV launcher.</td></tr>
            <tr><td><strong>Browse / Category</strong></td><td><code>Menu</code></td><td>Toggle filter chips.</td></tr>
            <tr><td><strong>Fullscreen VOD</strong></td><td><code>OK</code> / <code>Down</code> / <code>Menu</code></td><td>Show bottom control bar and quick actions.</td></tr>
            <tr><td><strong>Fullscreen VOD</strong></td><td><code>Left</code> / <code>Right</code></td><td>Seek backward / forward (also works while paused).</td></tr>
            <tr><td><strong>Fullscreen VOD</strong></td><td><code>Hold Up</code></td><td>Temporary speed boost while held.</td></tr>
            <tr><td><strong>Fullscreen Live</strong></td><td><code>Up</code> / <code>Down</code> · <code>OK</code></td><td>Switch channels / open channel &amp; EPG drawer.</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "vod-config",
      icon: "📦",
      title: "VOD Config & Formats",
      html: `
        <h1>VOD Config Import &amp; Formats</h1>
        <p>QBox accepts standard TVBox JSON configs (full field spec in <code>docs/CONFIG.md</code> &amp; <code>docs/SPIDER.md</code>).</p>
        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/config-qr.png" alt="Config Dialog" loading="lazy" />
            <figcaption>Config Dialog · QR code, browser push URL, input box &amp; local picker</figcaption>
          </figure>
        </div>
        <ul>
          <li><strong>QR Web Push</strong>: Scan the QR code from a phone on the same Wi-Fi, or visit <code>http://&lt;device-ip&gt;:9978</code> in a browser.</li>
          <li><strong>Protocol Shorthand</strong>: Typing <code>h</code>, <code>f</code>, or <code>a</code> into an empty URL field expands to <code>http://</code>, <code>file://</code>, or <code>assets://</code>.</li>
        </ul>
        <pre><code>{
  "spider": "https://example.com/spider.jar;md5;xxxxxxxxxxxxxxxx",
  "sites": [
    { "key": "demo", "name": "Demo Site", "type": 3, "api": "csp_Demo", "searchable": 1 }
  ],
  "parses": [
    { "name": "Parse 1", "type": 1, "url": "https://example.com/parse?url=" }
  ]
}</code></pre>
      `
    },
    {
      id: "live-config",
      icon: "📡",
      title: "Live Playlists & Formats",
      html: `
        <h1>Live Playlists &amp; Formats</h1>
        <p>Load live channels either from the <code>lives</code> array inside your VOD config or directly via <strong>Setting → Live</strong> (full spec in <code>docs/LIVE.md</code>).</p>
        <h2>TXT Format</h2>
        <pre><code>News,#genre#
Channel 1,https://example.com/ch1.m3u8
Channel 1,https://example.com/ch1_backup.m3u8</code></pre>
        <h2>M3U Format (EPG, Logo &amp; Catchup)</h2>
        <pre><code>#EXTM3U x-tvg-url="https://example.com/epg.xml.gz"
#EXTINF:-1 tvg-logo="https://example.com/logo.png" group-title="News",Channel 1
https://example.com/ch1.m3u8</code></pre>
      `
    },
    {
      id: "playback-settings",
      icon: "🎛️",
      title: "Playback, Decode & Tuning",
      html: `
        <h1>Playback, Decode &amp; Audio/Video Tuning</h1>
        <div class="shot-grid">
          <figure class="shot-card">
            <img src="assets/screenshots/player-settings.png" alt="Player Settings" loading="lazy" />
            <figcaption>Player Settings · Engine, decode, ad-skip, renderer, scale, buffer &amp; preload</figcaption>
          </figure>
        </div>
        <ul>
          <li><strong>Engine</strong>: <code>EXO</code> (Media3 1.11.0 with video decoder fallback) or <code>IJK</code>.</li>
          <li><strong>Decode</strong>: Hardware/software video &amp; audio decode, tunneling, audio pass-through, and Dolby Vision output policy.</li>
          <li><strong>Controls</strong>: <code>0.1x–5.0x</code> speed, intro/outro skip timers, aspect ratio scaling, and Nerd Stats overlay.</li>
        </ul>
      `
    },
    {
      id: "local-push-backup",
      icon: "📱",
      title: "Web Push, LAN & Backup",
      html: `
        <h1>Web Push, LAN Files &amp; Local Backup</h1>
        <ul>
          <li><strong>Built-in Local Server</strong>: Starts automatically on port <code>9978</code> (or next free port) at app launch so Web Push works even before any config is loaded.</li>
          <li><strong>Local HTTP API</strong>: Supports <code>/action</code>, <code>/file</code>, <code>/upload</code>, <code>/media</code>, and <code>/device</code> (documented in <code>docs/LOCAL.md</code>).</li>
          <li><strong>Backup &amp; Cache</strong>: Back up and restore local configs, history, and favorites in Settings; clear image/download cache anytime.</li>
        </ul>
      `
    },
    {
      id: "faq",
      icon: "❓",
      title: "FAQ & Troubleshooting",
      html: `
        <h1>FAQ &amp; Troubleshooting</h1>
        <h3>1. "App not installed" or parse error when installing APK?</h3>
        <p>Check your device ABI: most TVs/boxes require <code>tv-armeabi-v7a</code>, while modern phones/tablets require <code>mobile-arm64-v8a</code>. Versions <code>1.9.13+</code> share the same release key; uninstall <code>1.9.12</code> or older first.</p>
        <h3>2. Black screen with audio only?</h3>
        <p>Open <strong>Setting → Player setting → Decode setting</strong> and try software video decode, switch renderer from <code>Surface</code> to <code>Texture</code>, or switch engine to <code>IJK</code>.</p>
        <h3>3. Why is danmaku disabled on x86_64 emulators?</h3>
        <p>Bundled danmaku native libraries ship for ARM ABIs only; x86_64 emulators gracefully disable danmaku with a toast notice, while real ARM TVs, phones, and tablets work normally.</p>
      `
    }
  ]
};
