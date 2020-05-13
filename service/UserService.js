'use strict';


/**
 * adds a user item
 * Adds a user to the system
 *
 * body UserModel User to add (optional)
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all users
 * Get all users available in the system
 *
 * returns List
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "createdDate" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "username" : "User1"
}, {
  "password" : "password",
  "createdDate" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "username" : "User1"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

