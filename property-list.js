class PropertyCard {
  constructor({ id, image, price, beds, baths, sqm, location }) {
    this.id = id;
    this.image = image;
    this.price = price;
    this.beds = beds;
    this.baths = baths;
    this.sqm = sqm;
    this.location = location;
  }
}
const properties = [
  new PropertyCard({
    id: 1,
    image: 'images/Ap-1.jpg',
    price: 349000,
    beds: 2,
    baths: 2,
    sqm: 77,
    location: 'Old Fort Harrison Ave, CA',
  }),
  new PropertyCard({
    id: 2,
    image: 'images/Ap-2.jpg',
    price: 399000,
    beds: 4,
    baths: 2,
    sqm: 80,
    location: 'San Francisco, CA',
  }),
  new PropertyCard({
    id: 3,
    image: 'images/house-1.jpg',
    price: 3199000,
    beds: 3,
    baths: 2,
    sqm: 100,
    location: 'San Francisco, CA',
  }),
  new PropertyCard({
    id: 4,
    image: 'images/house-2.jpg',
    price: 4199000,
    beds: 4,
    baths: 2,
    sqm: 100,
    location: 'San Francisco, CA',
  }),
  new PropertyCard({
    id: 5,
    image: 'images/beachhouse-1.jpg',
    price: 4199000,
    beds: 4,
    baths: 2,
    sqm: 100,
    location: 'San Francisco, CA',
  }),
  new PropertyCard({
    id: 6,
    image: 'images/beachhouse-2.jpg',
    price: 4199000,
    beds: 4,
    baths: 2,
    sqm: 100,
    location: 'San Francisco, CA',
  }),
  new PropertyCard({
    id: 7,
    image: 'images/cabin-1.jpg',
    price: 4199000,
    beds: 4,
    baths: 2,
    sqm: 100,
    location: 'San Francisco, CA',
  }),
  new PropertyCard({
    id: 8,
    image: 'images/commercial-1.jpg',
    price: 4199000,
    beds: 4,
    baths: 2,
    sqm: 100,
    location: 'San Francisco, CA',
  }),
];

const renderProperties = (data, idArray, containerSelector) => {
  const container = document.querySelector(containerSelector);
  container.innerHTML = '';

  idArray.forEach((id) => {
    const property = data.find((p) => p.id === id);
    if (property) {
      const card = document.createElement('div');
      card.classList.add('property-card');

      card.innerHTML = `
          
        <img src="${property.image}" class="card-img" alt="Property image" />
        <span class="card-location">
        <img src="icons/location.svg" class="location-icon" alt="Location icon" />
        <h4>${property.location}</h4>
        </span>

        <div class="card-body">
          <span class="card-features">
          <img src="icons/bed.svg" class="feature-icon" alt="Bed icon" />
          ${property.beds} bed • 
          <img src="icons/bath.svg" class="feature-icon2" alt="Bath icon" />
          ${property.baths} bath •
          <img src="icons/sqm.svg" class="feature-icon3" alt="Square meter icon" />
          ${property.sqm} m²
          </span>
          <div class="card-footer">
            <h4>€${property.price.toLocaleString()}</h4>
            <div class="card-footer-icons">
            <img src="icons/wishlist.svg" class="heart-icon" alt="Heart icon" />
            <img src="icons/share.svg" class="share-icon" alt="Share icon" />
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    }
  });
};
document.addEventListener('DOMContentLoaded', () => {
  renderProperties(properties, [1, 2, 3, 4, 5, 6, 7, 8], '.property-container');
});
