exports = function(payload){
const mongodb =  context.services.get("mongodb-atlas");
const mycolletion =  mongodb.db("BPMCards_V2").collection("teste");
return mycolletion.find({}).limit(10).toArray();
};