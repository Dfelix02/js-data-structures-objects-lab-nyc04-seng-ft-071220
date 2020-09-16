function updateDriverWithKeyAndValue(driverObj,key,value){
  return Object.assign({}, driverObj, { [key]: value });
};


const driver = {};