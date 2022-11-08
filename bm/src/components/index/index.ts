import {AxiosInstance, AxiosPromise} from "axios";
import {ref} from "vue";
import {Router} from "vue-router";

export class Home  {

  public obj = ref({
    // 当前登陆用户的头像
    circleUrl: "https://img0.baidu.com/it/u=882622322,99837820&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    editableTabs: [{
      title: "收费项管理",
      name: "charges",
    }],
  });
  constructor() {

  };

  // 新增一个选择tab
  AddTab = (TableName: string, routerName: string, router: Router) : void => {
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
    }
    router.push(`/index/${routerName}`);
  };

  // 移除tab
  RemoveTab = (Name: string) : void => {
    let objs = this.obj.value.editableTabs;
    let Index: number = -1;
    for (let i = 0; i < objs.length; i++) {
      if (objs[i].name === Name) {
        Index = i;
      }
    }
    objs.splice(Index, 1);
  }


};





