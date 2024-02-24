document.getElementById('post-btn').addEventListener('click', function(){
    // console.log('Button generated')
    const commentBox = document.getElementById('input-field');
    // console.log(commentBox)
    const newComment = commentBox.value;
    // console.log(newComment);
    const commentArea = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentArea.appendChild(p)
    commentBox.value = '';
})
function makeGreen(){
    document.body.style.backgroundColor = "green";
}
