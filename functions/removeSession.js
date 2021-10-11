exports = async function(arg){
  const mongodb =  context.services.get("mongodb-atlas");
  const Colletion =  mongodb.db("SystemDataBase").collection("sessionsactiveds");
  let removeSession = await Colletion.deleteMany({userID:arg});
  return {'answer': true};
};