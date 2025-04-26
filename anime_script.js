// Image filter function
function filterImages(category) {
    const boxes = document.querySelectorAll('.image-box'); // Select all image boxes
    
    boxes.forEach(box => {
      if (category === 'all') {
        // Show all images when "All" category is selected
        box.classList.remove('hidden');
      } else {
        // Toggle visibility based on category
        if (box.classList.contains(category)) {
          box.classList.remove('hidden'); // Show the image if it belongs to the selected category
        } else {
          box.classList.add('hidden'); // Hide the image if it does not belong to the selected category
        }
      }
    });
  }
  
  // Add event listeners after DOM is ready
  window.onload = function () {
    const images = document.querySelectorAll('.gallery img'); // Get all images in the gallery
  
    // Loop through each image and add an event listener
    images.forEach(function (img) {
      img.onclick = function () {
        // Open image in a new tab with full resolution using window.open
        window.open(this.src, '_blank'); // Open the image URL in a new tab
      };
    });
  };
  