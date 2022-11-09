<template>

  <router-view/>
</template>

<style>
body {
  margin: 0px;
  padding: 0px;
}
@media screen and (max-width: 1200px){
  body {
    width: 1200px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px !important;
  background: #272424 !important;
  color:#fff !important;
}
.el-sub-menu__title > span,
.el-sub-menu__title > .el-icon {
  color: #939292 !important;
  font-size: 13px !important;
  font-family: SourceHanSansCN-Normal !important;
}
.el-menu > .el-menu-item-group {
  background: #272424;
}
ul > .el-menu-item {
  color: #939292 !important;
  font-size: 11px !important;
  font-family: SourceHanSansCN-Normal !important;
  height: 40px !important;
}
.el-tabs__item {
  background: #F4F4F4 !important;
}
/* 点击标签后，文字的颜色*/
.el-menu-item.is-active  {
  color: #FFFFFF !important;
}

/*公共样式 --- start */
.public {
  width: 100%;
  height: auto;
  background: #F4F4F4;
}
.public-search {
  width: 95%;
  height: 60px;
  margin: 0 auto;
  background: #FFFFFF;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  box-sizing: border-box;
}
.public-search > .items-center
{
  /* 正文normal */
  font-family: SourceHanSansCN-Normal !important;
  font-size: 13px;
  font-weight: 350;
  line-height: 16px;
  letter-spacing: 0px;
  color: #4E4A4A;
}
.public > .public-body {
  width: 95%;
  margin: 15px auto 0;
  background: #FFFFFF;
  border-radius: 6px;
}
.public > .public-body > .public-body-content {
  width: 95%;
  margin: 10px auto 0;
}
.public-search-button {
  margin-left: 20px !important;
  width: 72px !important;
  height: 28px !important;
  background: #ED6D00 !important;
}
.public-reset-button {
  margin-left: 20px !important;
  width: 72px !important;
  height: 28px !important;
  background: #4E4A4A !important;
}
/*表头的功能按钮样式*/
.tables-function {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.tables-function > i {
  width: 12px;
}
/*表头的文本样式*/
.tables-text {
  font-family: SourceHanSansCN-Normal;
  font-size: 13px;
  font-weight: 350;
  line-height: 16px;
  letter-spacing: 0px;
  margin-left: 3px;
  /* 深灰色文本 */
  color: #4E4A4A;
}
.tables-function:hover {
  cursor: default;
}
/*公共样式 --- end */


</style>
