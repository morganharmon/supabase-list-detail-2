// import functions and grab DOM elements
import { fetchAllData } from './fetch-utils.js';
import { renderJuice } from './render-utils.js';
// let state
const juiceSection = document.getElementById('juiceSection');

async function loadData() {
    const juices = await fetchAllData();
    for (let juice of juices) {
        const div = renderJuice(juice);
        juiceSection.append(div);
    }
}

loadData();