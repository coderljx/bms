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

      <el-button style="margin-left: 20px;width: 72px;height: 28px;background: #ED6D00;">查询</el-button>
      <el-button style="margin-left: 20px;width: 72px;height: 28px;background: #4E4A4A;">重置</el-button>
    </div>
    <div class="public-body">
      <tableHeader>
        <template v-slot:title>
          <p class="tables-text">字段列表</p>
        </template>
      </tableHeader>
      <div class="public-body-content">
        <el-table :data="tableData" style="width: 100%" height="auto" border="true"
        >
          <el-table-column fixed type="selection" width="55" />
          <el-table-column prop="date" label="字段" width="100" />
          <el-table-column prop="name" label="描述" width="150" />
          <el-table-column prop="name" label="数据类型" width="100" />
          <el-table-column prop="name" label="字段名称" width="100" />
          <el-table-column >
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
              >
            </template>
          </el-table-column>
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
@import "field.css";
</style>
