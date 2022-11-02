<template>
  <div class="login">
<!--    <img src="@/assets/bg.png" style="width: 100%;height: 100%;">-->
    <div class="contant">
      <div>
        <span style="font-size: 40px;color: #FFFFFF;font-family: SourceHanSansCN-Medium;">仓库账单结算系统</span>
        <p style=" color: #FFFFFF;">仓库每月的账单由系统完成制作，包括账单数据系统的直接提取计算和一键式账单报表的完成，实现内部及外部账单的自动化结算。</p>
        <div style="width: 90px;height: 12px;background: #ED6D00;"></div>
      </div>
<!--      登陆框-->
      <div class="loginContant">
        <div>

        </div>
      </div>
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
  toRefs
} from 'vue';


</script>

<style>
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/bg.png");
  display: flex;
  justify-content: center;
  align-items: center;
}
.contant {
  width: 80%;
  height: 340px;
  display: flex;
  flex-direction: row;
}
.contant > :nth-child(1) {
  width: 50%;
  padding: 80px 80px 0 0;
}
.contant > :nth-child(2) {
  flex: 1;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginContant > div {
  width: 70%;
  height: 80%;
  border: 1px solid red;
}
</style>
