// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(res=>res.json())
//     .then(posts => displayPost(posts));
// };

// loadPosts();

// function displayPost(posts){
//     const postContainer = document.getElementById('posts');
//     for(const post of posts){
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = `
//             <h3>${post.title}</h3>
//             <img src='${post.url}'>${post.url}</img>
//         `;
//         postContainer.appendChild(div);
//     }
// };



// // fetch('https://jsonplaceholder.typicode.com/posts', {
// //     method: 'POST',
// //     body: JSON.stringify({
// //         title:'bla bla',
// //         body:'bla bla khfjkhdskjfhdhf',
// //         userId:1,
// //     }),
// //     headers: {
// //         'Content-type': 'application/json; charset=UTF-8',
// //     },
// // })
// // .then(res=>res.JSON())
// // .then(data=>console.log(data));


const stuInfo = JSON.stringify({ name: "James", roll: 3 });
 console.log(stuInfo.name);