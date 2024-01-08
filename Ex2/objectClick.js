AFRAME.registerComponent('clickable', {
    schema: {
      info: { default: '' },
    },
    init: function () {
      var el = this.el;
      var infoCard = document.getElementById('infoCard');
      var infoText = document.getElementById('infoText');
      var closeButton = document.getElementById('closeButton');

      el.addEventListener('mouseenter', function () {
        el.setAttribute('material', 'color', '#FF5555');
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('material', 'color', el.getAttribute('color'));
      });

      el.addEventListener('click', function () {
        if (el.getAttribute('clickable').info) {
          infoText.setAttribute('value', el.getAttribute('clickable').info);
          infoCard.setAttribute('visible', true);
        }
      });

      closeButton.addEventListener('click', function () {
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