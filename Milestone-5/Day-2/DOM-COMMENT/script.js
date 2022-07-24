// alert('hello!');

document.getElementById('submit-comment').addEventListener('click', function(){
    const commentBox = document.getElementById('comment-area');
    const userComment = commentBox.value;

    const newComment = document.createElement('p');
    newComment.innerText = userComment;

    const commentContainer = document.getElementById('comment-container'); 

    commentContainer.appendChild(newComment);
    commentBox.value= '';
});