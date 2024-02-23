function headingChange(){
    // console.log('Button Change')
    const heading = document.getElementById('dom-heading');
    heading.innerText = 'জাভাস্ক্রিপ্ট ডম  ইভেন্টস'
    document.body.style.backgroundColor = 'skyblue'
}

// console.log('JS Dom Events Running')
function changeColor(){
    document.body.style.backgroundColor = "aquamarine"
}
const tomatoBtn = document.getElementById('tomato');
tomatoBtn.onclick = makeTomato;
function makeTomato(){
    document.body.style.backgroundColor = 'tomato';
    // alert('Your body color will be change into Tomato')
}
// Important
document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

// Input field related eventlistener
document.getElementById('update-btn').addEventListener('click', function(){
    // console.log('btn clicked')
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText)
    const defaultText = document.getElementById('default-text');
    defaultText.innerText = inputText;
    inputField.value = '';
})
// Comment related events
document.getElementById('post-btn').addEventListener('click', function(){
    // console.log('Button clicked')
    const commentBox = document.getElementById('comment-box');
    const newComment = commentBox.value;
    // console.log(newComment)
    const commentContainer = document.getElementById('comment-container');
    const comment = document.createElement('p');
    comment.innerText = newComment;
    commentContainer.appendChild(comment);
    commentBox.value = '';
});