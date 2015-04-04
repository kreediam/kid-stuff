var _ = require('lodash'),
 Firebase = require("firebase");

function newPerson(game, maxScores) {
  var scores = new Firebase("https://guess-a-number.firebaseio.com/"+game+"/scores");
  
  return {
    add: function add(obj) {
      obj.date = new Date().getTime();
      highScores.push(obj);
    },
    list: function list() {
      setTimeout(function () {
        console.log(message);
      }, 1000);
    }

  };
}

module.exports = newPerson;
