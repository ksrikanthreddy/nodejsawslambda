'use strict';


/**
 * validates a user
 * Validates a user against the system
 *
 * body UserModel User to validate (optional)
 * returns LoginResponseModel
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "username" : "User1",
  "token" : "sdhfhgdsjfgsddfgjsgfjads="
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

