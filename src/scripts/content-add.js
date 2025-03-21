function replaceImagesWithBroccoli() {
    const broccoliUrl = "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const broccoliSrcSet = `${broccoliUrl} 800w,${broccoliUrl} 700w,${broccoliUrl} 600w,${broccoliUrl} 500w,${broccoliUrl} 400w`;
    
    document.querySelectorAll("img").forEach(img => {
        if (!img.dataset.originalSrc) {
            img.dataset.originalSrc = img.src; // Store original image URL
            img.dataset.originalSrcSet = img.srcset; // Store original srcset
        }
        img.src = broccoliUrl;
        img.srcset = broccoliSrcSet;
    });
}

replaceImagesWithBroccoli();
