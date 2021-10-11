exports = function(arg){
let mongodb =  context.services.get("mongodb-atlas");
let mycolletion =  mongodb.db("CustomUserDB").collection("CustomUserData");
let user = context.user;
let id = user.id;
let result =  mycolletion.findOne({"userId":id},{"_id":0,"UserGroupID":1});
return result;
};