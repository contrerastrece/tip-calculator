const $opt=document.getElementById('opt');
const $bott=document.querySelectorAll('.calc__input-tip');
const $btns=document.getElementsByClassName('calc__input-tip');

console.log(typeof($btns));
console.log($btns);
console.log($bott);
// console.log(Array.from($btns));
// Array.from($btns).forEach(btn=>{
//     btn.addEventListener('click',e=>{
//         {
//             console.log(e.target);
//         }
//     });
//     console.log(btn);
// });

$bott.forEach(btn=>{
    btn.addEventListener('click',e=>{
        {
            console.log(e.target);
            console.log(indexOf($btns,e.target));
        }
    });
    console.log(btn);
    console.log($bott.indexOf(btn));
});