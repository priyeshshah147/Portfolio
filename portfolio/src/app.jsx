import React from 'react';
import {
  Header,
  Skills,
  Projects,
  Experience,
  Splash,
  About,
  Contact,
} from './components';

const App = () => {

	return (
		<>
			<a href="#about" className="skipnav">Skip to Main Content</a>
			<Header />
			<main>
				<Splash />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Contact />
			</main>
    	</>
  	);
}

export default App;
