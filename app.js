click("signin-button" , logInUser);

var user1 = {
      id:1,
      name:"Shreya",
      username:"ShreyaSagar",
      sayHello: function() {
        console.log("Hello  " + this.name);
      }
};

var user2 = {
      id:2,
      name:"Jinal",
      username:"JinalPatel",
      sayHello: function() {
        console.log("Hello  " + this.name);
      }
};

 var users = [
   user1 ,
   user2
 ];

for (var i = 0; i < users.length; i++) {
  console.log(users[i].name);
  var user = users[i];
  console.log(user.id);
}

var message = new Object();
message.text = "Hello";
console.log(message.text);
