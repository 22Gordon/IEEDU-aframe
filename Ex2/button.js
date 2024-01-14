AFRAME.registerComponent('raycastable', {
  init: function () {
    this.el.addEventListener('mousedown', this.handleMouseDown.bind(this));
  },
  handleMouseDown: function () {
    // Check the entity's class and perform different actions
    if (this.el.classList.contains('music-button')) {
      // Handle music toggle logic directly within raycastable
      var musicEntity = document.getElementById('backgroundMusic');
      if (musicEntity.components.sound.isPlaying) {
        musicEntity.components.sound.pauseSound();
      } else {
        musicEntity.components.sound.playSound();
      }
    } else {
      // Default behavior, e.g., navigate to "museum.html"
      window.location.href = "museum.html";
    }
  }
});
