import React from 'react';
import {
  Header,
  Skills,
  Projects,
  Experience,
} from './components';
import resume from './static/pdf/resume.pdf';

const App = () => {

	const yearsOfExp = 3;

	return (
		<>
			<Header />
			<main>
				<section id="about">
					<h2>
						About Me
					</h2>
					<p>
						I am a Project Manager turned Software Engineer with a background in Robotics, Electronics and Philanthropy.
					</p>
					<p>
						I primarily focus on Front End Web Development, with {yearsOfExp} years of experience in React.js and Node.js.
					</p>
				</section>
				<Skills />
				<Projects />
				<section id="contact">
					<h2>Get in Touch</h2>
					<ul>
						<li>
							<a
								href="https://www.linkedin.com/in/hkumar1993/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
								<span>LinkedIn</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.github.com/hkumar1993"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" aria-hidden="true" title="GitHub"></i>
								<span>GitHub</span>
							</a>
						</li>
						<li>
							<a
								href="mailto:harsh@hkumar.me"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-envelope" aria-hidden="true" title="Email"></i>
								<span>Email</span>
							</a>
						</li>
						<li>
							<a
								href={resume}
								download="Harsh Kumar Resume"
							>
								<i className="fas fa-file-alt" aria-hidden="true" title="Resume"></i>
								<span>Resume</span>
							</a>
						</li>
					</ul>
				</section>
			</main>
    	</>
  	);
}

export default App;
