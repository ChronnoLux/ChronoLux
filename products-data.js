// products-data.js
// Your full manual product list

window.PRODUCTS = [
    {
        id: 1,
        name: "Rolex Day-Date 40",
        brand: "Rolex",
        gender: "men",
        type: "luxury",
        price: 86750,
        img: "shopWatchesImages/1.png",
        desc: "Elegant Swiss watch with gold bezel.",
        characteristics: [
            "Case: Oyster architecture, 40 mm diameter",
            "Bezel: Diamond-set",
            "Bracelet: President bracelet",
            "Movement: Perpetual mechanical self-winding"
        ],
        specs: [
            "Swiss Automatic",
            "Water-resistant 100m",
            "Case diameter 40mm"
        ]
    },

    {
        id: 2,
        name: "Rolex Datejust Pearlmaster",
        brand: "Rolex",
        gender: "women",
        type: "luxury",
        price: 41400,
        img: "shopWatchesImages/2.png",
        desc: "Exquisite Rolex Pearlmaster watch with diamond-set dial and bracelet.",
        characteristics: [
    "Case Material: 18k Everose gold",
    "Case Size: 34mm (ref 81405RBR) or 39mm (ref 86405RBR)",
    "Dial: Diamond-paved with 18k Everose gold Roman numerals",
    "Bezel: Diamond-set",
    "Bracelet: Pearlmaster 5-piece link, diamond-set",
    "Movement: Calibre 2235 (34mm) or Calibre 3235 (39mm) automatic",
    "Power Reserve: Approx. 70 hours (Calibre 3235)"
],
specs: [
    "Self-winding automatic movement",
    "Water resistance: 100 meters (330 ft)",
    "Functions: Hours, minutes, seconds, date with rapid setting, stop-seconds"
]

    },

    // ADD ALL YOUR OTHER WATCHES HERE (IDs 1–150)
];

// Save your manual data for all pages
localStorage.setItem("PRODUCTS_DATA", JSON.stringify(window.PRODUCTS));
