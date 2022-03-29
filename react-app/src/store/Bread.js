import { makeAutoObservable } from "mobx"

// 每个文件就是相应的状态模块
class State{
    constructor(){
        // 通过这个方法，这个类里的所有属性和方法都被监听
        makeAutoObservable(this)
    }
    tabArr = ["nav 1", "nav 2", "nav 3"];
    bread='nav 3';
    changeBread=(e)=>{
        this.bread=this.tabArr[e.key]
    }
}
export default new State();