package com.fongmi.android.tv.utils;

import android.text.TextUtils;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;

import com.fongmi.android.tv.App;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class Clock implements View.OnAttachStateChangeListener {

    private DateTimeFormatter format;
    private Callback callback;
    private TextView view;
    private boolean running;

    private final Runnable tick = new Runnable() {
        @Override
        public void run() {
            if (!running) return;
            doJob();
            if (running) App.post(this, 1000);
        }
    };

    public static Clock create() {
        return new Clock();
    }

    public static Clock create(TextView view) {
        return new Clock().view(view).format("HH:mm:ss");
    }

    public Clock() {
    }

    public Clock view(TextView view) {
        if (this.view != null) this.view.removeOnAttachStateChangeListener(this);
        this.view = view;
        if (this.view != null) this.view.addOnAttachStateChangeListener(this);
        return this;
    }

    public Clock format(String format) {
        this.format = DateTimeFormatter.ofPattern(format, Locale.getDefault());
        return this;
    }

    public void setCallback(Callback callback) {
        this.callback = callback;
    }

    public void start() {
        stop();
        running = true;
        App.post(tick);
    }

    private void doJob() {
        try {
            long time = System.currentTimeMillis();
            if (callback != null) callback.onTimeChanged(time);
            if (view != null && format != null && (view.isShown() || TextUtils.isEmpty(view.getText()))) {
                String next = format.format(LocalDateTime.now());
                if (!TextUtils.equals(view.getText(), next)) view.setText(next);
            }
        } catch (Exception ignored) {
        }
    }

    public Clock stop() {
        running = false;
        App.removeCallbacks(tick);
        return this;
    }

    public void release() {
        stop();
        if (view != null) view.removeOnAttachStateChangeListener(this);
        view = null;
        callback = null;
    }

    @Override
    public void onViewAttachedToWindow(@NonNull View v) {
    }

    @Override
    public void onViewDetachedFromWindow(@NonNull View v) {
        // 纯展示型时钟（无播放进度回调）：随视图树销毁自动停表并释放引用，杜绝 Activity/Timer 线程泄漏。
        if (callback == null) release();
    }

    public interface Callback {

        void onTimeChanged(long time);
    }
}
