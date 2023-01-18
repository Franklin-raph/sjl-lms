import React from 'react'

const Home = () => {
    return (
        <div id="signupmodal">
            <div class="loaderContainer">
                <img src="/images/loading2.gif" alt="" class="loadingGif" />
            </div>
            <div class="error">
                <p>Please Validate all fields</p>
                <i class="ri-close-circle-line closeErrorModal"></i>
            </div>

            <form class="singInForm">
                <i class="ri-close-circle-line closeModal"></i>
                <input type="text" class="email" name="email" placeholder="Email" />
                <input type="password" class="email pass" name="password" placeholder="Password" />
                <input type="submit" value="Sign In" class="signup" />
                <p class="mt-1 signUpText">Don't have an accout? <span>Sign up</span></p>
            </form>
        </div>
    )
}

export default Home