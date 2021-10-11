exports = function(idUser){
const mongodb =  context.services.get("mongodb-atlas");
const ColletionUserGroups =  mongodb.db("CustomUserDB").collection("UserGroups");
let UserGroup= ColletionUserGroups.find({"CustomUserData": new BSON.ObjectId(idUser)});
return UserGroup;
};