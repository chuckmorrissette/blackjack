ktExport('player.js', () => {
  var playerCounter = 1;

  class Player {
    constructor() {
      this.id = playerCounter++;
    }
    // Here we will define a player

    // needs a value to assign cards to

    // needs a bankroll

    // needs the ability to

    // Having a structure like this will help with game rules and permissions (i.e. turns)
    /* @whitley, define the structure of this class and its data.
       Recommendations: Need a constructor
       A name is needed, age might be nice
       Color might be cool
       A player id might be a good thing to be able to match cards to players
    */
  }

  return {
    Player
  };
});
