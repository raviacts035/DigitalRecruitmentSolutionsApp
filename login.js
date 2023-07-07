async function handleLogin(event){
    event.preventDefault()
    const email=event.target.elements.email.value;
    const responce=await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        
        username: 'kminchelle',
        password: '0lelplR',
    })
    })
    if (responce) window.location.href = '/index.html'
}