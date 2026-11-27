package com.fongmi.android.tv.utils;

import android.net.TrafficStats;
import android.view.View;
import android.widget.TextView;

import com.fongmi.android.tv.App;

import java.text.DecimalFormat;

public class Traffic {

    private static final DecimalFormat format = new DecimalFormat("#.0");
    private static final int UID = App.get().getApplicationInfo().uid;
    private static final String UNIT_KB = " KB/s";
    private static final String UNIT_MB = " MB/s";
    private static final long CACHE_MS = 400;

    private static long lastTotalRxBytes;
    private static long lastTimeStamp;
    private static String lastText = "0" + UNIT_KB;

    public static void setSpeed(TextView view) {
        if (TrafficStats.getUidRxBytes(UID) == TrafficStats.UNSUPPORTED) return;
        view.setVisibility(View.VISIBLE);
        view.setText(getSpeed());
    }

    private static synchronized String getSpeed() {
        long nowTimeStamp = System.currentTimeMillis();
        long nowTotalRxBytes = TrafficStats.getUidRxBytes(UID);
        if (nowTotalRxBytes == TrafficStats.UNSUPPORTED) return "-";
        // 第一次采样只建立基线：否则会拿「开机以来的总流量 / 当前时间戳」算出一个假速度。
        if (lastTimeStamp == 0) {
            lastTimeStamp = nowTimeStamp;
            lastTotalRxBytes = nowTotalRxBytes;
            return lastText = "0" + UNIT_KB;
        }
        long elapsed = nowTimeStamp - lastTimeStamp;
        // 短窗口内复用上次结果，防止 setTraffic(500ms) 与 buildStats(1000ms) 互相抢占重置基线。
        if (elapsed < CACHE_MS) return lastText;
        long bytesPerSec = Math.max(0, nowTotalRxBytes - lastTotalRxBytes) * 1000 / Math.max(elapsed, 1);
        long kbPerSec = bytesPerSec / 1024;
        lastTimeStamp = nowTimeStamp;
        lastTotalRxBytes = nowTotalRxBytes;
        return lastText = kbPerSec < 1000 ? kbPerSec + UNIT_KB : format.format(kbPerSec / 1024f) + UNIT_MB;
    }

    /** 供播放详情面板使用：返回瞬时下载速度文本。 */
    public static String getText() {
        if (TrafficStats.getUidRxBytes(UID) == TrafficStats.UNSUPPORTED) return "-";
        return getSpeed();
    }

    public static synchronized void reset() {
        long rx = TrafficStats.getUidRxBytes(UID);
        if (rx == TrafficStats.UNSUPPORTED) return;
        lastTotalRxBytes = rx;
        lastTimeStamp = System.currentTimeMillis();
        lastText = "0" + UNIT_KB;
    }
}
