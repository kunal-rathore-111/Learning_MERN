
const serverUrl = "";

async function checkLoggedIn() {
    console.log("called")
    const response = await axios({
        withCredentials: true,
        url: "http://localhost:3000/isloggedin"
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
              
            <a href="http://localhost:3000/logout" class="LogoutLink">
            
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