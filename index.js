function updateDriverWithKeyAndValue(driverObj,key,value){
  return Object.assign({}, driverObj, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driverObj,key,value){
  driverObj[key] = value;
 
  return obj;
};

function deleteFromDriverByKey(driverObj,key){
  delete driverObj.key;
  
}



const driver = {};