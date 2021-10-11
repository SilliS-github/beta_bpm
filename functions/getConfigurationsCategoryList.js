exports = function(arg){
 const mongodb =  context.services.get("mongodb-atlas");
 const defaultData =  mongodb.db("SystemDataBase").collection("Entity");
 let data = defaultData.find({"EntityTypeID": new BSON.ObjectId("6155c5c92c8df65afb206209")});
 return data;
};