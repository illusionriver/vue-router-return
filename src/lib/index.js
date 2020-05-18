const vueRouterReturn = {

  //路由数组
  routerPath: [],

  install(Vue, options) {

  },

  //查找当前页面 在路由数组中的 负下标，回退上一级页面时调用
  findRouterName(routerName) {
    let indexN = -1;
    if (this.routerPath.indexOf(routerName) !== -1) {
      indexN = this.routerPath.length - this.routerPath.indexOf(routerName) - 1;
    }
    return indexN;
  },

  //将当前页面 增加到路由数组中
  addRouter(routerName) {
    this.routerPath.push(routerName);
  },

  //将 查找页面名称 对应的 页面之后的页面 从路由数组中删除
  removeRouter(routerName) {
    this.routerPath.splice(this.routerPath.indexOf(routerName), this.routerPath.length - this.routerPath.indexOf(routerName));
  }

}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueRouterReturn)
}

// 导出模块
export default vueRouterReturn

if (typeof window !== 'undefined' && !window.vueRouterReturn) {
  window.vueRouterReturn = vueRouterReturn;
}
