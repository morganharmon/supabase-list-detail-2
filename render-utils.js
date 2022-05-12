export function renderJuice(juice) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    a.href = `./juices/index.html?id=${juice.id}`;
    h2.textContent = juice.type + ' juice';
    img.src = juice.image;
    img.alt = `${juice.type} juice`;

    a.append(h2);
    div.append(a, img);
    return div;
}

export function renderDetails(juice) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h2.textContent = juice.type + ' juice';
    img.src = juice.image;
    img.alt = `${juice.type} juice`;
    p.textContent = `${juice.type} juice is ${juice.color} and is full of ${juice.vitamins}.`;
    
    div.append(h2, img, p);
    return div;
}