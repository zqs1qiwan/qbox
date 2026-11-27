package com.qbox;

import static org.junit.Assert.assertTrue;

import android.content.Context;
import android.content.res.Configuration;

import com.fongmi.android.tv.Product;
import com.fongmi.android.tv.bean.Style;
import com.fongmi.android.tv.setting.PlayerSetting;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.RuntimeEnvironment;
import org.robolectric.annotation.Config;

/**
 * 校验 Mobile / Pad 端 {@link Product#getColumn} 与 {@link Product#getSpec} 在竖屏、横屏及平板尺寸下的安全边界。
 */
@RunWith(RobolectricTestRunner.class)
@Config(sdk = 34)
public class MobileProductTest {

    private int originalSize;

    @Before
    public void setUp() {
        originalSize = PlayerSetting.getSize();
    }

    @After
    public void tearDown() {
        PlayerSetting.putSize(originalSize);
    }

    @Test
    public void columnsNeverDropBelowTwoOnPhoneOrPad() {
        Context base = RuntimeEnvironment.getApplication();
        for (int size = 0; size <= 4; size++) {
            PlayerSetting.putSize(size);
            for (int orientation : new int[]{Configuration.ORIENTATION_PORTRAIT, Configuration.ORIENTATION_LANDSCAPE}) {
                for (int swDp : new int[]{360, 720}) {
                    Configuration cfg = new Configuration(base.getResources().getConfiguration());
                    cfg.orientation = orientation;
                    cfg.smallestScreenWidthDp = swDp;
                    Context ctx = base.createConfigurationContext(cfg);
                    int col = Product.getColumn(ctx);
                    int landStyleCol = Product.getColumn(ctx, Style.list());
                    assertTrue("Expected >= 2 columns", col >= 2);
                    assertTrue("Expected >= 2 columns for land style", landStyleCol >= 2);
                    int[] spec = Product.getSpec(ctx, Style.rect());
                    assertTrue("Expected positive item width", spec[0] > 0);
                    assertTrue("Expected positive item height", spec[1] > 0);
                }
            }
        }
    }
}
