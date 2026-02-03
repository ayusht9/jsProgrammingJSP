const obj = {
  name: "Ayush",
  address: {
    city: "Bangalore",
    pin: 560001
  }
};


function flatten(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? parentKey + "." + key : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flatten(obj[key], newKey, result);
    } 
    else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const flat = flatten(obj);
console.log(flat);