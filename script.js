'use strict';

const strFn = function(arg) {
    if(typeof arg !== "string") {
        alert("This is not a string!");
        return;
    } 
       let str = arg.trim();

        if(str.length > 30){
            str = arg.slice(0, 30) + "..."
        }
        return str;
    }


console.log(strFn("hsddksjjdfhkshdfkhdskjfhksdjfhkjdshfkjsdhfkdshfdfdfdfdfdfdfdsfs"));
console.log(strFn(123));
console.log(strFn(" Hi.  "));