// Sample products with 10 images per brand (5 men, 5 women)
const PRODUCTS = [];

// Brands
const BRANDS = ['Rolex', 'Apple', 'Samsung', 'Guess', 'Diesel', 'Polo'];

// Types
const TYPES = ['luxury','sport','smart','classic'];

// Generate sample products
BRANDS.forEach(brand => {

    // 5 men watches
    for(let i=1;i<=5;i++){
        PRODUCTS.push({
            id: `${brand}-men-${i}`,
            title: `${brand} Men Watch ${i}`,
            brand: brand,
            gender: 'men',
            type: TYPES[i % TYPES.length],
            img: `https://source.unsplash.com/300x300/?watch,${brand},men,${i}`
        });
    }

    // 5 women watches
    for(let i=1;i<=5;i++){
        PRODUCTS.push({
            id: `${brand}-women-${i}`,
            title: `${brand} Women Watch ${i}`,
            brand: brand,
            gender: 'women',
            type: TYPES[i % TYPES.length],
            img: `https://source.unsplash.com/300x300/?watch,${brand},women,${i}`
        });
    }
});

const grid = document.getElementById('watch-grid');

function renderProducts(list){
    grid.innerHTML = '';

    list.forEach(p=>{
        const card = document.createElement('div');
        card.className = `watch-card ${p.gender} ${p.type}`;

        card.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p>${p.brand} • ${p.gender} • ${p.type}</p>
        `;

        grid.appendChild(card);
    });
}


// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        filterButtons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');

        applyFilter(btn.dataset.filter);
    });
});

function applyFilter(filter){
    if(filter === 'all'){
        renderProducts(PRODUCTS);
    } else {
        const filtered = PRODUCTS.filter(p => 
            p.gender===filter || p.type===filter
        );
        renderProducts(filtered);
    }
}


// Navigation buttons
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});


// Shop Now button
document.getElementById('shop.html').addEventListener('click', () => {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('shop.html').classList.add('active');
});
