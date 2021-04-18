import React from "react";

//importing Components
import Accordion from "./Accordion";
import Chatbot from "./Chatbot"

//import Images
import img3 from "./images/windows-nYObhCK1dmA-unsplash 1.png";

import img4 from "./images/Ellipse 8.svg";
import img5 from "./images/windows-H9oXWdbFw_Y-unsplash 2.png";
import img6 from "./images/3421336 1.svg";
import img7 from "./images/3808948 1.svg";
import img8 from "./images/3808949 1.svg";
import niclex from './images/3421337 1.svg';
const Body = () => (
	<main className="container">
		{/* <!-- Why Learnovate======Row 1--> */}
		<div className="row-one">
			<header className="row-header">Why Learnovate?</header>
			<p className="row-header">
				Get better learning experience with less effort
			</p>
			<div className="flex">
				<div className="column">
					<header className="number-header">01.</header>
					<header className="row-subheader">Learn at your own pace</header>
					<p>
						You don’t have to learn at the pace of the className. Get to enjoy
						lifetime access to video lectures on Learnovate. Self-paced learning
						available to you anytime and anywhere.
					</p>
					<img
						src= { img3 }
						alt="A man learning from his laptop"
					></img>
				</div>

				<div className="column">
					<img
						src={ img4 }
						alt="Yellow Ellipse"
					></img>
					<header className="number-header">02.</header>
					<header className="row-subheader">Efficient and hassle-free</header>
					<p>
						As a student who attends congested classNamees daily. Keeping up with
						your studies could be a challenge. Learnovate provides you a
						comfortable learning environment
					</p>
				</div>

				<div className="column">
					<header className="number-header">03.</header>
					<header className="row-subheader">Ask questions</header>
					<p>
						Many students are not comfortable raisng questions in className. At
						learnovate you can ask as many questions without criticism. You can
						also hold discussions.
					</p>
					<img
						src={ img5 }
						alt="A woman taking notes from her laptop"
					></img>
				</div>
			</div>
        </div>
        {/* <!-- What we offer=============Row 2--> */}
        <div className="row-two">
            <header className="row-header">What we offer </header>
            <div className="flex sliding">
                <div className="column one">
                    <div id="bg-3-1">
                    <img src={ img6 } alt="Online Learning(Mobile Phone Demo)"></img>
                    </div>
                    <header className="row-subheader">Online Learning</header>
                    <p className="text-center row-3-paragraph">We use a reserach-proven pedagogy to bring to you the best learning experience.</p>
                </div>

                <div className="column">
                    <div id="bg-3-2">
                    <img src={ niclex } alt="Academic Blog(Forum Demo)"></img>
                    </div>
                    <header className="row-subheader">Academic Blog</header>
                    <p>We patnered with Africa’s leading blog ‘The Niclex’. To provide you with educational guides that help hone your skills.</p>
                </div>
    
                <div className="column">
                    <div id="bg-3-3">
                    <img src={ img7} alt="Mobile Library(Laptop with books Demo)"></img>
                    </div>
                    <header className="row-subheader">Mobile Library</header>
                    <p>Learnovate offers you a massive archive of books to help you study. The books are up for free downloads. They are available to you online at any time.</p>
                </div>
            </div>
        </div>
        {/* <!-- Drop a message===ROW THREE --> */}
        <div className="row-three">
            <header className="row-header">Drop a message</header>
            <p className="row-header">We're always here to help.</p>
            <div className="flex">
                <div>
                    <form action="#" method="post">
                        <div className="form-row flex">
                            <input type="text" name="name" id="name" placeholder="Your Name"></input>
                            <input type="tel" name="telephone" id="telephone" placeholder="Phone Number"></input>
                        </div>
                        <div className="form-row">
                            <input type="email" name="youremail" id="youremail" placeholder="Email"></input>
                        </div>
                        <div className="form-row">
                            <textarea name="message" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-row">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="form-image-bg">
                    <img src={ img8 } alt="woman cartoon working her laptop"></img>
                </div>
            </div>
        </div>

                <Accordion />
                <Chatbot />
	</main>
);

export default Body;
