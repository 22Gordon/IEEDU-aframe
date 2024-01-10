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

        // Set the position attribute of infoCard based on the clicked object's world position
        var position = el.object3D.position.clone();
        console.log('Clicked object position:', position);
        infoCard.setAttribute('position', position);
        infoCard.object3D.position.y += 1; 
        

        console.log('InfoCard position after adjustment:', infoCard.getAttribute('position'));

        infoCard.setAttribute('visible', true);
      }
    });

    closeButton.addEventListener('click', function () {
      console.log('Close button clicked');
      infoCard.setAttribute('visible', false);
    });
  },
});


  AFRAME.registerComponent('scene-listener', {
    init: function () {
      var scene = this.el;

      scene.addEventListener('click', function (event) {
        var infoCard = document.getElementById('infoCard');

        if (infoCard.getAttribute('visible')) {
          infoCard.setAttribute('visible', false);
        }
      });
    },
  });