<template>

  <router-view/>
</template>

<style>
body {
  margin: 0px;
  padding: 0px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  background: #272424;
  color:#fff;
}
.el-sub-menu__title > span,
.el-sub-menu__title > .el-icon {
  color: #939292;
  font-size: 13px;
  font-family: SourceHanSansCN-Normal;
}
.el-menu > .el-menu-item-group {
  background: #272424;
}
ul > .el-menu-item {
  color: #939292;
  font-size: 11px;
  font-family: SourceHanSansCN-Normal;
}
.el-tabs__item {
  background: #F4F4F4;
}
.el-menu-item.is-active  {
  color: #FFFFFF;
}
</style>
