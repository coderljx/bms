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

export default class charges {
  constructor() {
  };
  private input1 = ref("");
  private value = ref("");
  private options = [
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
    }
  ];

}
