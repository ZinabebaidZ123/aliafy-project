document.addEventListener('DOMContentLoaded', function() {
  var videoModal = document.getElementById('videoModal');
  var video = document.getElementById('myVideo');

  // Show the modal layer
  videoModal.classList.remove('hidden');

  // Play the video
  video.play();

  // Set a timeout to hide the modal and pause the video after its duration
  setTimeout(function() {
    // Pause the video
    video.pause();

    // Hide the modal layer
    videoModal.classList.add('hidden');
  }, video.duration * 1000); // Convert duration to milliseconds
});