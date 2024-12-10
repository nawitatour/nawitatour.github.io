window.onload = function() {
  setTimeout(function() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";

    setTimeout(function() {
      notification.style.display = "none";
    }, 6000); 
  }, 4000);
}

const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader() {
	const header = document.getElementById('header')
	if (this.scrollY >= 80) header.classList.add('scroll-header');
	else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.questions__header')

	accordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open')

		toggleItem(item)

		if (openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.questions__content')

	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}

}

const sections = document.querySelectorAll('section[Id]')

function scrollActive() {
	const scrollY = window.pageYOffset;
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 58;
		const sectionId = current.getAttribute('id');
		const link = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
		document.querySelectorAll('.nav__menu .nav__link').forEach(el => el.classList.remove('active-link'));
		if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			link.classList.add('active-link');
		}
	});
}

function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 400) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Matiin light-mode ya bre kwkw.
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

document.body.classList.add(darkTheme);
themeButton.classList.add(iconTheme); 

themeButton.style.display = 'none';  

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {
	delay: 500
})
sr.reveal(`.home__social`, {
	delay: 600
})
sr.reveal(`.about__img, .contact__box`, {
	origin: 'left'
})
sr.reveal(`.about__data, .contact__form`, {
	origin: 'right'
})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, {
	interval: 100
})

const carousel = document.querySelector(".carousel");
const backgroundImage = document.querySelector(".bg-image");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;

const imageWidth = 520;
console.log("getbounding1", images[1].getBoundingClientRect());

leftArrow.addEventListener("click", () => {
	prevIndex = currentIndex;
	currentIndex = (currentIndex - 1 + totalImages) % totalImages;
	carousel.style.transform = `translateX(-${imageWidth}px)`;
	carousel.insertBefore(images[currentIndex], carousel.firstChild);

	setTimeout(() => {
		carousel.style.transform = "";
		carousel.classList.add("sliding-transition");
	}, 10);

	setTimeout(() => {
		carousel.classList.remove("sliding-transition");
	}, 490);
});

rightArrow.addEventListener("click", () => {
	carousel.classList.add("sliding-transition");

	prevIndex = currentIndex;
	currentIndex = (currentIndex + 1) % totalImages;

	carousel.style.transform = `translateX(-${imageWidth}px)`;

	setTimeout(() => {
		carousel.appendChild(images[prevIndex]);
		carousel.classList.remove("sliding-transition");
		carousel.style.transform = "";
	}, 700);
});

function zoomImage(image) {
	const zoomedImageContainer = document.getElementById('zoomedImageContainer');
	const zoomedImage = document.getElementById('zoomedImage');

	zoomedImage.src = image.src;
	zoomedImageContainer.style.display = 'flex';
}

function closeZoom() {
	const zoomedImageContainer = document.getElementById('zoomedImageContainer');
	zoomedImageContainer.style.display = 'none';
}

/* Ganti video bre kwkwkw
const imageSlider = [
	'assets/img/header.webp',
	'assets/img/header2.webp',
];
let currentImage = 0;
function changeImage() {
	const slideshow = document.getElementById('slideshow');
	slideshow.classList.add('fade-out');
	setTimeout(() => {
		currentImage = (currentImage + 1) % imageSlider.length;
		slideshow.src = imageSlider[currentImage];
		slideshow.classList.remove('fade-out');
	}, 1000);
}
setInterval(changeImage, 5000);
*/
