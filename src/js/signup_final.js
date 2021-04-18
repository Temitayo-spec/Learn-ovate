let TABS = document.querySelectorAll(".tab");
let nextBtn = document.querySelector("#nextBtn");
let steps = document.querySelectorAll(".step")
let prevBtn = document.querySelector("#prevBtn");
let form = document.querySelector("form");

let current_tab = 0;
TABS[current_tab].style.display = 'block';

if (current_tab == 0) {
  prevBtn.style.display = 'none';
  steps[0].style.backgroundColor = '#25274d';
}
 
nextBtn.addEventListener("click", () => {

    // First TAB
    if(current_tab == 0){
        let usernameinputerror = document.getElementById("username-input-error");
        let emailinputerror = document.getElementById("email-input-error");
        let phoneinputerror = document.getElementById("phone-input-error");
        let username = document.getElementById("username").value;
        let useremail = document.getElementById("useremail").value;
        let phone = document.getElementById("phone").value;

        // username validation
        let username_regex = /^[a-zA-Z0-9_]{3,15}$/
        if(username.length < 3){
            usernameinputerror.style.display = "block"
        }else if(username_regex.test(username)){
            usernameinputerror.style.display = "none"
        }else if(!username_regex.test(username)){
            usernameinputerror.style.display = "block"
            usernameinputerror.textContent = "Your username must be 15 characters or less and can contain only letters, numbers, and underscores and no spaces"
        }else{
            usernameinputerror.style.display = "none"
        }

        // Email validation
        let email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(useremail.length < 3){
            emailinputerror.style.display = "block"
        }else if(email_regex.test(useremail)){
            emailinputerror.style.display = "none"
        }else if(!email_regex.test(useremail)){
            emailinputerror.style.display = "block"
        }else{
            emailinputerror.style.display = "none"
        }

        let phone_regex1 = /^234[0-9]{10}$/
        let phone_regex2 = /^0[0-9]{10}$/
        if(phone.length < 11){
            phoneinputerror.style.display = "block"
        }else if(phone_regex1.test(phone) || phone_regex2.test(phone)){
            phoneinputerror.style.display = "none"
        }else if(!phone_regex1.test(phone) || !phone_regex2.test(phone)){
            phoneinputerror.style.display = "block"
        }else{
            phoneinputerror.style.display = "none"
        }

        if (phone_regex1.test(phone) || phone_regex2.test(phone)){
            if(email_regex.test(useremail) && username_regex.test(username)){
                current_tab++

            }
        }else{
            current_tab = 0
        }
    }




    // Second TAB
    if(current_tab == 1){
        let lastnameinputerror = document.getElementById("lastname-input-error");
        let firstnameinputerror = document.getElementById("firstname-input-error");
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;

        // username validation
        let name_regex = /^[a-zA-Z]{2,50}$/
        if(name_regex.test(firstname)){
            firstnameinputerror.style.display = "none"
        }else if(!name_regex.test(firstname)){
            firstnameinputerror.style.display = "block"
        }else{
            firstnameinputerror.style.display = "none"
        }

        // LAST NAME
        if(name_regex.test(lastname)){
            lastnameinputerror.style.display = "none"
        }else if(!name_regex.test(lastname)){
            lastnameinputerror.style.display = "block"
        }else{
            lastnameinputerror.style.display = "none"
        }

        

        if (name_regex.test(lastname) && name_regex.test(firstname)){
                current_tab++
        }else{
            current_tab = 1
        }
    }



    // FINAL TAB
    if(current_tab == 2){
        let passwordinputerror = document.getElementById("password-input-error");
        let confirmpasswordinputerror = document.getElementById("confirmpassword-input-error");
        let password = document.getElementById("password").value;
        let confirmpassword = document.getElementById("confirmpassword").value;

        let password_regex = /^[0-9a-zA-Z_]{7,20}$/
        
        if(password != confirmpassword){
            confirmpasswordinputerror.style.display = 'block'
        }else if(password == confirmpassword){
            confirmpasswordinputerror.style.display = 'none'
        }

        if(password_regex.test(password)){
            passwordinputerror.style.display = 'none'
        }else if(!password_regex.test(password)){
            passwordinputerror.style.display = 'block'
            // confirmpasswordinputerror.style.display ='block'
        }else{
            passwordinputerror.style.display = "none"
        }
// nn1r.K3t

        if (password_regex.test(password) && password == confirmpassword) {
            current_tab++
            document.location.href = 'index.html'

           
                fetch('http://learnovate-backend.herokuapp.com/student/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userparam,
                    password: userpassword
                })
                })
                .then(function(res){
                    if(res.ok){
                        console.log("OK!");
                    }else{
                        console.log("Not OK!!!");
                    }
                    return res.json();
                })
                .then(function(data){
                    console.log(data);
                })
                .catch(function(err){
                    console.log("Error!!!!!");
                })



        }

            // api inegrationnnnnnnnnnnnn
            /* "user": {
        "username": "chinemerem",
        "email": "favour@learnovate.com",
        "password": "chinemerem",
        "first_name": "Favour",
        "last_name": "Felix"
    },
    "dob": "2002-05-08",
    "phone_number": "9048904498",
    "profile_image": "https://imaginary.imagelink.get",
    "gender": "M",
    "bio": "I am the smartest guy in the room"
}' */
        
        

        /* if (name_regex.test(lastname) && name_regex.test(firstname)){
                current_tab++
        }else{
            current_tab == 1
        } */
    }










    let back_tab = current_tab - 1;

    if(current_tab > 0 && current_tab < 3){
        prevBtn.style.display = 'inline-block' ;
        TABS[current_tab].style.display = 'block'
        TABS[back_tab].style.display = 'none'
        steps[current_tab].style.backgroundColor = '#25274d';
        steps[back_tab].style.backgroundColor = '#ddd';


        if(current_tab == 2  ){
            nextBtn.textContent = 'Get Started';
        }else{
                nextBtn.textContent = 'Next';
        }

    }else{
        if(current_tab > 2){
            form.addEventListener('submit', (e) => {
                return true;
            })
            
        }
    }


    // api
    if(nextBtn.textContent == 'Get Started'){
        nextBtn.addEventListener("click", () => {
            
        
            /* form.addEventListener("submit", function(e){
                e.preventDefault();
                let username = document.getElementById("username").value;
                let username = document.getElementById("useremail").value;
                let username = document.getElementById("username").value;
                let userpassword = document.getElementById("userpassword").value;
                fetch('http://learnovate-backend.herokuapp.com/student/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userparam,
                    password: userpassword
                })
                })
                .then(function(res){
                    if(res.ok){
                        console.log("OK!");
                    }else{
                        console.log("Not OK!!!");
                    }
                    return res.json();
                })
                .then(function(data){
                    console.log(data);
                })
                .catch(function(err){
                    console.log("Error!!!!!");
                })


                }) */
        })
    }




})

prevBtn.addEventListener("click", () => {
    if(current_tab > 0){
        current_tab--;
        let back_tab = current_tab + 1; 
        TABS[current_tab].style.display = 'block'
        TABS[back_tab].style.display = 'none'
        steps[current_tab].style.backgroundColor = '#25274d';
        steps[back_tab].style.backgroundColor = '#ddd';

        if(current_tab < 2  ){
            nextBtn.textContent = 'Next';
        }else{
                nextBtn.textContent = 'Get Started';
        }
    }

    if (current_tab == 0) {
        prevBtn.style.display = 'none';
      }
    
})
// for(let i = 0; TABS.length; i++){
    // }








        
    
     /* if(nextBtn.textContent == 'Get Started'){
        nextBtn.addEventListener("click", () => {
            console.log("jwdh");
            // document.location.href = 'index.html'
        })
    } */