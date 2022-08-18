import { rapidApiKey } from './apikeys.js'

const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)



function getSearchResults() {

	fetch('https://genius-song-lyrics1.p.rapidapi.com/search?q=Alan%20Walker', {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': rapidApiKey,
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
		}
	}).then(res => res.json())
		.then(res => console.log(res))
		.catch(err => console.error(err));
}
