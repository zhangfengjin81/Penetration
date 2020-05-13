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
              <li v-for="(it,i) in nameArr" :key="i">
                <div class="liNum">{{i+1}}</div>
                <div class="licontent">
                  <div class="liConTop">
                    <div
                      class="liIndex"
                    >人，这辈子想活得好，就一定得心态好。有些事，不斤斤计较，有些人，不必放在心上，心量大了，能承受的就多了，生活就不那么苦了。心态好，一切都好，心态差，万事皆难，人生下半场，拼的就是一种心态</div>
                    <div class="liUnit">
                      <ul>
                        <li>a.)我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</li>
                        <li>b.)我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</li>
                        <li>c.)我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</li>
                        <li>c.)我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</li>
                        <li>c.)我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</li>
                        <li style="line-height:25px;padding:0 10px;">
                          <label>
                            <input type="checkbox">
                            <span>我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</span>
                          </label>
                        </li>
                        <li style="line-height:25px;padding:0 10px;">
                          <label>
                            <input type="checkbox">
                            <span>我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</span>
                          </label>
                        </li>
                        <li style="line-height:25px;padding:0 10px;">
                          <label>
                            <input type="checkbox">
                            <span>我一直相信一句话：当你感到生活困难时，你就是在走上坡路，你就是在成长。</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div class="liResult">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                    <div class="liFile">liFile</div>
                  </div>
                  <div class="liConBottom">
                    <span style="float:left;display:block">备注:</span>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                  </div>
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      input: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      // 遍历显示大小写字母
      for (var i = 0; i < 26; i++) {
        console.log(String.fromCharCode(65 + i)); //输出A-Z 26个大写字母
      }
      for (var i = 0; i < 26; i++) {
        console.log(String.fromCharCode(97 + i)); //输出a-z 26个小写字母
      }
    },
  },
};
</script>

<style>
.detail {
  font-size: 14px;
  letter-spacing: 0px;
  text-align: justify;
  user-select: none;
}
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
  line-height: 30px;
  position: relative;
  float: left;
  padding: 5px;
  box-sizing: border-box;
}
.liConBottom .el-input {
  width: 90%;
}
.liConBottom .el-input__inner {
  width: 100%;
  height: 30px;
  float: left;
  border: none;
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
  line-height: 20px;
}
.liIndex {
  width: 26%;
  height: 100%;
  position: relative;
  float: left;
  padding: 5px;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  overflow: auto;
}
.liUnit {
  width: 53%;
  height: 100%;
  position: relative;
  padding: 5px;
  float: left;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  overflow: auto;
}
.liResult {
  width: 10.5%;
  height: 100%;
  position: relative;
  padding: 5px;
  float: left;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}
.liResult .el-input__inner {
  height: 40px;
  border-radius: 0;
}
.liResult .el-select .el-input.is-focus .el-input__inner {
  border-color: #c0c4cc;
}
.liResult .el-select .el-input__inner:focus {
  border-color: #c0c4cc;
}
/* .liResult  .el-input__suffix{
  top: 5px;
} */
.el-popper[x-placement^="bottom"] {
  margin-top: 5px !important;
  border-radius: 0px;
}
.liFile {
  width: 10.5%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  float: left;
  overflow: auto;
}
.list::-webkit-scrollbar,
.liIndex::-webkit-scrollbar,
.liUnit::-webkit-scrollbar,
.liFile::-webkit-scrollbar {
  width: 3px;
}
.list::-webkit-scrollbar-thumb,
.liIndex::-webkit-scrollbar-thumb,
.liUnit::-webkit-scrollbar-thumb,
.liFile::-webkit-scrollbar-thumb {
  border-radius: 10px;
   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
   background: rgba(0, 0, 0, 0.2);
}
.list::-webkit-scrollbar-track,
.liIndex::-webkit-scrollbar-track,
.liUnit::-webkit-scrollbar-thumb,
.liFile::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
   border-radius: 0;
   background: rgba(0, 0, 0, 0.1);
}
/* ,.liUnit::-webkit-scrollbar,.liFile::-webkit-scrollbar{
  width: 3px;
} */
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
