- 恢复 `v2.0.4` 的 Android 13+ 自适应图标配置：`mipmap-anydpi-v33/ic_launcher.xml`、`ic_launcher_round.xml` 与 `drawable-nodpi/ic_launcher_monochrome.png`。
- 目的：验证原生 Toast 在 Android 13+ 上读取应用图标时，`monochrome` 图层是否是 QBox 立方体 Q 正常显示的必要条件。
- Toast 仍使用 Android 原生 `Toast.makeText`，不接管系统提示，不添加自定义 Toast 浮层。
- 更正 `2.0.5` 的误判：移除 `mipmap-anydpi-v33` 与原生 Toast 回退 Android 机器人无关；`2.0.5` 的该项改动不是有效修复。
- 版本：`versionCode 106` / `versionName 2.0.6`。

升级方式：在应用内点「更新」即可覆盖安装，配置和播放记录保留。
