import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImageData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.form-send-js');
const list = document.querySelector('.list-js');
const loadMore = document.querySelector('.btn-load');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery-item a');

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', onLoadMore);

let page = 1;
let totalPages = 0;

async function handleSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.search.value.trim();
  if (!searchQuery) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query.' });
    return;
  }

  page = 1;
  list.innerHTML = '';
  loadMore.classList.add('hidden');
  showLoader();

  try {
    const data = await getImageData(searchQuery, page);
    totalPages = Math.ceil(data.totalHits / 15);

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No results',
        position: 'topRight',
        backgroundColor: '#ff4d4f',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
      });
    } else {
      list.innerHTML = createMarkup(data.hits);
      lightbox.refresh();

      if (page < totalPages) {
        loadMore.classList.remove('hidden');
      } else {
        iziToast.info({
          title: 'End of Collection',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Try again.',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;
  loadMore.disabled = true;
  showLoader();

  try {
    const searchQuery = form.elements.search.value.trim();
    const data = await getImageData(searchQuery, page);
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();

    if (page >= totalPages) {
      loadMore.classList.add('hidden');
      iziToast.info({
        title: 'End of Collection',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    const card = document.querySelector('.gallery-item');
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
        left: 0,
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load more images. Try again.',
    });
  } finally {
    loadMore.disabled = false;
    hideLoader();
  }
}

function showLoader() {
  console.log('Показ лоадера');
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
