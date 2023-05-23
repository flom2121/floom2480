document.addEventListener("DOMContentLoaded", function(event) {
    var ratingStars = document.querySelectorAll('.star-rating .fa');
  
    function setRatingActive(rating) {
      var starRating = document.querySelector('.star-rating');
      var ratingValue = starRating.querySelector('.rating-value');
  
      ratingValue.value = rating.dataset.rating;
  
      ratingStars.forEach(function(star, index) {
        if (index < rating.dataset.rating) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
  
    ratingStars.forEach(function(star) {
      star.addEventListener('click', function() {
        setRatingActive(this);
      });
    });
  });
  