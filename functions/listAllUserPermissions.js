exports = async function(arg){
    let user = context.user;
    let userGroup = await context.functions.execute("getUserGroupID");
    let userGroupID = userGroup.UserGroupID;
    const result = await context.functions.execute("GetUserGroup",userGroupID); 
    const PermissionsGroup = result.PermissionsGroup;
    let PermissionsIDArray=[];
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
    }
    
    return  PermissionsDataArray;
  
};