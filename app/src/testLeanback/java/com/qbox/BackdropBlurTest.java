package com.qbox;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import android.graphics.Bitmap;

import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPoolAdapter;
import com.fongmi.android.tv.utils.BackdropBlur;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;

/**
 * 校验 {@link BackdropBlur} 的 32 位哈希符号位抖动与边界安全性：
 * 均匀灰度图经模糊+抖动后，正/负 ±1 LSB 偏移应大致均衡而非全偏向 -1。
 */
@RunWith(RobolectricTestRunner.class)
@Config(sdk = 34)
public class BackdropBlurTest {

    private static final class TestBlur extends BackdropBlur {
        Bitmap run(BitmapPool pool, Bitmap src) {
            return transform(pool, src, src.getWidth(), src.getHeight());
        }
    }

    @Test
    public void ditherProducesBalancedPositiveAndNegativeOffsets() {
        int w = 120;
        int h = 80;
        Bitmap src = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
        src.eraseColor(0xFF808080);

        Bitmap out = new TestBlur().run(new BitmapPoolAdapter(), src);
        assertNotNull(out);
        assertEquals(w, out.getWidth());
        assertEquals(h, out.getHeight());

        int[] px = new int[w * h];
        out.getPixels(px, 0, w, 0, 0, w, h);
        int plusOne = 0;
        int minusOne = 0;
        for (int c : px) {
            int r = (c >> 16) & 0xFF;
            int g = (c >> 8) & 0xFF;
            int b = c & 0xFF;
            assertEquals("channels should remain equal on gray input", r, g);
            assertEquals("channels should remain equal on gray input", g, b);
            assertTrue("pixel value out of +-1 dither range: " + r, r == 127 || r == 129);
            if (r == 129) plusOne++;
            else minusOne++;
        }

        int total = w * h;
        assertTrue("expected ~50% +1 pixels, got " + plusOne + "/" + total, plusOne > total / 3);
        assertTrue("expected ~50% -1 pixels, got " + minusOne + "/" + total, minusOne > total / 3);
    }
}
