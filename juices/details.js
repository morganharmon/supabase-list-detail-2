import { fetchItemDataById } from '../fetch-utils.js';

const params = new URLSearchParams(window.location.search);

async function loadData() {
    const id = params.get('id');
    const juice = await fetchItemDataById(id);


}

loadData();