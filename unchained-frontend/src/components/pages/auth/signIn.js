import React from 'react'

function SignIn() {
    return (
        <>
            <div className="signin-container">
                <h2>Connectez-vous !</h2>
                <form>
                    <label for="username">Username</label>
                    <input type="text" name="name"></input>
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password"></input>
                    <button>Se connecter</button>
                </form>
            </div>
        </>
    )
}

export default SignIn
