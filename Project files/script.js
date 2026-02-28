const houses = [
    { location: "Hyderabad", price: 8000, type: "1BHK" },
    { location: "Hyderabad", price: 15000, type: "2BHK" },
    { location: "Bangalore", price: 18000, type: "2BHK" },
    { location: "Bangalore", price: 9000, type: "1BHK" }
];

function displayHouses(filteredHouses) {
    const houseList = document.getElementById("houseList");
    houseList.innerHTML = "";

    filteredHouses.forEach(house => {
        houseList.innerHTML += `
            <div class="house">
                <h3>${house.type}</h3>
                <p>Location: ${house.location}</p>
                <p>Price: ₹${house.price}</p>
            </div>
        `;
    });
}

function filterHouses() {
    const location = document.getElementById("locationFilter").value;
    const price = document.getElementById("priceFilter").value;

    let filtered = houses.filter(house => {
        return (location === "all" || house.location === location) &&
               (price === "all" || house.price <= price);
    });

    displayHouses(filtered);
}

displayHouses(houses);