exports = function(){
const mongodb =  context.services.get("mongodb-atlas");
const mycolletion =  mongodb.db("SystemDataBase").collection("EntityType");
const menuAllowEntityType= mycolletion.find({"DDObjectConfiguration.AllowMenu":"Yes"},{Name:1}).toArray();
return menuAllowEntityType;
};