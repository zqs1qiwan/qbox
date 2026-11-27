package com.qbox;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import com.fongmi.android.tv.utils.ScreenGuard;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;
import org.robolectric.shadows.ShadowSystemClock;

import java.time.Duration;

/**
 * 校验 {@link ScreenGuard} 基于 {@code SystemClock.elapsedRealtime()} 的息屏计时与一次性消费语义。
 */
@RunWith(RobolectricTestRunner.class)
@Config(sdk = 34)
public class ScreenGuardTest {

    @Before
    public void setUp() {
        ScreenGuard.onScreenOn();
        ScreenGuard.consumeExit();
        ShadowSystemClock.advanceBy(Duration.ofSeconds(1));
    }

    @Test
    public void shortSleepDoesNotRequestExit() {
        ScreenGuard.onScreenOff();
        ShadowSystemClock.advanceBy(Duration.ofMinutes(5));
        assertFalse(ScreenGuard.onScreenOn());
        assertFalse(ScreenGuard.consumeExit());
    }

    @Test
    public void longSleepRequestsExitOnce() {
        ScreenGuard.onScreenOff();
        ShadowSystemClock.advanceBy(Duration.ofMillis(ScreenGuard.DEFAULT_SLEEP_EXIT_MS + 1000L));
        assertTrue(ScreenGuard.onScreenOn());
        assertTrue(ScreenGuard.consumeExit());
        assertFalse("consumeExit must clear exit flag", ScreenGuard.consumeExit());
    }

    @Test
    public void simulateSleepSetsExitFlagAndConsumesCleanly() {
        assertFalse(ScreenGuard.simulateSleep(1_000L));
        assertFalse(ScreenGuard.consumeExit());

        assertTrue(ScreenGuard.simulateSleep(ScreenGuard.DEFAULT_SLEEP_EXIT_MS));
        assertTrue(ScreenGuard.consumeExit());
        assertFalse(ScreenGuard.consumeExit());
    }
}
