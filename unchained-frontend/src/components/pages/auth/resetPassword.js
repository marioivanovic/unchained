import React from 'react'

function ResetPassword() {
    return (
        <>
            <div className="reset-password">
                <h2> Votre nouveau mot de passe</h2>

                <label for="password">Mot de passe</label>
                <input type="password" name="password"></input>

                <label for="password">Confirmez le mot de passe</label>
                <input type="password" name="password"></input>

                <button type="submit">Changer le mot de passe</button>
            </div>
        </>
    )
}

export default ResetPassword
