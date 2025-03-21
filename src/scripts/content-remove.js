function restoreOriginalImages() {
    document.querySelectorAll("img").forEach(img => {
        if (img.dataset.originalSrc) {
            img.src = img.dataset.originalSrc; // Restore original image
            img.srcset = img.dataset.originalSrcSet || ""; // Restore original srcset
            delete img.dataset.originalSrc; // Remove stored data
            delete img.dataset.originalSrcSet;
        }
    });
}

restoreOriginalImages();