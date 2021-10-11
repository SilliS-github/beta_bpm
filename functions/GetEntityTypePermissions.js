exports = function(idEntityType){
const mongodb =  context.services.get("mongodb-atlas");
const ColletionEntityType=  mongodb.db("SystemDataBase").collection("EntityType");
let Permissions= ColletionEntityType.find({"_id": idEntityType},{"BaseGroupPermission":1,"_id":1});
return Permissions;
};