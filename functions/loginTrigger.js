exports = function(authEvent) {
   
  const user = authEvent.user
  console.log("authEvent.user ", JSON.stringify(user)); 
  
  const mongodb = context.services.get("mongodb-atlas");
  const users = mongodb.db("CustomUserDB").collection("CustomUserData");
  
  var newUser = { userId: user.id, 
                  email: user.data.email };
  users.updateOne({userId: user.id}, { $set: newUser}, {upsert: true});
};