/**
 * Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
 */


 function execF(fun, millsecs){
    setTimeout( () => {
        fun(millsecs);
    }, millsecs)
 }


 let func = (m) => {
     console.log(`executed after ${m} secs`);
 }


 execF(func, 100);
 execF(func, 1);
 execF(func, 1000);