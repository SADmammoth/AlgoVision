// (async function(){
//     let arr =  generateArray(2,20, 10).map((el,i)=>({id: i, valueOf: ()=>Math.round(el)}));
    
//    arr.forEach(el=> { document.getElementById('diag').appendChild(createElement(el.valueOf(), el.id))});
//    quickSort(arr, async (array,l,r)=>{
       
// await new Promise(resolve=>setTimeout(()=>resolve(), 500)); 
//        document.getElementById(l.id).style.background ='red';
//        await new Promise(resolve=>setTimeout(()=>resolve(), 1000));  
       
//     document.getElementById('diag').innerHTML = ''; 
//     array.forEach(el=> {document.getElementById('diag').appendChild(createElement(el.valueOf(), el.id))});
//      document.getElementById(l.id).style.background ='black';
//      return new Promise(resolve=>resolve());
// },
// async (array,l,r)=> {
    
// await new Promise(resolve=>setTimeout(()=>resolve(), 500));  
// document.getElementById(l.id).style.background ='green';
//  document.getElementById(r.id).style.background ='green';
// await new Promise(resolve=>setTimeout(()=>resolve(), 1000));  
// document.getElementById('diag').innerHTML = ''; 
// array.forEach(el=> {document.getElementById('diag').appendChild(createElement(el.valueOf(), el.id))});
// document.getElementById(l.id).style.background ='black';
// document.getElementById(r.id).style.background ='black';
// return new Promise(resolve=>resolve());
// },

// async (array,pivot)=> {
//     [...document.getElementById('diag').children].forEach(el=>el.style.background = 'black');
//     if(pivot){
//     document.getElementById(pivot.id).style.background ='blue';
//     return new Promise(resolve=>resolve());
//     }
// },
// async (array,left,right)=> {
//     [...document.getElementById('diag').children].forEach(el=>el.style.opacity = 0.4);
//     array.slice(left, right+1).forEach(el=>document.getElementById(el.id).style.opacity = 1);
//     return new Promise(resolve=>resolve());
// });
//     window.arr = arr;
    
// })()

(async function(){
    let arr =  generateArray(2,20, 10).map((el,i)=>({id: i, valueOf: ()=>Math.round(el)}));
    
   arr.forEach(el=> { document.getElementById('diag').appendChild(createElement(el.valueOf(), el.id))});
   bubbleSort(arr, async (array,l,r)=>{
       
await new Promise(resolve=>setTimeout(()=>resolve(), 500)); 
       document.getElementById(l.id).style.background ='red';
       await new Promise(resolve=>setTimeout(()=>resolve(), 1000));  
       
    document.getElementById('diag').innerHTML = ''; 
    array.forEach(el=> {document.getElementById('diag').appendChild(createElement(el.valueOf(), el.id))});
     document.getElementById(l.id).style.background ='black';
     return new Promise(resolve=>resolve());
},
async (array,l,r)=> {
    
await new Promise(resolve=>setTimeout(()=>resolve(), 500));  
document.getElementById(l.id).style.background ='green';
 document.getElementById(r.id).style.background ='green';
await new Promise(resolve=>setTimeout(()=>resolve(), 1000));  
document.getElementById('diag').innerHTML = ''; 
array.forEach(el=> {document.getElementById('diag').appendChild(createElement(el.valueOf(), el.id))});
document.getElementById(l.id).style.background ='black';
document.getElementById(r.id).style.background ='black';
return new Promise(resolve=>resolve());
})})()

function createElement(height, id){
    let div = document.createElement('div');
    div.id = id;
    div.classList.add('element');
    div.style.setProperty('--i', height);
    return div;
}

function generateArray(value_min, value_max, size){
    return new Array(size).fill(null).map(()=>(Math.floor(Math.random() * Math.floor(value_max-1))+value_min)); 
}