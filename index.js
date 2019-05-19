function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value});
}

function deleteFromObjectByKey(object, key){
  const myObject = Object.assign({}, object);
  delete myObject[key];
  return myObject;
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

// const recipes = {};
const recipes = {"eggs": 1};




console.log(destructivelyDeleteFromObjectByKey(recipes, "eggs"));
console.log(recipes);
