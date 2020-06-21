<template>
  <div class="page home">
    <el-row class="title">订餐管理系统</el-row>
    <div class="page-main home-content">
      <div class="home-left">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item :index="item.path" v-for="(item,index) in meauArr" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="home-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  data() {
    return {
      meauArr: [
        { title: '用户管理', icon: 'el-icon-s-custom', path: 'customer' },
        {
          title: '地址管理',
          icon: 'el-icon-location-outline',
          path: 'address'
        },
        { title: '商家管理', icon: 'el-icon-s-shop', path: 'store' },
        { title: '商品管理', icon: 'el-icon-shopping-cart-1', path: 'shop' },
        { title: '订单管理', icon: 'el-icon-document-copy', path: 'order' }
      ]
    };
  }
};
</script>
<style lang="scss">
.home .title {
  font-size: 20px;
  line-height: 40px;
  background: teal;
  color: #fff;
}
.home-content {
  display: flex;
  .home-left {
    width: 200px;
    background: #ededed;
  }
  .home-right {
    // margin-left: 200px;
    height: 100%;
    padding: 20px;
    width: calc(100% - 200px);
    overflow-x: hidden;
    overflow-y: auto;
    background: skyblue;
  }
}
// .el-menu-item.is-active {
//   color: #333;
// }
</style>
