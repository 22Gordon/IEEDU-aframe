AFRAME.registerComponent('clickable', {
  schema: {
    info: { default: '' },
  },
  init: function () {
    var el = this.el;
    var infoCard = document.getElementById('infoCard');
    var infoText = document.getElementById('infoText');
    var closeButton = document.getElementById('closeButton');

    console.log('Clickable component initialized for', el);

    el.addEventListener('mouseenter', function () {
      console.log('Mouse entered', el);
      el.setAttribute('material', 'color', '#FF5555');
    });

    el.addEventListener('mouseleave', function () {
      console.log('Mouse left', el);
      el.setAttribute('material', 'color', el.getAttribute('color'));
    });

    el.addEventListener('click', function () {
      console.log('Clicked', el);
      if (el.getAttribute('clickable').info) {
        console.log('Info attribute:', el.getAttribute('clickable').info);
    
        infoText.setAttribute('value', el.getAttribute('clickable').info);
    
        // Set the position attribute of infoCard based on the clicked object world position
        var position = el.object3D.position.clone();
    
        // Adjust position based on the specific model
        if (el.id === 'estrela') {
          position.x += 0.3;
        }
        if (el.id === 'monalisa') {
          position.y += 1; 
        }
        infoCard.setAttribute('position', position);
    
        // Set the rotation of infoCard to match the clicked object's rotation
        infoCard.object3D.rotation.copy(el.object3D.rotation);
    
        // Calculate the distance between the camera and the clicked object
        var camera = document.querySelector('[camera]').object3D;
        var distance = camera.position.distanceTo(el.object3D.position);
    
        // Adjust the visibility based on distance
        var visibilityThreshold = 10;
        infoCard.setAttribute('visible', distance < visibilityThreshold);
      }
    });    

    closeButton.addEventListener('click', function () {
      console.log('Close button clicked');
      infoCard.setAttribute('visible', false);
    });
  },
});
