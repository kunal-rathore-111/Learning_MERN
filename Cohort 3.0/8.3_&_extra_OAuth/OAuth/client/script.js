
const serverUrl = "https://google-login-demo-project-05-backen.vercel.app";     //need to change for development

async function checkLoggedIn() {
    console.log("called")
    const response = await axios({
        method: "GET",
        url: `${serverUrl}/isloggedin`,
        withCredentials: true,
    });
    if (response.status === 200) {
        const userData = response.data.userData;
        const username = userData.displayName;
        // dom manipulate code
        let element = document.querySelector("body");
        element.innerHTML = "";
        element.innerHTML = `        
         <div class="herodiv">
        <div class="login_with_googleDiv">
            <div class="username">Hello, ${username}</div>
            <li class="googleLink_and_googleLogo">
              
            <a href= "${serverUrl}/logout" class="LogoutLink">
            
            <div class="logOut_text"> Logout of Google Account </div>
            
            <div class="googleLogoDivForLogOut">
                        <span class="material-symbols-outlined logOutIcon">
                        logout
                    </span>
                </div>
                </a>
            </li>
        </div>
    </div>`

    }
}

checkLoggedIn();