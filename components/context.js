function getCtx (selector) {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];
  const componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
      console.error('无法找到对应的组件，请按文档说明使用组件');
      return null;
  }
  return componentCtx;
}


function Toast(options){
  const { selector = '#toast' } = options;
  let ctx = getCtx(selector);
  ctx.show(options);
}





export const $Toast = Toast;