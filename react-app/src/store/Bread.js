import { makeAutoObservable } from "mobx"

// 每个文件就是相应的状态模块
class State{
    constructor(){
        // 通过这个方法，这个类里的所有属性和方法都被监听
        makeAutoObservable(this)
    }
    tabArr = [{name:"nav 1",path:'/nav1'}, {name:"nav 2",path:'/nav2'}, {name:"nav 3",path:'/nav3'}];
    bread='nav 3';
    changeBread=(e)=>{
        this.bread=this.tabArr[e.key].name;
    }
}
export default new State();