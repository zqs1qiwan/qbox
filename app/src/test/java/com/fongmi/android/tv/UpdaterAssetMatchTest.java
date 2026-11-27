package com.fongmi.android.tv;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;

/**
 * 校验 {@link Updater#selectAssetUrl} 在 TV 与 Mobile/Pad 双产物及多 ABI 下的精确匹配与防串包隔离。
 */
@RunWith(RobolectricTestRunner.class)
@Config(sdk = 34)
public class UpdaterAssetMatchTest {

    private static JSONArray dualReleaseAssets() throws Exception {
        JSONArray assets = new JSONArray();
        assets.put(asset("QBox-2.0.6-tv-armeabi-v7a.apk", "https://example.com/QBox-2.0.6-tv-armeabi-v7a.apk"));
        assets.put(asset("QBox-2.0.6-tv-arm64-v8a.apk", "https://example.com/QBox-2.0.6-tv-arm64-v8a.apk"));
        assets.put(asset("QBox-2.0.6-mobile-arm64-v8a.apk", "https://example.com/QBox-2.0.6-mobile-arm64-v8a.apk"));
        assets.put(asset("QBox-2.0.6-mobile-armeabi-v7a.apk", "https://example.com/QBox-2.0.6-mobile-armeabi-v7a.apk"));
        return assets;
    }

    private static JSONObject asset(String name, String url) throws Exception {
        JSONObject obj = new JSONObject();
        obj.put("name", name);
        obj.put("browser_download_url", url);
        return obj;
    }

    @Test
    public void matchesExactTvAndMobileAbis() throws Exception {
        JSONArray assets = dualReleaseAssets();
        assertEquals("https://example.com/QBox-2.0.6-tv-armeabi-v7a.apk", Updater.selectAssetUrl(assets, "v2.0.6", "tv", "armeabi-v7a"));
        assertEquals("https://example.com/QBox-2.0.6-tv-arm64-v8a.apk", Updater.selectAssetUrl(assets, "v2.0.6", "tv", "arm64-v8a"));
        assertEquals("https://example.com/QBox-2.0.6-mobile-arm64-v8a.apk", Updater.selectAssetUrl(assets, "v2.0.6", "mobile", "arm64-v8a"));
        assertEquals("https://example.com/QBox-2.0.6-mobile-armeabi-v7a.apk", Updater.selectAssetUrl(assets, "v2.0.6", "mobile", "armeabi-v7a"));
    }

    @Test
    public void mobileDoesNotFallbackToTvAsset() throws Exception {
        JSONArray tvOnly = new JSONArray();
        tvOnly.put(asset("QBox-2.0.6-tv-arm64-v8a.apk", "https://example.com/QBox-2.0.6-tv-arm64-v8a.apk"));
        tvOnly.put(asset("QBox-2.0.6-arm64-v8a.apk", "https://example.com/QBox-2.0.6-arm64-v8a.apk"));
        assertNull(Updater.selectAssetUrl(tvOnly, "v2.0.6", "mobile", "arm64-v8a"));
    }

    @Test
    public void tvSupportsLegacySingleFlavorFilenameFallback() throws Exception {
        JSONArray legacy = new JSONArray();
        legacy.put(asset("QBox-2.0.5-armeabi-v7a.apk", "https://example.com/QBox-2.0.5-armeabi-v7a.apk"));
        legacy.put(asset("QBox-2.0.5-arm64-v8a.apk", "https://example.com/QBox-2.0.5-arm64-v8a.apk"));
        assertEquals("https://example.com/QBox-2.0.5-armeabi-v7a.apk", Updater.selectAssetUrl(legacy, "v2.0.5", "tv", "armeabi-v7a"));
        assertEquals("https://example.com/QBox-2.0.5-arm64-v8a.apk", Updater.selectAssetUrl(legacy, "v2.0.5", "tv", "arm64-v8a"));
    }

    @Test
    public void tvDoesNotFallbackToMobileAsset() throws Exception {
        JSONArray mobileOnly = new JSONArray();
        mobileOnly.put(asset("QBox-2.0.6-mobile-arm64-v8a.apk", "https://example.com/QBox-2.0.6-mobile-arm64-v8a.apk"));
        assertNull(Updater.selectAssetUrl(mobileOnly, "v2.0.6", "tv", "arm64-v8a"));
    }
}
