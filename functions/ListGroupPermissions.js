exports = function(arg){
const mongodb =  context.services.get("mongodb-atlas");
const ColletionPermissionGroups =  mongodb.db("CustomUserDB").collection("PermissionsGroup");
let PermissionGroups= ColletionPermissionGroups.find({},{"_id":1,"Title":1});
return PermissionGroups;
};