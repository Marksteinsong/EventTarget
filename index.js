/*
自定义事件
Authored by Markstien Song
 */

const EventTarget=function () {
    this.handlers={};
};
EventTarget.prototype={
    constructor:EventTarget,
    addEvents:function (type,handler) {
        if(!(type in this.handlers)){
            this.handlers[type]=[];
        }
        this.handlers[type].push(handler);
    },
    trig:function (event) {
        if(!(event.type in this.handlers)) {
            return;
        }
        const stack = this.handlers[event.type];
        for(let i = 0, l = stack.length; i < l; i++) {
            stack[i](event);
        }
    },
    removeEvents:function (type,handler) {
        if(!(type in this.handlers)){
            return;
        }else if(handler===undefined){
            delete this.handlers[type];
            return;
        }
        const stack = this.handlers[type];
        for(let  i = 0, l = stack.length; i < l; i++) {
            if(stack[i] === handler){
                stack.splice(i, 1);
                return ;
            }
        }

    }
};
module.exports=EventTarget;