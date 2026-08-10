// NEW: Open Partner Drawer Handler
function openPartnerDrawer() {
    dismissActiveDrawer();
    document.getElementById('partnerDrawer').classList.add('open');
    document.getElementById('drawerOverlay').style.display = 'block';
}

// NEW: Close Drawer Helper
function dismissActiveDrawer() {
    var drawers = document.querySelectorAll('.grab-side-drawer');
    drawers.forEach(function(drawer) {
        drawer.classList.remove('open');
    });
    var overlay = document.getElementById('drawerOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}[cite: 3]
