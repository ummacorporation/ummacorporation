// ==========================================
// UMMA script.js (Frontend Interaction)
// ==========================================

// Initialize Map
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('map')) {
        const map = L.map('map').setView([37.5665, 126.9780], 13); // Default Seoul view
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // UMMA Central Hub Clinic Marker
        L.marker([37.5665, 126.9780]).addTo(map)
            .bindPopup("<b>UMMA Central Hub Clinic</b><br>Building B, Healthcare Prime District")
            .openPopup();
    }
});

// Modal Logic
function openOrderModal(productName) {
    document.getElementById('order-product').value = productName;
    document.getElementById('order-modal').style.display = 'block';
}

function closeOrderModal() {
    document.getElementById('order-modal').style.display = 'none';
}

// Form Handlers using LocalDatabase (db.js)
function handleOrderSubmit(event) {
    event.preventDefault();
    const productName = document.getElementById('order-product').value;
    const customerName = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('delivery-address').value;

    const newOrder = db.saveOrder({
        product: productName,
        customerName: customerName,
        phone: phone,
        address: address
    });

    alert(`Order placed successfully! Your Tracking ID is: ${newOrder.id}`);
    document.getElementById('order-form').reset();
    closeOrderModal();
}

function handleDonorSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('donor-name').value;
    const phone = document.getElementById('donor-phone').value;
    const volume = document.getElementById('donor-volume').value;
    const address = document.getElementById('donor-address').value;

    const newDonor = db.saveDonor({
        name: name,
        phone: phone,
        volume: volume,
        address: address
    });

    alert(`Donor application submitted! Your Application ID is: ${newDonor.id}`);
    document.getElementById('donor-form').reset();
}
