// display current photographer
let dataFetch = async () => fetch("../data.json").then(res => res.json());
//#:Add error handler .then or .catch function => display http error

let profilePageDrawFeed = async () => {
	let database = await (dataFetch());
	let userId = parseInt(sessionStorage.getItem("displayId"));
	let displayUser = database.photographers.filter((obj => obj.id === userId))[0];
	let userMedias = database.media.filter((obj => obj.photographerId === userId));
	console.log(userMedias);
	//COnvert user header populating into func ?
	document.querySelector(".username").textContent = displayUser.name;
	document.querySelector(".city").textContent = displayUser.city;
	document.querySelector(".country").textContent = displayUser.country;
	document.querySelector(".user-tagline").textContent = displayUser.tagline;
	document.querySelector(".profile-pic").setAttribute("src", `../images/profiles/${displayUser.portrait}`);
	document.querySelector(".modal-container > h1").textContent += ` ${displayUser.name}`;
	drawUserFeed(userMedias);
};
profilePageDrawFeed();

document.querySelector(".contact").addEventListener("click", function () {
	document.querySelector(".modal-overlay").classList.toggle("open-modal");
});
document.querySelector(".close-btn").addEventListener("click", function () {
	document.querySelector(".modal-overlay").classList.toggle("open-modal");
});

document.querySelector(".close-slider").addEventListener("click", function () {
	document.querySelector(".modal-slider-container").classList.toggle("open-slider");
});
