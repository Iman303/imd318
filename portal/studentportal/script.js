const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

document.getElementById('logoutButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior
    
    // Clear any session or local storage if needed (optional)
    // localStorage.clear();
    // sessionStorage.clear();

    // Redirect the user to the main Sign In/Sign Up page
    window.location.href = '../index.html'; // Adjust the path to your Sign In/Sign Up page
});