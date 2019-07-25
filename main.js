/*
自定义事件
 */
var EventTarget=function () {
    this.handlers={};
};
EventTarget.prototype={
    constructor:EventTarget,
    addEvents:function (type,handler) {
        if(!(type in this.handlers)){
            this.handlers[type]=[];
        }
        this.handlers[type].push(handler);
        console.log("添加事件："+type+" 函数:"+handler.name);
    },
    fire:function (event) {
        if(!(event.type in this.handlers)) {
            console.log("没有事件："+type);
            return;
        }
        const stack = this.handlers[event.type];
        for(let i = 0, l = stack.length; i < l; i++) {
            stack[i](event);
            console.log("触发事件："+event.type+"函数："+stack[i].name);
        }
    },
    removeEvents:function (type,handler) {
        if(!(type in this.handlers)){
            return;
        }
        const stack = this.handlers[type];
        for(let  i = 0, l = stack.length; i < l; i++) {
            if(stack[i] === handler){
                console.log("删除事件："+type+"函数："+stack[i].name);
                stack.splice(i, 1);
                return ;
            }
        }

    }
};