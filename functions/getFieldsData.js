exports = function(arg){
 const mongodb =  context.services.get("mongodb-atlas");
 const defaultData =  mongodb.db("SystemDataBase").collection("Entity");
 let data = defaultData.findOne({"_id": new BSON.ObjectId(arg)});
 return data;
};