# EventTarget
An event Manager.

###Installing

1.```npm install eventtarget-manager --save```

or

2.```<script src="EventTarget.js"></script>```


###Usage

example 1——you can add any function on the same event and transfer an object with.

```flow js
    const target=new EventTarget();
    target.addEvents("message",function (e) {
        setTimeout(function () {
            console.log(e.message);
        },3000)
    });
    target.addEvents("message",function (e) {
        setTimeout(function () {
            console.log(e.message);
        },3000)
    });
    target.trig({type:"message",message:"This is the thing in 3s to show."});
```


example 2——remove  an event
```flow js
const target=new EventTarget();
target.addEvents("fly",function () {
       console.log("This was removed and could never be showed.");
    });
    target.removeEvents("fly");
    target.trig({type: "fly"});
```

example 3——remove a function in the event without any **influence** to the functions in **the same event**
```flow js
const target=new EventTarget();
const handler1=function () {
        console.log("This was removed and could never be showed.");
    };
    const handler2=function(){
        console.log("something from handler2.");
    };
    target.addEvents("close",handler1);
    target.addEvents("close",handler2);
    target.removeEvents("close",handler1);
    target.trig({type: "close"});   

```
   

###[example](index.html)
