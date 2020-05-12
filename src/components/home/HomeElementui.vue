<template>
    <div class="home_wrap">
        <div class="header">header</div>
        <div class="home_content">
            <div class="aside">
                <div
                    class="changeswitch iconfont icon-jiaoyijilu"
                    @click="isCollapse = !isCollapse"
                ></div>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    :router="true"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item index="users">
                        <i class="el-icon-menu"></i>
                        <span>项目概览</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span slot="title">产品</span>
                        </template>
                        <el-menu-item index="products">产品开发</el-menu-item>
                        <el-submenu index="tree">
                            <span slot="title">设备管理</span>
                            <el-menu-item index="tree">设备列表</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">应用</span>
                        </template>
                        <el-menu-item index="3-1">对接信息</el-menu-item>
                        <el-menu-item index="3-2">订阅调试</el-menu-item>
                        <el-menu-item index="3-3">应用调试</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="main"><router-view></router-view></div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'//引入jquery
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  watch: {
    isCollapse: function(value) {
    //   var main = document.getElementsByClassName("main")[0];
      if (value) {
        $('.main').animate({'padding-left':'80px'});
        // main.style.paddingLeft = "80px";
      } else {
        $('.main').animate({'padding-left':'200px'});
        // main.style.paddingLeft = "200px";
      }
    },
  },
  created() {
    setTimeout(() => {
      var main = document.getElementsByClassName("main")[0];
      if (this.isCollapse) {
        main.style.paddingLeft = "80px";
      } else {
        main.style.paddingLeft = "200px";
      }
    }, 3000);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
/* 修改菜单栏样式 */
.el-menu--collapse {
  width: 80px;
}
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.home_wrap {
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
}
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  float: left;
  background-color: #eee;
  z-index: 100;
  padding-left: 80px;
  box-sizing: border-box;
}
.home_content {
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
  padding-top: 80px;
  box-sizing: border-box;
  background-color: #ccc;
}
.aside {
  width: auto;
  height: 100%;
  position: relative;
  float: left;
  background-color: #545c64;
  z-index: 100;
}
.main {
  min-width: 100%;
  height: 91%;
  position: absolute;
  float: left;
  background-color: #094;
  box-sizing: border-box;
  padding-left: 200px;
}

.changeswitch {
  width: 80px;
  height: 80px;
  position: absolute;
  top: -80px;
  float: left;
  background-color: #2d3643;
  z-index: 101;
  color: #fff;
  line-height: 80px;
  text-align: center;
  font-size: 30px;
}
</style>
