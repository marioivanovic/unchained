import React from 'react'

function SignUp() {
    return (
        <>
            <div className='signup-container'>
                <h2>Remplissez ce formulaire afin de créer un compte !</h2>
                <form>
                    <label for="lastName">Nom</label>
                    <input type="text" for="lastName"></input>
                    <label for="firstName">Prénom</label>
                    <input type="text" for="firstName"></input>
                    <label for="username">Username</label>
                    <input type="text" for="username"></input>
                    <label for="email">Email</label>
                    <input type="email" for="email"></input>
                    <label for="password">Mot de Passe</label>
                    <input type="password" for="password"></input>
                    <label for="password">Entrez à nouveau votre mot de passe</label>
                    <input type="password" for="password"></input>
                    <label for="avatar">Avatar</label>
                    <input type="file" for="avatar"></input>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </>
    )
}

export default SignUp
