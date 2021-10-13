exports = function(EntityTypeID){
const mongodb =  context.services.get("mongodb-atlas");
const defaultData =  mongodb.db("SystemDataBase").collection("EntityType");
let data= defaultData.findOne({"_id": EntityTypeID});
return data;
};