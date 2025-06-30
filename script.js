// Geolocation
window.onload = function () {
  const loc = document.getElementById('location');
  if (loc && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        loc.innerText = `Latitude: ${position.coords.latitude.toFixed(4)}, Longitude: ${position.coords.longitude.toFixed(4)}`;
      },
      () => {
        loc.innerText = 'Unable to retrieve your location.';
      }
    );
  }

  // Load feedback from localStorage
  const feedbackList = document.getElementById('feedbackList');
  if (feedbackList) {
    const feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];
    feedbackData.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.name}: ${entry.comment}`;
      feedbackList.appendChild(li);
    });
  }
};

// Save feedback
const form = document.getElementById('feedbackForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const feedback = JSON.parse(localStorage.getItem('feedback')) || [];
    feedback.push({ name, comment });
    localStorage.setItem('feedback', JSON.stringify(feedback));
    location.reload(); // Reload to show the new feedback
  });
}
