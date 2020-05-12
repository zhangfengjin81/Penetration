<template>
  <div class="detail">
    <div class="title">检查列表</div>
    <div class="content">
      <ul class="tableTitle">
        <li style="width:30%">测试指标</li>
        <li style="width:50%">测试单元</li>
        <li style="width:10%">结果</li>
        <li style="width:10%">附件</li>
      </ul>
      <div class="list">
        <el-collapse accordion v-model="activeName">
          <el-collapse-item :name="item" v-for="(item,index) in nameArr" :key="index">
            <template slot="title">
              <!-- <span class="checkbox" :class="{'el-icon-folder-add':activeName == item,'el-icon-folder-remove':activeName != item}">
              </span>-->
              <span
                class="iconfont"
                :class="{'icon-zhankai':activeName == item,'icon-shouqi':activeName != item}"
              ></span>
              工程实施
            </template>
            <ul class="tableul">
              <li>
                <div class="liNum">1</div>
                <div class="licontent">
                  <div class="liConTop">
                    <div class="liIndex">liIndex</div>
                    <div class="liUnit">liUnit</div>
                    <div class="liResult">liResult</div>
                    <div class="liFile">liFile</div>
                  </div>
                  <div class="liConBottom">备注</div>
                </div>
              </li>
              <li>
                <div class="liNum">2</div>
                <div class="licontent">
                  <div class="liConTop">
                    <div class="liIndex">liIndex</div>
                    <div class="liUnit">liUnit</div>
                    <div class="liResult">liResult</div>
                    <div class="liFile">liFile</div>
                  </div>
                  <div class="liConBottom">备注</div>
                </div>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "0",
      // nameArr:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']
      nameArr: ["1", "2", "3", "4"],
    };
  },
};
</script>

<style>
.liConTop {
  width: 100%;
  height: 80%;
  position: relative;
  float: left;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.liConBottom {
  width: 100%;
  height: 20%;
  position: relative;
  float: left;
}
.liNum {
  width: 5%;
  height: 100%;
  position: relative;
  float: left;
  text-align: right;
  font-weight: 700;
  padding: 5px;
  border-right: 1px solid#ccc;
  box-sizing: border-box;
}
.licontent {
  width: 95%;
  height: 100%;
  position: relative;
  float: left;
}
.liIndex {
  width: 25%;
  height: 100%;
  position: relative;
  float: left;
  padding: 5px;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}
.liUnit {
  width: 50%;
  height: 100%;
  position: relative;
  padding: 5px;
  float: left;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}
.liResult {
  width: 10%;
  height: 100%;
  position: relative;
  padding: 5px;
  float: left;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}
.liFile {
  width: 10%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  float: left;
}
.title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  font-weight: 700;
  border-bottom: 1px solid #ccc;
  position: relative;
  float: left;
}
.content {
  width: 98%;
  height: 780px;
  position: relative;
  float: left;
  border: 1px solid #ccc;
  margin: 10px 1%;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
.tableTitle {
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: relative;
  float: left;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: #eef2f5;
  padding: 0;
  margin: 0;
  font-weight: 700;
  color: #333;
}
.tableTitle > li {
  float: left;
  text-align: center;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}
.tableTitle > li:last-child {
  border: none;
}

.list {
  width: 100%;
  height: 737px;
  position: relative;
  float: left;
  overflow: auto;
}

.el-collapse-item__header {
  padding-left: 10px;
  box-sizing: border-box;
}
.list .iconfont {
  font-size: 16px;
  font-weight: 550;
}

.tableul {
  width: 100%;
  height: auto;
  position: relative;
  float: left;
  border-top: 1px solid#ccc;
  box-sizing: border-box;
}
.tableul > li {
  width: 100%;
  height: 200px;
  position: relative;
  float: left;
  border-bottom: 1px solid#ccc;
  box-sizing: border-box;
}
.tableul > li:last-child {
  border: none;
}
</style>
