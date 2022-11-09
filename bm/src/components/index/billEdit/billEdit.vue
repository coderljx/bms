<template>
  <div class="public">
    <div class="public-search">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">库名称</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">字段名称</span>
      <el-input
          v-model="input1"
          class="w-50 m-2"
          placeholder="请输入字段名称"
          :suffix-icon="Calendar"
          style="margin-left: 10px;width: 200px"
      />

      <el-button class="public-search-button">查询</el-button>
      <el-button class="public-reset-button">重置</el-button>
    </div>
    <div class="public-body">
      <tableHeader>
        <template v-slot:title>
          <p class="tables-text">账单列表</p>
        </template>
      </tableHeader>
      <div class="public-body-content">
        <el-table :data="tableData" style="width: 100%" height="auto" border="true"
        >
          <el-table-column fixed type="selection" width="55" />
          <el-table-column prop="date" label="账单编号" width="100" />
          <el-table-column prop="name" label="操作日期" width="150" />
          <el-table-column prop="name" label="费用类别" width="100" />
          <el-table-column prop="name" label="收费项" width="100" />
          <el-table-column prop="name" label="仓库" width="100" />
          <el-table-column prop="name" label="客户名称" width="130" />
          <el-table-column prop="name" label="原金额" width="100" />
          <el-table-column prop="name" label="新金额" width="100" />
          <el-table-column prop="name" label="操作人" width="100" />
          <el-table-column prop="name" label="操作备注" width="100" />
        </el-table>
        <el-pagination
            v-model:currentPage="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[10, 20, 50]"
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

</style>
