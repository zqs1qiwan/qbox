- 默认界面语言设为**简体中文**（外贸盒子或英文系统环境同样默认中文），支持在 TV 与手机/平板端「设置 → 系统 → 语言」手动切换 `简体中文 / English`；修复 `ResUtil` 读取全局系统语言导致开关、图片尺寸、聚搜「全部」标签及扫码提示混出英文的问题。
- 新增 **手机 / 平板（Pad）触屏版产物**：Release 同步提供 TV 端（`tv-armeabi-v7a`、`tv-arm64-v8a`）与手机/平板端（`mobile-arm64-v8a`、`mobile-armeabi-v7a`）安装包；升级应用内更新器按终端类型与 ABI 精准匹配，避免跨端串包下载，并保留旧版 TV 升级兼容别名。
- 修复 TV 端弹窗尺寸与裁剪问题：对齐 `BaseAlertDialog`、`BaseBottomSheetDialog` 与 AutoSize 的 dp 尺度，修复 5 个播放设置面板（倍速/画面/音频/字幕/弹幕）`NestedScrollView` 高度溢出裁切及 `ConfigDialog` 提示文本碰撞，`SettingActivity` 新增「语言」行后「版本」行不再贴底裁剪，选集分组选中标签对比度改为高亮白字。
- 性能与稳定性优化：播放进度改为按切集/退出时机异步合并落盘（避免 1 秒心跳主线程写盘卡顿）、`Clock` 改为主线程随视图生命周期自动停止、`BackdropBlur` 修复抖动计算并复用像素缓冲与 Glide `BitmapPool`、首页/分类/聚搜主列表启用 `setItemViewCacheSize(8)`、`ScreenGuard` 改用开机单调时钟防开机 30 分钟内误退出。
- 手机/平板端稳健性加固：设置页切换语言/主题色保留已加载配置与本地服务不中断，完善文件权限回调拦截、DoH/尺寸越界保护、Pad 分屏最小列数兜底及更新弹窗防连点；移植 FongMi/TV `4cf3a25b`（页面重建保留 `PlaybackServiceConnection`）与 `d3a0b84b` 核心（倍速异常兜底与提示动画防闪烁）。
- 版本：`versionCode 106` / `versionName 2.0.6`。

升级方式：TV 与手机/平板用户均可在应用内点「更新」按对应端和架构覆盖安装，原有配置和播放记录保留。
