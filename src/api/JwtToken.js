export const jwtAuthToken = (user) =>{
    const currentUser = {
        email: user.email
    }

    // get jwt token
    fetch('https://happy-toast-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('happy-token', data.token);
        });
}