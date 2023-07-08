async function handleLogin(event){
    event.preventDefault()
    const email=event.target.elements.email.value;
    const password=event.target.elements.password.value
    const responce=await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    })
    
    // body: JSON.stringify({
        
    //     username: email,
    //     password: password,
    // })
    console.log(responce)
    if (responce) window.location.href = './dashbord.html'
}