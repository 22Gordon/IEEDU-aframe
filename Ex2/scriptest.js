AFRAME.registerComponent('collision-handler', {
  init: function () {
    const camera = this.el;

    // Set the initial position as the last known valid position
    let lastValidPosition = camera.getAttribute('position');

    this.el.addEventListener('collide', (event) => {
      // If collision occurs, reset the camera position to the last known valid position
      camera.setAttribute('position', lastValidPosition);
    });

    // Listen for the camera's componentchanged event to update the lastValidPosition
    camera.addEventListener('componentchanged', (event) => {
      if (event.detail.name === 'position') {
        lastValidPosition = camera.getAttribute('position');
      }
    });
  }
});
