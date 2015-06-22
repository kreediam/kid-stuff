var _ = require('lodash'),
 Firebase = require("firebase");

function newPerson(game, maxScores) {
  var scores = new Firebase("https://guess-a-number.firebaseio.com/"+game+"/scores");

  return {
    add: function add(obj) {
      obj.date = new Date().getTime();
      scores.push(obj);
    },
    list: function list() {
      scores.on("value", function(snapshot) {
        console.log(snapshot.val());

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    }
  };
}

module.exports = newPerson;
