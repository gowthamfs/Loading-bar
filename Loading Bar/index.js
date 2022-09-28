const counterEl = document.querySelector('.counter')
const barEl = document.querySelector('.front_bar')

let index = 0;
 
function updateNum(){
    counterEl.innerText = index + '%';
    barEl.style.width = index + '%';
    index++
    if(index <= 100){
        setTimeout(updateNum,50)
    }

}
updateNum()