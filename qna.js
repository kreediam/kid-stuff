var readline = require('readline'),
  q = require('q');

module.exports = function() {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return {
    question: function(message){
      var deferred = q.defer();
      rl.question(message, function(answer){
        deferred.resolve(answer);
      });
      return deferred.promise;
    },
    close: function(){
      rl.close();
    }
  };
};
