<template>
  <div class="home_wrap">
    <div class="header">header</div>
    <div class="home_content">
      <div class="aside">
        <zTree v-on:treeClick="changeRouter"></zTree>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"; //引入jquery
import zTree from "@/components/tree/zTree";
export default {
  data() {
    return {};
  },
  components: { zTree },
  watch: {},
  created() {},
  methods: {
    changeRouter(params) {
      if (params.component) {
        console.log("/" + params.component);
        this.$router.push("/" + params.component);
      }
    },
  },
};
</script>

<style>
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
  /* padding-left: 80px; */
  box-sizing: border-box;
}
.home_content {
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
  padding-top: 80px;
  box-sizing: border-box;
  background-color: #fff;
}
.aside {
  width: 15%;
  height: 98%;
  margin: 0.5%;
  position: relative;
  float: left;
  /* background-color: #545c64; */
  background-color: #fff;
  z-index: 100;
  border: 1px solid #ccc;
}
.main {
  width: 83%;
  height: 98%;
  position: relative;
  float: left;
  margin: 0.5% 0;
  border: 1px solid #ccc;
  box-sizing: border-box;
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
