exports = async function(idPermission){
const mongodb =  context.services.get("mongodb-atlas");
const ColletionPermission =  mongodb.db("CustomUserDB").collection("Permissions");
let PermissionsData = await ColletionPermission.findOne({"_id":new BSON.ObjectId(idPermission)});
return PermissionsData;
};