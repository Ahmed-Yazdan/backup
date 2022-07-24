

document.getElementById('submit-btn').addEventListener('click', function(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const problems = document.getElementById('problems').value;
    if(name=='' || email==''|| problems==''){
        alert('Provide proper information before submit')
    } else{
        alert(`
        Your Problem was taken
        name: ${name}
        email: ${email}
        problems: ${problems}
    `)
    }
})