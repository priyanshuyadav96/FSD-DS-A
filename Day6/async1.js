// sayhello=()=>{
//     console.log("hello function");
// };
// console.log("start");
// setTimeout(sayhello,4000);
// console.log("end");

// console.log("start");
// setTimeout(()=>{
//     console.log("first task compiled");
//     setTimeout(()=>{
//         console.log("second task compiled");
//         setTimeout(()=>{
//             console.log("third task compiled");
            
//         },3000)
//     },2000)  
// },1000)
// console.log("end")

// const mypromise=new Promise((resolve, reject)=>{
//     let success=true;
//     if(success){
//         resolve("data send success");
//     }
//     else{
//         reject("data failed to send");
//     }
// });

// mypromise.then((message)=>console.log("success: "+message)).catch((error)=>console.log("error fetching data "+error));

function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve([10,20,30]);
        },delay);
    });
}

task("1st task completed",1000).then((data)=>task("2nd task completed",2000)).then((data)=>task("3rd task completed",3000));
task("1st task completed",1000).then((data)=>console.log("2nd",data)).then((data)=>console.log("3rd",data));