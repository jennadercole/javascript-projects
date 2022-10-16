import get from './getElement.js';
import removeActive from './removeActive.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const buttons = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    removeActive(buttons);
    buttons[0].classList.add('active');
    buttons.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            removeActive(buttons);
            btn.classList.add('active');
        });
    });
};


export default displayUser;