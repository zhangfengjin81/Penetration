<template>
    <!-- <div>树组件</div> -->
    <ul id="treeDemo" class="ztree"></ul>
</template>

<script>
export default {
  data() {
    return {
      nodeData: [
        // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
        {
          name: "管理要求",
          children: [
            {
              name: "安全建设管理",
              component: "users" 
            },
            {
              name: "安全管理人员",
              component: "products",
            },
            {
              name: "安全管理制度",
              component: "tree",
            },
            {
              name: "安全管理机构",
              component: "users",
            },
            {
              name: "安全运维管理",
              component: "ztree",
            }
          ],
        },
        {
          name: "技术要求",
          children: [
            {
              name: "安全物理环境",
              component: "users",
            },
            {
              name: "安全通信网络",
              component: "users",
            },
            {
              name: "安全区域边界",
              component: "users",
            },
            {
              name: "安全计算环境",
              component: "users",
            },
            {
              name: "安全管理中心",
              component: "users",
            }
          ],
        },
      ],
      setting: {
        //zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
        view: {
          showLine: true,
        },
        edit: {
          enable: true,
          showRemoveBtn: false,
          showRenameBtn: false
        },
        data: {
          keep: {
            parent: true,
            leaf: true
          },
          simpleData: {
            enable: true
          }
        },
        callback: {
          onClick: this.zTreeOnClick,
          onRename: this.zTreeOnRename
        }
      },
    };
  },
  mounted() {
    let nodeData = this.nodeData;
    $.fn.zTree.init($("#treeDemo"), this.setting, nodeData);
  },
  methods:{
      // 树节点点击事件
    zTreeOnClick: function(event, treeId, treeNode) {
      this.selectedNode = treeNode;
      this.$emit("treeClick", treeNode);
    }
  }
};
</script>

<style>
.ztree {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
/* 
#treeDemo li{
    line-height: 30px;
}
.ztree li span.button{
    margin: 5px 0;
}
.node_name{
    font-size: 14px;
} */
</style>
