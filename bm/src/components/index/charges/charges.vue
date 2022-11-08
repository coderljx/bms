<!--suppress ALL -->
<template>
  <div class="charges">
    <div class="charges-search">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">收费项目名称</span>
        <el-input
            v-model="input1"
            class="w-50 m-2"
            placeholder="请输入收费项名称"
            :suffix-icon="Calendar"
            style="margin-left: 10px;width: 200px"
        />
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-left: 20px">收租类型</span>
      <el-select v-model="value" clearable placeholder="--请选择--" style="margin-left: 10px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <el-button style="margin-left: 20px;width: 72px;height: 28px;background: #ED6D00;">查询</el-button>
      <el-button style="margin-left: 20px;width: 72px;height: 28px;background: #4E4A4A;">重置</el-button>
    </div>

<!--    body-->
    <div class="charges-tables" >
      <tableHeader>
        <template v-slot:title>
          <p class="tables-text">收费项目列表</p>
        </template>
        <div class="tables-function">
          <i class="el-icon" @click="add = true">
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
        <div class="tables-function">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="12" height="12" viewBox="0 0 12 12"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough"><path d="M10,7.993605777301127e-15Q10.0178,7.993605777301127e-15,10.0357,0.0001274230000079936Q9.71507,0.202084000000008,9.42009,0.439929000000008Q9.1251,0.677774000000008,8.85975,0.948285000000008Q8.5944,1.218800000000008,8.36229,1.518310000000008Q8.13017,1.817820000000008,7.93442,2.142270000000008Q7.73868,2.466730000000008,7.58196,2.811730000000008Q7.42524,3.156730000000008,7.30968,3.517600000000008Q7.19411,3.878480000000008,7.12126,4.250340000000008Q7.04841,4.622200000000008,7.01926,5.000000000000008L9,5.000000000000008L6,8.000000000000007L3,5.000000000000008L5,5.000000000000008Q5,4.877260000000008,5.00602,4.754660000000008Q5.01205,4.632070000000008,5.02408,4.509910000000008Q5.03611,4.387760000000008,5.05412,4.266350000000008Q5.07213,4.1449300000000076,5.09607,4.024550000000008Q5.12002,3.904160000000008,5.14984,3.785100000000008Q5.17967,3.666030000000008,5.2153,3.548580000000008Q5.25093,3.431120000000008,5.29228,3.315550000000008Q5.33363,3.199980000000008,5.3806,3.086580000000008Q5.42757,2.973180000000008,5.48005,2.862220000000008Q5.53253,2.751270000000008,5.59039,2.643020000000008Q5.64825,2.534770000000008,5.71136,2.429490000000008Q5.77446,2.324210000000008,5.84265,2.222150000000008Q5.91084,2.120090000000008,5.98396,2.021500000000008Q6.05708,1.922910000000008,6.13495,1.828030000000008Q6.21281,1.733150000000008,6.29524,1.642200000000008Q6.37767,1.551260000000008,6.46447,1.464470000000008Q6.55126,1.377670000000008,6.6422,1.295240000000008Q6.73315,1.212820000000008,6.82803,1.134950000000008Q6.92291,1.057080000000008,7.0215,0.983962000000008Q7.12009,0.910844000000008,7.22215,0.842652000000008Q7.3242,0.774459000000008,7.42949,0.711357000000008Q7.53477,0.648254000000008,7.64302,0.590394000000008Q7.75127,0.532533000000008,7.86222,0.480053000000008Q7.97318,0.427574000000008,8.08658,0.380602000000008Q8.19998,0.333631000000008,8.31555,0.292280000000008Q8.43112,0.250929000000008,8.54858,0.21529800000000798Q8.66603,0.179668000000008,8.7851,0.149844000000008Q8.90416,0.120020000000008,9.02455,0.09607360000000799Q9.14493,0.072127600000008,9.26635,0.054117400000008Q9.38776,0.036107300000007995,9.50991,0.024076400000007995Q9.63207,0.012045400000007993,9.75466,0.006022720000007993Q9.87726,7.993605777301127e-15,10,7.993605777301127e-15ZM2,10.000000000000007L2,6.000000000000008L0,6.000000000000008L0,12.000000000000007L12,12.000000000000007L12,6.000000000000008L10,6.000000000000008L10,10.000000000000007L2,10.000000000000007Z" fill-rule="evenodd" fill="#4E4A4A" fill-opacity="1"/></g></g></svg>
          </i>
          <span class="tables-text">导入</span>
        </div>
        <div class="tables-function">
          <i class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="12" height="12" viewBox="0 0 12 12"><g style="mix-blend-mode:passthrough"><g style="mix-blend-mode:passthrough"><path d="M3.51758,7.447055131196976Q3.51758,7.464905131196976,3.51771,7.482755131196976Q3.71966,7.162125131196976,3.95751,6.867145131196976Q4.19535,6.5721551311969755,4.46586,6.306805131196976Q4.73637,6.041455131196976,5.03588,5.8093451311969755Q5.3354,5.577225131196975,5.65985,5.381475131196976Q5.9843,5.185735131196975,6.32931,5.029015131196975Q6.67431,4.872295131196975,7.03518,4.756735131196976Q7.39606,4.641165131196976,7.76791,4.568315131196976Q8.13977,4.495465131196975,8.51758,4.466315131196976L8.51758,6.447055131196976L11.5176,3.4470551311969757L8.51758,0.4470551311969757L8.51758,2.4470551311969757Q8.39483,2.4470551311969757,8.27224,2.4530751311969756Q8.14964,2.4591051311969756,8.02749,2.471135131196976Q7.90534,2.4831651311969756,7.78393,2.501175131196976Q7.66251,2.5191851311969757,7.54213,2.543125131196976Q7.42174,2.5670751311969755,7.30268,2.596895131196976Q7.18361,2.626725131196976,7.06615,2.6623551311969758Q6.9487,2.6979851311969756,6.83313,2.7393351311969756Q6.71756,2.7806851311969756,6.60416,2.8276551311969755Q6.49076,2.8746251311969755,6.3798,2.9271051311969756Q6.26884,2.9795851311969757,6.16059,3.037445131196976Q6.05234,3.0953051311969757,5.94706,3.1584151311969757Q5.84178,3.2215151311969756,5.73973,3.2897051311969756Q5.63767,3.3578951311969756,5.53908,3.431015131196976Q5.44049,3.5041351311969757,5.34561,3.5820051311969756Q5.25073,3.659865131196976,5.15978,3.742295131196976Q5.06884,3.824725131196976,4.98204,3.9115251311969756Q4.89525,3.998315131196976,4.81282,4.089255131196976Q4.73039,4.180205131196976,4.65253,4.275085131196976Q4.57466,4.369965131196976,4.50154,4.468555131196975Q4.42842,4.567145131196976,4.36023,4.669205131196976Q4.29204,4.771255131196976,4.22893,4.876545131196976Q4.16583,4.981825131196976,4.10797,5.090075131196976Q4.05011,5.198325131196976,3.99763,5.3092751311969755Q3.94515,5.420235131196976,3.89818,5.533635131196975Q3.85121,5.647035131196976,3.80986,5.762605131196976Q3.76851,5.878175131196976,3.73288,5.995635131196976Q3.69725,6.113085131196976,3.66742,6.232155131196976Q3.6376,6.351215131196976,3.61365,6.471605131196975Q3.58971,6.591985131196975,3.5717,6.713405131196976Q3.55369,6.834815131196976,3.54165,6.956965131196975Q3.52962,7.079125131196975,3.5236,7.201715131196976Q3.51758,7.324315131196975,3.51758,7.447055131196976ZM2,10.000005131196975L2,6.000005131196976L0,6.000005131196976L0,11.999955131196975L12,11.999955131196975L12,6.000005131196976L10,6.000005131196976L10,10.000005131196975L2,10.000005131196975Z" fill-rule="evenodd" fill="#4E4A4A" fill-opacity="1"/></g></g></svg>
          </i>
          <span class="tables-text">导出</span>
        </div>
      </tableHeader>
      <div class="charges-tables-body">
        <el-table :data="tableData" style="width: 100%" height="auto" border="true"
                   >
          <el-table-column type="selection" width="55" />
          <el-table-column fixed prop="date" label="收费项代码" width="200" />
          <el-table-column prop="name" label="收费项类型" width="200" />
          <el-table-column prop="state" label="收费项名称" width="120" />
          <el-table-column prop="city" label="收费项单位" width="220" />
          <el-table-column prop="address" label="收费项目说明" />
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
      </div>
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
<!--  新增收费项目弹框-->
  <div class="addCharges">
    <el-dialog v-model="add" title="新增收费项" width="30%" >

      <template #footer>
      <span class="dialog-footer">
      <el-button style="width: 72px;height: 28px;background: #ED6D00;">提交</el-button>
      <el-button style="width: 72px;height: 28px;background: #4E4A4A;">取消</el-button>
      </span>
      </template>
    </el-dialog>
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

let input1 = ref("");
let value = ref("");
let add = ref(false); // 新增窗口

const options = [
  {
    value: 'Option1',
    label: '仓库租金',
  },
  {
    value: 'Option2',
    label: '仓库操作费',
  },
  {
    value: 'Option3',
    label: '增值服务费',
  },
  {
    value: 'Option4',
    label: '管理费',
  }];


</script>

<style>
@import "charges.css";
</style>
