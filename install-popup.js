// Install popup script
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeBtn');
    const joinBtn = document.getElementById('joinBtn');

    // Close popup when close button is clicked
    closeBtn.addEventListener('click', function() {
        window.close();
    });

    // Handle join button click - opens in new tab
    joinBtn.addEventListener('click', function(e) {
        // The link will open in new tab due to target="_blank"
        // We can also close the popup after a delay
        setTimeout(() => {
            window.close();
        }, 500);
    });
});

