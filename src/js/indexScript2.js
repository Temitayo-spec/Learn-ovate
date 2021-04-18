/* // Landing page typing effect
let i = 0;
let txt1 = "Study on your schedule,"
let txt2 = "Learn at your own pace,"
let txt3 = "Online learning for students on campus."

let speed = 50;

// document.getElementById("first-text").innerHTML += txt1;
window.addEventListener("load", type)

function type() {
  if(i < txt1.length){
    document.getElementById("first-text").innerHTML += txt1.charAt(i);
    document.getElementById("second-text").innerHTML += txt2.charAt(i);
    document.getElementById("third-text").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(type, speed)

    // alert(document.getElementById("first-text").length)
  }
}





 */
// const toggler = document.querySelector(".nav-toggler");
// const toggler_CLOSE = document.querySelector(".nav-close");
// const nav_links = document.querySelector("nav.navbar ul");

// toggler.addEventListener("click", () => {
//   nav_links.style.display = "block";
// });
// toggler_CLOSE.addEventListener("click", () => {
//   nav_links.style.display = "none";
// });

// let chatbot_toggler = document.getElementById("chatbot-toggle");
// let chatbot = document.getElementById("chatbot-chat-section");
// let chatbot_toggler_icon = document.getElementById("chatbot-icon");
// chatbot_toggler.addEventListener("click", (e) => {
//   if (chatbot.style.display == "none") {
//     chatbot.style.display = "block";
//     chatbot_toggler_icon.innerHTML = "close_fullscreen";
//     document.getElementById("chatbot-container").style.height = "70vh";
//   } else {
//     chatbot.style.display = "none";
//     document.getElementById("chatbot-container").style.height = "auto";
//     document.getElementById("chatbot-container").style.height = "auto";
//     chatbot_toggler_icon.innerHTML = "forum";
//   }
// });

// CHATBOT CODE
var outputArea = document.querySelector("#chat-output");

$("#user-input-form").on("submit", function (e) {
  e.preventDefault();

  var message = $("#user-input").val();

  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);

  // API CODE
  fetch("https://learnovate-backend.herokuapp.com/chatbot/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: message,
    }),
  })
    .then(function (res) {
      if (res.ok) {
        console.log("OK!");
        console.log(res);
      } else {
        console.log("Not OK!!!");
      }
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      setTimeout(function () {
        outputArea.append(`
          <div class='user-message'>
            <div class='message'>
             ${data.response}
            </div>
          </div>
        `);
      }, 250);
    })
    .catch(function (err) {
      console.log("Error!!!!!");
    });

  $("#user-input").val("");
});
