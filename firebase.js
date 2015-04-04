var Firebase = require("firebase");
var highScores = new Firebase("https://guess-a-number.firebaseio.com/highScores");

highScores.push({
    name: "Brendan",
    score: 123
});

// Attach an asynchronous callback to read the data at our posts reference
highScores.on("value", function(snapshot) {
  console.log(snapshot.val());
  process.exit(0);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


// firebase.set({
//   title: "Hello World!",
//   author: "Firebase",
//   location: {
//     city: "San Francisco",
//     state: "California",
//     zip: 94103
//   }
// }, function(error) {
//   if (error) {
//     console.log("Data could not be saved." + error);
//     process.exit(1);
//   } else {
//     console.log("Data saved successfully.");
//     process.exit(0);
//   }
// });
