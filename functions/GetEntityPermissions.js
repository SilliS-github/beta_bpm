exports = function(arg){
 const mongodb =  context.services.get("mongodb-atlas");
 const ColletionUserEntity =  mongodb.db("SystemDataBase").collection("Entity");
 let Permissions = ColletionUserEntity.find({"_id": arg});
 return Permissions;
};