import React from "react";

function popUp() {
  let chatbot_toggler = document.getElementById("chatbot-toggle");
  let chatbot = document.getElementById("chatbot-chat-section");
  let chatbot_toggler_icon = document.getElementById("chatbot-icon");

    if (chatbot.style.display == "none") {
      chatbot.style.display = "block";
      chatbot_toggler_icon.innerHTML = "close_fullscreen";
      document.getElementById("chatbot-container").style.height = "70vh";
    } else {
      chatbot.style.display = "none";
      document.getElementById("chatbot-container").style.height = "auto";
      document.getElementById("chatbot-container").style.height = "auto";
      chatbot_toggler_icon.innerHTML = "forum";
    }
}
const Chatbot = () => (
  // <!-- CHATBOT -->
  <div className="chatbot-container" id="chatbot-container">
    <div id="chatbot-chat-section">
      {/* <!-- partial:index.partial.html --> */}
      <div className="chat-output" id="chat-output">
        <div className="user-message">
          <div className="message">
            "Hey there! I am Learnbot your personalized learning assistant.{" "}
            <br></br> In need of a plug that provides your answers directly
            rather than returning a list of documents or web pages that might
            contain the answer, as a search engine might? <br></br> I will do
            just that as I answer any question you have about Learnovate, and
            more importantly any question you have concerning anything!{" "}
            <br></br> Simply input 'calc' before your question to access my
            mathematical and research functions to get information about
            anything you want or need to know. <br></br> Example 1: Calc x+y =
            5, x -y = 1 <br></br> Example 2: Calculate x+y =5, x -y=1 <br></br>{" "}
            I am here to make your learning curve smoother.
          </div>
        </div>
      </div>

      <div className="chat-input">
        <form action="#0" id="user-input-form">
          <input
            type="text"
            id="user-input"
            className="user-input"
            placeholder="Talk to the bot."
          ></input>
        </form>
      </div>
    </div>
    <div className="chat-icon" id="chatbot-toggle" onClick={() => { popUp();}}>
      <span className="material-icons" id="chatbot-icon">
        forum
      </span>
    </div>
  </div>
);

export default Chatbot;
