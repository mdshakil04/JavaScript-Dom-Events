console.log('JS Dom Events Running')
function changeColor(){
    document.body.style.backgroundColor = "aquamarine"
}
const tomatoBtn = document.getElementById('tomato');
tomatoBtn.onclick = makeTomato;
function makeTomato(){
    document.body.style.backgroundColor = 'tomato';
    // alert('Your body color will be change into Tomato')
}
document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})