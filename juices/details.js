import { fetchItemDataById } from '../fetch-utils.js';
import { renderDetails } from '../render-utils.js';

const params = new URLSearchParams(window.location.search);
const juiceSection = document.getElementById('juiceSection');

async function loadData() {
    const id = params.get('id');
    const juice = await fetchItemDataById(id);
    const div = renderDetails(juice);
    juiceSection.append(div);

}

loadData();