import React from 'react'

function SignUp() {
    return (
        <>
            <div className='signup-container'>
                <h2>Remplissez ce formulaire afin de créer un compte !</h2>
                <form>
                    <label>Nom</label>
                    <input type="text" for="lastName"></input>
                    <label>Prénom</label>
                    <input type="text" for="firstName"></input>
                    <label>Username</label>
                    <input type="text" for="username"></input>
                    <label>Email</label>
                    <input type="email" for="email"></input>
                    <label>Mot de Passe</label>
                    <input type="password" for="password"></input>
                    <label>Avatar</label>
                    <input type="file" for="avatar"></input>
                    <button>S'inscrire</button>
                </form>
            </div>
        </>
    )
}

export default SignUp
