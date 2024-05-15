import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const numOfDel = document.querySelector('[name="delay"]');
const radios = document.querySelectorAll('[name="state"]');

iziToast.settings({
  progressBar: false,
  timeout: 4000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
});

const createPromise = ({ delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};

const formSubmit = e => {
  e.preventDefault();

  const objForPromise = {
    delay: Number(numOfDel.value),
    shouldResolve: radios[0].checked,
  };

  form.reset();

  const resultPromise = createPromise(objForPromise);

  resultPromise
    .then(value => {
      iziToast.success({
        message: value,
      });
    })
    .catch(value => {
      iziToast.warning({
        message: value,
      });
    });
};

form.addEventListener('submit', formSubmit);
