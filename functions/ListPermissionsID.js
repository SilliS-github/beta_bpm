exports = async function(idGroupPermission){
const mongodb =  context.services.get("mongodb-atlas");
const ColletionPermissionGroups =  mongodb.db("CustomUserDB").collection("PermissionsGroup");
let PermissionsG = await ColletionPermissionGroups.findOne({"_id":new BSON.ObjectId(idGroupPermission)},{"Permissions":1,"_id":0});
return PermissionsG;
};