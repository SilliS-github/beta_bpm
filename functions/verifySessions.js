exports = async function(idPermission){
const mongodb =  context.services.get("mongodb-atlas");
const Colletion =  mongodb.db("SystemDataBase").collection("sessionsactiveds");
let activedSessions = await Colletion.find({},{userID:1,expires:1,_id:0}).toArray();
let sessionToRemove=[];
let sessionToStay=[];
for (let i = 0; i < activedSessions.length; i++) {
      let date = new Date().getTime();
      let datenow = new Date(date).toUTCString();
      let dateSession = activedSessions[i].expires;
      let dateS = Date.parse(dateSession);
      let dateN = Date.parse(datenow);
       if (dateN > dateS) {
         console.log('expirated');
         sessionToRemove.push( activedSessions[i].userID);
       }else{
          console.log('actived');
         sessionToStay.push( activedSessions[i].userID);
       }
    }
    for (let j = 0; j < sessionToRemove.length; j++) {
       let remove = await context.functions.execute("removeSession",sessionToRemove[j]);
    }
return {'answer':true};
};