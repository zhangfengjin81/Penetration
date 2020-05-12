<template>
  <div>
    <div class="title">***项目菜单</div>
    <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedNode:{},
      nodeData: [
        // // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
        {
          name: "父节点1 - 展开",
          open: false,
          children: [
            {
              name: "父节点11 - 折叠",
              children: [
                { name: "叶子节点111", component: "detail" },
                { name: "叶子节点112", component: "detail" },
                { name: "叶子节点113", component: "detail" },
                { name: "叶子节点114", component: "detail" },
              ],
            },
            {
              name: "父节点12 - 折叠",
              children: [
                { name: "叶子节点121", component: "detail" },
                { name: "叶子节点122", component: "detail" },
                { name: "叶子节点123", component: "detail" },
                { name: "叶子节点124", component: "detail" },
              ],
            },
            { name: "父节点13 - 没有子节点", isParent: true },
          ],
        },
        {
          name: "父节点2 - 折叠",
          children: [
            {
              name: "父节点21 - 展开",
              open: false,
              children: [
                { name: "叶子节点211", component: "detail" },
                { name: "叶子节点212", component: "detail" },
                { name: "叶子节点213", component: "detail" },
                { name: "叶子节点214", component: "detail" },
              ],
            },
            {
              name: "父节点22 - 折叠",
              children: [
                { name: "叶子节点221", component: "detail" },
                { name: "叶子节点222", component: "detail" },
                { name: "叶子节点223", component: "detail" },
                { name: "叶子节点224", component: "detail" },
              ],
            },
            {
              name: "父节点23 - 折叠",
              children: [
                { name: "叶子节点231", component: "detail" },
                { name: "叶子节点232", component: "detail" },
                { name: "叶子节点233", component: "detail" },
                { name: "叶子节点234", component: "detail" },
              ],
            },
          ],
        },
        { name: "父节点3 - 没有子节点", isParent: true },
      ],
      setting: {
        //zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
        view: {
          showLine: true,
        },
        edit: {
          enable: true,
          showRemoveBtn: false,
          showRenameBtn: false,
        },
        data: {
          keep: {
            parent: true,
            leaf: true,
          },
          simpleData: {
            enable: true,
          },
        },
        callback: {
          onClick: this.zTreeOnClick,
          onRename: this.zTreeOnRename,
        },
      },
    };
  },
  mounted() {
    let nodeData = this.nodeData;
    $.fn.zTree.init($("#treeDemo"), this.setting, nodeData);
  },
  methods: {
    // 树节点点击事件
    zTreeOnClick: function(event, treeId, treeNode) {
      // 如果节点的路由是一样的不用跳转路由
      if(this.selectedNode.component == treeNode.component){
        return
      }
      this.selectedNode = treeNode;
      this.$emit("treeClick", treeNode);
    },
  },
};
</script>

<style>
.ztree {
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
  float: left;
}
.title{
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
</style>
