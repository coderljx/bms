<template>
  <div class="public">
    <div class="public-search">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">用户名称</span>
      <el-input
          v-model="input1"
          class="w-50 m-2"
          placeholder="请输入用户名称"
          :suffix-icon="Calendar"
          style="margin-left: 10px;width: 200px"
      />
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">所属公司</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">手机号码</span>
      <el-input
          v-model="input1"
          class="w-50 m-2"
          placeholder="请输入手机号码"
          :suffix-icon="Calendar"
          style="margin-left: 10px;width: 200px"
      />

      <el-button style="margin-left: 20px;width: 72px;height: 28px;background: #ED6D00;">查询</el-button>
      <el-button style="margin-left: 20px;width: 72px;height: 28px;background: #4E4A4A;">重置</el-button>
    </div>
    <div class="public-body">
      <tableHeader>
        <template v-slot:title>
          <p class="tables-text">用户列表</p>
        </template>
        <div class="tables-function">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="12" height="12" viewBox="0 0 12 12"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough"><path d="M7,5L7,0L5,0L5,5L0,5L0,7L5,7L5,12L7,12L7,7L12,7L12,5L7,5Z" fill-rule="evenodd" fill="#000000" fill-opacity="0.8500000238418579"/></g></g></svg>
          </i>
          <span class="tables-text">新增</span>
        </div>
        <div class="tables-function">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="12" height="12" viewBox="0 0 12 12"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough"><path d="M8.57145,0L3.42859,0L3.42859,1.71429L8.57145,1.71429L8.57145,0ZM12,3L12,2.14285L0,2.14285L0,3L12,3ZM1.71423,3.42857L10.2857,3.42857L8.57138,12L3.42852,12L1.71423,3.42857ZM6.42855,6L6.42855,9.42857L5.57141,9.42857L5.57141,6L6.42855,6Z" fill-rule="evenodd" fill="#4E4A4A" fill-opacity="1"/></g></g></svg>
          </i>
          <span class="tables-text">删除</span>
        </div>
      </tableHeader>
      <div class="public-body-content">
        <el-table :data="tableData" style="width: 100%" height="auto" border="true"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column fixed prop="date" label="用户名" width="300" />
          <el-table-column prop="name" label="手机号码" width="300" />
          <el-table-column prop="state" label="所属公司" />
          <el-table-column  >
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
              >
              <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            v-model:currentPage="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            prev-text="上一页"
            next-text="下一页"
            layout="->,prev,pager, next ,total, sizes, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
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
import tableHeader from "@/public/tables-hearder"


</script>

<style>
@import "userManager.css";
</style>
