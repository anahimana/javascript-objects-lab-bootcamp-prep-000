function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value});
}

function deleteFromObjectByKey(object, key){
  let newObject = delete object[key];
  return newObject;
}

// const recipes = {};
const recipes = {"eggs": 1};




console.log(deleteFromObjectByKey(recipes, "eggs"));
console.log(recipes);
