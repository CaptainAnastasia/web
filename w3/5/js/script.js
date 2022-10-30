const menu = document.querySelector('.menu__body')
const nc = document.querySelector('.newton_cradle')

const body = document.body;

if (menu && nc) {
	nc.addEventListener('click', e => {
		menu.classList.toggle('active')
		nc.classList.toggle('active')
		body.classList.toggle('lock')
	})
}


