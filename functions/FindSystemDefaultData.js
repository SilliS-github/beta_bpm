exports = function(arg){
 const mongodb =  context.services.get("mongodb-atlas");
 const defaultData =  mongodb.db("SystemDataBase").collection("Entity");
 let data = defaultData.find({"EntityTypeID": new BSON.ObjectId("614e19142c8df65afb20616a")});
 return data;
};