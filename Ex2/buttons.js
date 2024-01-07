const COLORS = [
    '#F85333',
    '#48BAEA',
    '#e0cb49',
    '#33F853'
  ];
  
  // Set button colors for dynamic list of buttons.
  AFRAME.registerComponent('button-colors', {
    init: function () {
      this.el.addEventListener('child-attached', () => {
        setTimeout(this.setColors.bind(this));
      });
    },
    
    setColors: function () {
      // Skip template tag.
      for (let i = 1; i < this.el.children.length + 1; i++) {
        if (!this.el.children[i]) { continue; }
        this.el.children[i].setAttribute('text', 'color', COLORS[i - 1]);  
      }    
    }
  });
  
  // Add the following component to handle the "Start" button action
  AFRAME.registerComponent('start-button', {
    init: function () {
      this.el.addEventListener('click', () => {
        window.location.href = 'museum.html';  // Redirect to the museum scene
      });
    }
  });