var ENVIRONMENTS = [
  'Contact',
  'Egypt',
  'Checkerboard',
  'Forest',
  'Goaland',
  'Yavapai',
  'Goldmine',
  'Threetowers',
  'Poison',
  'Arches',
  'Tron',
  'Japan',
  'Dream',
  'Volcano',
  'Starry', 
  'Osiris'  
];

// aframe-state-component definition.
AFRAME.registerState({
  // Initial state of our application. We have the current environment and the active menu.
  initialState: {
    environment: 'osiris',
    environmentOptions: [],
    environmentNumPages: Math.floor(ENVIRONMENTS.length / 4),
    environmentPage: 0,
    environmentSeed: 123,
    menu: 'main',
  },

  // State changes are done via events and are handled here.
  handlers: {
    // This is emitted by the environment-changer component.
    // The environment to change to is passed by the event detail.
    environmentSet: function (state, environment) {
      state.environment = environment;

      // Change back to main menu after environment set just back changing this state variable!
      state.menu = 'main';
    },

    menuBack: function (state) {
     state.menu = 'main';  
    },
  },

  computeState: function (state) {
    state.environmentOptions.length = 0;
    for (let i = state.environmentPage * 4; i < state.environmentPage * 4 + 4; i++) {
      state.environmentOptions.push(ENVIRONMENTS[i]);
    }
  }
});
