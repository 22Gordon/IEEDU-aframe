AFRAME.registerComponent('clickable', {
  schema: {
    info: { default: '' },
    title: { default: '' },
    description: { default: '' },
    artist: { default: '' },
    year: { default: '' },
  },
  init: function () {
    var el = this.el;
    var infoCard = document.getElementById('infoCard');
    var infoText = document.getElementById('infoText');
    var infoTitle = document.getElementById('infoTitle');
    var infoYearArtist = document.getElementById('infoYearArtist'); // New line
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

        // Extract details from the schema
        var title = el.getAttribute('clickable').title || 'Untitled';
        var description = el.getAttribute('clickable').description || 'No description available';
        var artist = el.getAttribute('clickable').artist || 'Unknown artist';
        var year = el.getAttribute('clickable').year || 'Year unknown';

        // Set the title text with a different font and larger size
        infoTitle.setAttribute('value', title);
        infoTitle.setAttribute('font', 'https://cdn.aframe.io/fonts/Exo2Bold.fnt');
        infoTitle.setAttribute('width', '1.2');
        infoTitle.setAttribute('scale', '1.5 1.5 1.5');

        // Set the year and artist text
        infoYearArtist.setAttribute('value', `Artist: ${artist}\nYear: ${year}`);

        // Adjust the size of the description text
        infoText.setAttribute('value', description);
        infoText.setAttribute('scale', '1.2 1.2 1.2');

        // Set the position attribute of infoCard based on the clicked object world position
        var position = el.object3D.position.clone();

        // Adjust position based on the specific model
        if (el.id === 'estrela') {
          position.x += 0.3;
        }
        if (el.id === 'monalisa') {
          position.y += 0.5;
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
