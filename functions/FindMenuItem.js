exports = async function(arg){
  const mongodb =  context.services.get("mongodb-atlas");
  const mycolletion =  mongodb.db("SystemDataBase").collection("EntityType");
  const menuAllowEntityType= await mycolletion.find({"DDObjectConfiguration.AllowMenu":"Yes"}).sort( { "DDObjectConfiguration.MenuOrder": 1 } ).toArray();
  let MenusItemArrays=[];
 for (let i = 0; i < menuAllowEntityType.length; i++) {
  const mycolletionEntity =  mongodb.db("SystemDataBase").collection("Entity");
   let queryMenu =  await mycolletionEntity.find({"EntityTypeID":menuAllowEntityType[i]._id}).toArray();
    MenusItemArrays.push(queryMenu);
 }
 
 return MenusItemArrays;
};
