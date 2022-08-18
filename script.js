import { rapidApiKey } from './apikeys.js'

const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)



async function getSearchResults(query) {
	const encodedQueryStr = encodeURIComponent(query);

	return fetch(`https://genius-song-lyrics1.p.rapidapi.com/search?q=${encodedQueryStr}`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': rapidApiKey,
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
		}
	}).then(res => res.json())
		.catch(err => console.error(err));
}

async function Handler(event) {
	const searchTerm = event.target.value;

	if (searchTerm.length < 3) {
		return;
	}

	const res = await getSearchResults(searchTerm);
	console.log(res);
}

document.getElementById('input').addEventListener('keyup', Handler);