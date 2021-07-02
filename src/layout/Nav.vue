<template>
  <div :class="{
        nav_close: isCollapse,
        }">
    <div @click="collapse" class="nav_toggle">
      <i class="iconfont icon-toggle"></i>
    </div>
    <el-menu
      class="menu"
      :default-active="nav_active"
      :router="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      background-color="#555"
      text-color="#fff"
      active-text-color="#409eff"
      style="border: 0;"
    >
      <template v-for="(v, k) in nav_list">
        <el-submenu v-if="v.children && v.children.length > 0 " :key="k" :index="v.path">
          <template slot="title">
            <i v-if="v.meta.icon" :class="['iconfont', v.meta.icon]"></i>
            <span slot="title">{{v.meta.title}}</span>
          </template>
          <el-menu-item
            v-for="(val, key) in v.children"
            :key="key"
            :index="val.path"
            :route="val.path"
          >{{val.meta.title}}</el-menu-item>
        </el-submenu>
        <template v-else>
          <el-menu-item v-if="v.path !== '**'" :key="k" :index="v.path" :route="v.path">
              <i v-if="v.meta.icon" :class="['iconfont', v.meta.icon]"></i>
              <span slot="title">{{v.meta.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <!-- {{navList}} -->
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {
    // 读取 路由
    // console.log(this.$router.options.routes);
  },
  computed: {
    nav_active() {
      // console.log(this.$store.getters['nav/get_navActive']);
      return this.$store.getters['nav/get_navActive'];
    },
    nav_list() {
      // console.log(this.$store.getters['nav/get_navList']);
      return this.$store.getters['nav/get_navList'];
    }
  },
  methods: {
    // 展开收起 导航菜单
    collapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped>
.nav {
  background-color: #555;
}
.nav .nav_toggle {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  border-bottom: 1px solid #666;
  color: #409eff;
}
.nav {
  width: 220px;
  min-width: 220px;
  transition: all 0.3s;
}
.nav.nav_close {
  width: 65px;
  min-width: 65px;
}
.menu .iconfont {
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}
</style>
