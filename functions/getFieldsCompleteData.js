exports = async function(arg){
    let user = context.user;
    let fieldData = await context.functions.execute("getFieldsData",arg);
    let EntityTypeID=fieldData.EntityTypeID;
    let EntityTypeData = await context.functions.execute("GetEntityTypeData",EntityTypeID); 
    
    let result= {FieldData: fieldData, EntityTypeData : EntityTypeData}
    
   /* let PermissionsIDArray=[];
    let PermissionsDataArray=[];
    
    for (let i = 0; i < PermissionsGroup.length; i++) {
      let result2 = await context.functions.execute("ListPermissionsID",PermissionsGroup[i]);
      let Permissionscomb= result2.Permissions;
      for (let j = 0; j < Permissionscomb.length; j++) {
        if(!PermissionsIDArray.includes(Permissionscomb[j])){
          PermissionsIDArray.push(Permissionscomb[j]);
        }
      }
    }
    for (let i = 0; i < PermissionsIDArray.length; i++) {
       let result3 = await context.functions.execute("ListPermissionsData",PermissionsIDArray[i]);
       PermissionsDataArray.push(result3);
    }*/
    
    return  result;
  
};