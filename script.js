var age=parseInt(prompt("enter the age of the person"));
let p=new Promise((resolve,reject)=>{

    if(age>18){
        resolve("he is eligible to vote")
    }
    else{
        reject("you are not eligible")
    }
});
console.log(p);
p.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
