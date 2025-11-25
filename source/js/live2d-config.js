/**
 * Live2D 看板娘配置文件
 * 使用 koharu 模型
 */

// 初始化 Live2D Widget
function initLive2D() {
  // 配置选项
  const config = {
    // 模型配置
    model: {
      // 使用 koharu 模型（CDN方式）
      jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
      // 或者使用其他模型：
      // jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
      // jsonPath: "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
      scale: 1
    },

    // 显示配置
    display: {
      position: "left",       // 位置：left 或 right
      width: 150,             // 宽度
      height: 300,            // 高度
      hOffset: 30,            // 水平偏移（向右移动30px）
      vOffset: -20            // 垂直偏移（负数向上）
    },

    // 移动设备配置
    mobile: {
      show: false,            // 移动端是否显示
      scale: 0.5              // 移动端缩放比例
    },

    // 反应配置
    react: {
      opacityDefault: 1,      // 默认透明度（看板娘保持清晰可见）
      opacityOnHover: 1       // 鼠标悬停透明度
    },

    // 对话框配置
    dialog: {
      enable: true,           // 启用对话
      hitokoto: true          // 显示一言
    }
  };

  // 加载 Live2D Widget
  if (typeof L2Dwidget !== 'undefined') {
    L2Dwidget.init(config);
    console.log('🎀 Live2D 看板娘加载成功！');
  } else {
    console.error('❌ L2Dwidget 未加载');
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLive2D);
} else {
  initLive2D();
}
