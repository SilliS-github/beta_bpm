exports = function(arg){
 const mongodb =  context.services.get("mongodb-atlas");
 const defaultData =  mongodb.db("CustomUserDB").collection("CustomUserData");
 //let dados = defaultData.find({"userId": arg},{"_id":0,  "UserProfileSettings.UserProfile":1}).toArray();
 let dados = defaultData.aggregate([
   { $match: { "userId": arg } },
    {
        $project:{
            FieldsConfiguration: "$UserProfileSettings.UserProfile",
            "_id":0,
        }
    }
]);
 return dados;
};