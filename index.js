function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value});
}

function deleteFromObjectByKey(object, key){
  const copy = Object.assign({}, obj);
  delete myObject[key];
  return myObject;
}

// const recipes = {};
const recipes = {"eggs": 1};




console.log(deleteFromObjectByKey(recipes, "eggs"));
console.log(recipes);
