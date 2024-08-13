const data = [
    "Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Kiwi", "Lemon",
    "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry",
    "Tangerine", "Uva", "Watermelon", "Apricot", "Blueberry", "Cantaloupe",
    "Dragonfruit", "Elderberry", "Guava", "Honeydew", "Jackfruit", "Kumquat",
    "Lime", "Mulberry", "Navel Orange", "Olive", "Peach", "Plum", "Pomegranate",
    "Rhubarb", "Starfruit", "Tamarind", "Yogurtberry", "Zucchini", "Avocado",
    "Blackberry", "Coconut", "Dewberry", "Elderflower", "Feijoa", "Grapefruit",
    "Huckleberry", "Indian Fig", "Jujube", "Kiwifruit", "Lingonberry", "Maracuja",
    "Medlar", "Nance", "Passion Fruit", "Pawpaw", "Persimmon", "Raisin",
    "Salak", "Soursop", "Sugar Apple", "Surinam Cherry", "Tamarillo", "Yunnan Hackberry"
];

function filterResults() {
    let input = document.getElementById('search').value.toLowerCase();
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    const filteredData = data.filter(item => item.toLowerCase().includes(input));
    console.table(filteredData);

    filteredData.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.textContent = item;
        resultsContainer.appendChild(resultItem);
    })
}