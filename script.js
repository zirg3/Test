const item = document.querySelectorAll('.accordion__item');
const content = document.querySelectorAll('.accordion__content');

function acc(item, content) {
	item.forEach((i,elem) => {
		i.children[0].addEventListener('click', (e) => {
			if (!content[elem].classList.contains('active')) {
				content[elem].classList.add('active');
				content[elem].style.maxHeight = `${content[elem].scrollHeight}px`;
			} else {
				content[elem].classList.remove('active');
				content[elem].style.maxHeight = null;
			}
		})
	})
}
acc(item,content)