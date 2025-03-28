import axios from 'axios';

import moduleName from './render-functions';

const API_KEY = '49463022-6605d945f5c005b9dcffc2690';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
};

export default function getPhotos(query) {
    return axios
        .get('', {
            params: {
                q: query,
            },
        })
        .then(res => {
            if (res.data.hits.length < 1) {
                throw new Error(
                    'Sorry, there are no images matching your search query. Please try again!'
                );
            }

            return res.data.hits;
        })
        .catch(e => {
            throw new Error(e.message);
        });
}