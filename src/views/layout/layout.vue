<template>
  <div>
    <a-layout id="layouts" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo">
          <a href="javascript:;" @click="index">
            <a-icon type="link" class="logo-img" />
            <h1 class="logo-tips">DEENFAN</h1>
          </a>
        </div>
        <a-menu
          theme="dark"
          mode="inline"
          :selectedKeys="defaultSelectedKeys"
          :defaultOpenKeys="['sub1','sub2','sub3','sub4','sub5']"
          @select="menuSelect"
        >
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="home" />
              <span>首页</span>
            </span>
            <a-menu-item key="/index/overview">系统概览</a-menu-item>
            <a-menu-item key="/index/account">账户设置</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="shopping-cart" />
              <span>商品</span>
            </span>
            <a-menu-item key="/item/list">商品列表</a-menu-item>
            <a-menu-item key="/item/add">添加商品</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title">
              <a-icon type="audit" />
              <span>订单</span>
            </span>
            <a-menu-item key="/order/list">订单列表</a-menu-item>
            <a-menu-item key="/order/return">退货列表</a-menu-item>
            <a-menu-item key="/order/refund">退款列表</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="/user">
            <a-icon type="user" />
            <span>用户</span>
          </a-menu-item>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="tool" />
              <span>内容</span>
            </span>
              <a-menu-item key="/content/main">首页界面</a-menu-item>
              <a-menu-item key="/content/story">品牌故事</a-menu-item>
              <a-menu-item key="/content/news">品牌动态</a-menu-item>
              <a-menu-item key="/content/service">定制服务</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub5">
            <span slot="title">
              <a-icon type="diff" />
              <span>新闻</span>
            </span>
            <a-menu-item key="/news/list">新闻列表</a-menu-item>
            <a-menu-item key="/news/add">添加新闻</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <a-popconfirm placement="bottomRight" @confirm="logout">
            <template slot="title">即将退出当前账户，是否继续？</template>
            <a-button type="primary">退出登录</a-button>
          </a-popconfirm>
        </a-layout-header>
        <a-layout-content>
          <a-breadcrumb style="margin: 16px" :routes="routes">
            <template slot="itemRender" slot-scope="{route, params, routes}">
              <span v-if="routes.indexOf(route) === routes.length - 1">{{route.name}}</span>
              <router-link v-else :to="route.path">{{route.name}}</router-link>
            </template>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: 'calc(100vh - 117px)' }">
            <router-view />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      routes: [],
      defaultSelectedKeys: [this.$route.path]
    };
  },
  created() {
    this.routes = this.$route.matched;
  },
  methods: {
    menuSelect(item) {
      this.$router.push({ path: item.key });
    },
    logout() {
      sessionStorage.removeItem("token");
      this.$router.push({ path: "/login" });
    },
    index() {
      this.$router.push({ path: "/index/overview" });
    }
  },
  watch: {
    $route(to, from) {
      sessionStorage.setItem("currentPath", to.path);
      this.routes = this.$route.matched;
      this.defaultSelectedKeys = [this.$route.path];
    }
  }
};
</script>
<style>
#layouts .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#layouts .trigger:hover {
  color: #1890ff;
}

#layouts .logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  transition: all 0.3s;
}
#layouts .logo-img {
  display: inline-block;
  height: 32px;
  vertical-align: middle;
  font-size: 32px;
}
#layouts .logo-tips {
  display: inline-block;
  margin: 0 0 0 12px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
}
.header {
  background: #fff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}
#layouts {
  min-width: 1250px
}
</style>