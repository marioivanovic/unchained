import React from 'react'

function ForgotPassword() {
    return (
        <>
            <div className="forgot-container">
                <h2>Vous avez oublié votre mot de passe ?</h2>

                <form>
                    <label for="email">Email</label>
                    <input type="email" name="email"></input>

                    <button type="submit">Envoyer</button>
                </form>

            </div>
        </>
    )
}

export default ForgotPassword
