import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HeadlineCards from './components/HeadlineCards.jsx';
import Food from './components/Food.jsx';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<HeadlineCards />
			<Food />
		</div>
	);
}

export default App;
