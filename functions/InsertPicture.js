exports = function(arg){
const mongodb =  context.services.get("mongodb-atlas");
const mycolletion =  mongodb.db("CustomUserDB").collection("CustomUserData");

const user = context.user;
const id = user.id;
return mycolletion.updateOne({"userId":id},{ $set: { Picture: arg }});

};
