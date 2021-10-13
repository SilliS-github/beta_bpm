exports = function(EntityTypeID){
const mongodb =  context.services.get("mongodb-atlas");
const defaultData =  mongodb.db("SystemDataBase").collection("EntityType");
let data= defaultData.find({"_id": new BSON.ObjectId(EntityTypeID)});
return data;
};