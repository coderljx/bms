<template>
  <div class="public">
    <div class="public-search" style="height: 100px;flex-wrap: wrap">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">账单日期</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <el-input
          v-model="input1"
          class="w-50 m-2"
          placeholder="请输入字段名称"
          :suffix-icon="Calendar"
          style="margin-left: 10px;width: 200px"
      />

      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">仓库租金账单项</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">仓库</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">客户</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">费用类别</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <el-button class="public-search-button">查询</el-button>
      <el-button class="public-reset-button">重置</el-button>
    </div>
    <div class="public-body">
      <tableHeader>
        <template v-slot:title>
          <p class="tables-text">费用列表</p>
        </template>
        <div class="tables-function">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="12" height="12" viewBox="0 0 12 12"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough"><path d="M7,5L7,0L5,0L5,5L0,5L0,7L5,7L5,12L7,12L7,7L12,7L12,5L7,5Z" fill-rule="evenodd" fill="#000000" fill-opacity="0.8500000238418579"/></g></g></svg>
          </i>
          <span class="tables-text">新增</span>
        </div>
        <div class="tables-function">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="12" height="12" viewBox="0 0 12 12"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough"><path d="M1,11L1,1C1,0.447715,1.447715,0,2,0L10,0C10.55229,0,11,0.447715,11,1L11,11C11,11.5523,10.55229,12,10,12L2,12C1.447715,12,1,11.5523,1,11ZM10,11L10,1L2,1L2,11L10,11ZM5.15147,2.84853Q4.8,2.49706,4.8,2L4,2Q4,2.82843,4.585789999999999,3.41421Q5.17157,4,6,4Q6.82843,4,7.41421,3.41421Q8,2.82843,8,2L7.2,2Q7.2,2.49706,6.84853,2.84853Q6.49706,3.2,6,3.2Q5.50294,3.2,5.15147,2.84853ZM6.51756,10.2178L5.47541,10.2178L5.47541,9.01873L4.20141,9.01873L4.20141,8.49415L5.47541,8.49415L5.47541,7.96955L4.20141,7.96955L4.20141,7.44496L5.22951,7.44496L4,5L5.09368,5L5.56674,6.16393C5.70492,6.52459,5.84075,6.88525,6,7.25059L6.0281,7.25059C6.1733,6.87822,6.31616,6.51756,6.45902,6.16393L6.93443,5L8,5L6.7541,7.44496L7.7986,7.44496L7.7986,7.96955L6.51756,7.96955L6.51756,8.49415L7.7986,8.49415L7.7986,9.01873L6.51756,9.01873L6.51756,10.2178Z" fill-rule="evenodd" fill="#4E4A4A" fill-opacity="1"/></g></g></svg>
          </i>
          <span class="tables-text">生成费用</span>
        </div>
        <div class="tables-function">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="12" height="12" viewBox="0 0 12 12"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough"><path d="M2.30768,0.923077C2.30768,0.413276,2.72095,0,3.23076,0L8.76922,0C9.27902,0,9.69229,0.413276,9.69229,0.923077L9.69229,5.0769L10.6154,5.0769Q11.1889,5.0769,11.5945,5.48245Q12,5.88799,12,6.46152L12,10.1538Q12,10.7274,11.5945,11.1329Q11.1889,11.5384,10.6154,11.5384L1.38462,11.5384Q0.811089,11.5384,0.405544,11.1329Q0,10.7274,0,10.1538L0,6.46152Q0,5.88799,0.405544,5.48245Q0.811089,5.0769,1.38462,5.0769L2.30768,5.0769L2.30768,0.923077ZM3.23076,5.99998L3.23077,5.99998L3.23077,5.0769L3.23076,5.0769L3.23076,0.923077L8.76922,0.923077L8.76921,7.38462L3.23076,7.38462L3.23076,5.99998ZM2.30768,5.99998L1.38462,5.99998Q1.19344,5.99998,1.05826,6.13516Q0.923077,6.27034,0.923077,6.46152L0.923077,10.1538Q0.923077,10.345,1.05826,10.4802Q1.19344,10.6154,1.38462,10.6154L10.6154,10.6154Q10.8066,10.6154,10.9417,10.4802Q11.0769,10.345,11.0769,10.1538L11.0769,6.46152Q11.0769,6.27034,10.9417,6.13516Q10.8066,5.99998,10.6154,5.99998L9.69229,5.99998L9.69229,7.38462C9.69229,7.89442,9.27902,8.30769,8.76922,8.30769L3.23076,8.30769C2.72095,8.30769,2.30768,7.89442,2.30768,7.38462L2.30768,5.99998ZM7.84618,3.23069L4.15387,3.23069L4.15387,2.30762L7.84618,2.30762L7.84618,3.23069ZM7.84618,5.99998L4.15387,5.99998L4.15387,5.0769L7.84618,5.0769L7.84618,5.99998Z" fill-rule="evenodd" fill="#4E4A4A" fill-opacity="1"/></g></g></svg>
          </i>
          <span class="tables-text">生成账单</span>
        </div>
      </tableHeader>
      <div class="public-body-content">
        <el-table :data="tableData" style="width: 100%" height="auto" border="true"
        >
          <el-table-column fixed type="selection" width="55" />
          <el-table-column prop="date" label="仓库租金账单项" width="100" />
          <el-table-column prop="name" label="费用类别" width="150" />
          <el-table-column prop="name" label="创建日期" width="100" />
          <el-table-column prop="name" label="账单日期" width="100" />
          <el-table-column prop="name" label="租仓天数" width="100" />
          <el-table-column prop="name" label="仓库" width="100" />
          <el-table-column prop="name" label="客户" width="100" />
          <el-table-column prop="name" label="收费项名称" width="100" />
          <el-table-column prop="name" label="单位价格" width="100" />
          <el-table-column prop="name" label="单位" width="100" />
          <el-table-column prop="name" label="租仓数量" width="100" />
          <el-table-column prop="name" label="不含税总费用" width="100" />
          <el-table-column prop="name" label="含税总费用"   />
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

</style>
