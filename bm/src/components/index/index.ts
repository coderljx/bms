import {AxiosInstance, AxiosPromise} from "axios";
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
import {Router} from "vue-router";

interface o {
  [key : string] : string[],
}

export class Home  {
  // @ts-ignore
  private  router : Router = getCurrentInstance().proxy.$router;
  public obj = ref({
    // 当前登陆用户的头像
    circleUrl: "https://img0.baidu.com/it/u=882622322,99837820&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    editableTabs: [{
      title: "收费项管理",
      name: "charges",
    }],
    currentTabName : "收费项管理"
  });
  private objs : o = {
    "1-1": ["收费项管理", "charges"],
    "1-2": ["用户管理", "userManager"],
    // "1-3": ["药品管理", "drug"],
    "1-4": ["仓库/客户管理","storeManager"],
    "1-5": ["字段设置","field"],

    "3": ["费用管理","feeManager"],
    "4-1": ["客户账单","customerBill"],
    "4-3": ["账单费用修改项记录","billEdit"],

  };
  constructor() {
  };
  public select = (index : string, path: string[], item: string) => {
    const TabeleName: string[] = this.objs[index];
    if ( (TabeleName[0] != null) && TabeleName[0].trim().length > 0)
    {
      this.AddTab(TabeleName[0], TabeleName[1], this.router);
    }
  };

  // 新增一个选择tab
  private AddTab = (TableName: string, routerName: string, router: Router) : void => {
    let objs = this.obj.value.editableTabs;
    let index: number = 0;
    for (let i = 0; i < objs.length; i++) {
      if (TableName === objs[i].name) {
        index ++;
      }
    }
    if (index === 0) {
      this.obj.value.editableTabs.push({
        title: TableName,
        name: TableName,
      });
      this.obj.value.currentTabName = TableName;
    }
    router.push(`/index/${routerName}`);
  };

  // 移除tab
  public RemoveTab = (Name: string) : void => {
    let objs = this.obj.value.editableTabs;
    let Index: number = -1;
    for (let i = 0; i < objs.length; i++) {
      if (objs[i].name === Name) {
        Index = i;
      }
    }
    objs.splice(Index, 1);
  }
  // 点击标签
  public  Showclick = (Pane: any, ev: string) : void =>
  {
    let CurrentCLick: string = Pane.props.label;
    let TabaName : string[] = [];
    let key: string[] = Object.keys(this.objs);
    let values: string[][] = Object.values(this.objs);

    for (let i = 0; i < key.length; i++) {
      if (values[i][0] === CurrentCLick) {
        TabaName = values[i];
      }
    }
    this.AddTab(TabaName[0], TabaName[1], this.router);
  };


};





