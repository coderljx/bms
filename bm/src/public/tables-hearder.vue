<template>
  <div class="tables-header">
    <div class="tables-header-left">
      <span></span>
      <slot name="title"></slot>
    </div>
    <div class="tables-header-right">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  getCurrentInstance,
  defineComponent,
  ref,
  nextTick,
  onMounted,
  onUpdated,
  reactive,
  toRefs, watch
} from "vue"



</script>

<style scoped>
.tables-header {
  width: 100%;
  height: 40px;
  background: #FFFFFF;
  margin: 0 auto;
  box-sizing: border-box;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid #E5E5E5;
}
.tables-header > .tables-header-left {
  float: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.tables-header > .tables-header-left > p {
  /* 正文normal */
  font-family: SourceHanSansCN-Normal;
  font-size: 13px;
  font-weight: 350;
  line-height: 16px;
  letter-spacing: 0px;
  /* 浅灰色文本 */
  color: #8F8A8A;
}
.tables-header > .tables-header-left > span {
  left: 16px;
  top: 13px;
  width: 5px;
  height: 18px;
  border-radius: 2px;
  opacity: 1;
  background: #ED6D00;
  margin: 0 5px 0 10px;
}
.tables-header > .tables-header-right {
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.tables-header::after {
  content: '';
  clear: both;
}
</style>
