
const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const nowYear = new Date().getFullYear();

const fromNewYear = new Date(`January ${nowYear + 1} 00:00:00`);


function countFromNewYear(){
	const nowDate = new Date()
	
	let pointCount = fromNewYear - nowDate;

	const d = Math.floor(pointCount / 1000 / 60 / 60 / 24);
	const h = Math.floor(pointCount / 1000 / 60 / 60) % 24;
	const m = Math.floor(pointCount / 1000 / 60) % 60;
	const s = Math.floor(pointCount / 1000) % 60;

	days.innerHTML = d;
	hours.innerHTML = h < 10? '0' + h : h;
	minutes.innerHTML = m < 10? '0' + m : m;
	seconds.innerHTML = s < 10? '0' + s : s;

}
setInterval(countFromNewYear, 1000)