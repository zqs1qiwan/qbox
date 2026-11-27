package com.qbox;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import com.fongmi.android.tv.playback.vod.EpisodeProgress;
import com.github.catvod.utils.Prefers;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;

/**
 * 校验 {@link EpisodeProgress} 延迟落盘契约：
 * 1s 播放心跳写入仅更新内存与脏标记，直到显式 {@link EpisodeProgress#flush()} 才序列化写入 SharedPreferences。
 */
@RunWith(RobolectricTestRunner.class)
@Config(sdk = 34)
public class EpisodeProgressDeferredFlushTest {

    private static final String KEY = "qbox_episode_progress";
    private static final String VOD = "vod_deferred_flush_test";
    private static final String EP = "https://example.com/ep1.m3u8";

    @Before
    public void setUp() {
        EpisodeProgress.clear();
        EpisodeProgress.flush();
    }

    @After
    public void tearDown() {
        EpisodeProgress.clear();
        EpisodeProgress.flush();
    }

    @Test
    public void deferredPutSkipsImmediatePersistUntilFlush() {
        String key = EpisodeProgress.episodeKey(EP, "第1集");
        EpisodeProgress.put(VOD, key, 45_000L, 120_000L, false);

        assertEquals(45_000L, EpisodeProgress.position(VOD, key));
        String beforeFlush = Prefers.getString(KEY);
        assertFalse("deferred put should not immediately serialize to Prefers",
                beforeFlush != null && beforeFlush.contains(VOD));

        EpisodeProgress.flush();
        String afterFlush = Prefers.getString(KEY);
        assertTrue("flush should persist buffered episode progress",
                afterFlush != null && afterFlush.contains(VOD) && afterFlush.contains("45000"));
    }

    @Test
    public void immediatePutPersistsSynchronously() {
        String key = EpisodeProgress.episodeKey(EP, "第2集");
        EpisodeProgress.put(VOD, key, 90_000L, 180_000L);

        String stored = Prefers.getString(KEY);
        assertTrue(stored != null && stored.contains(VOD) && stored.contains("90000"));
    }
}
