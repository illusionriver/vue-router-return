# vue-router-return

> A Vue component to router return page

## Build Setup

``` bash
# install dependencies
npm install vue-router-return

# uninstall dependencies
npm uninstall vue-router-return

```

## 参数配置 Parameter configuration

**pageReturnName**：页面名称<br>
**pageReturnName**：page name

## 实例 The instance

首先在项目的入口文件（main.js）中引入<br>
First, import plugin with main.js.
``` 
import vueRouterReturn from 'vue-router-return'
Vue.use(vueRouterReturn) 
```

1、在激活当前页面时，当前前页面增加到路由数组中<br>
1, When actived page, put the current page into router array.
``` 
vueRouterReturn.addRouter('inquiry');
```
2、当点击返回上一页面时，跳转页面之后的页面名称从路由数组中删除<br>
2, When click return button, the page after the jump page will be deleted from the route array.
```
      goback() {
        //this.pageReturnName 需要返回的页面Name，不存在则返回上一级页面
        if (this.pageReturnName) {
          //当前返回页面是否存在，存在则删除之后面的路由数组页面并跳转；如果存在，但不为-1，起始页面，不操作
          if (vueRouterReturn.findRouterName(this.pageReturnName) !== -1) {
            this.$router.go(-vueRouterReturn.findRouterName(this.pageReturnName));
            vueRouterReturn.removeRouter(this.pageReturnName);
          }
        } else {
          this.$router.go(-1);
        }

      }
```
