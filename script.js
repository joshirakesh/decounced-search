import { rapidApiKey } from './apikeys.js'

const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)


function getSearchResults(query) {
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

let Handler = function (event) {
	const searchTerm = event.target.value;

	if (searchTerm.length < 3) {
		return;
	}
	console.log("*** API Called ***");
	return getSearchResults(searchTerm).then((res) => console.log(res));
}

function getDebouncedFn(cb, limit) {
	let timer
	return function () {
		let context = this,
			arg = arguments;

		if (timer) clearTimeout(timer);
		timer = setTimeout(cb.bind(context, ...arg), limit);
	};
}

document.getElementById('input').addEventListener('keyup', getDebouncedFn(Handler, 1000));