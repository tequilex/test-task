import { encoded, translations } from "./data.js";

function decoded(encoded, translations) {
  const exceptions = ["groupId", "service", "formatSize", "ca"];
  const uniqId = new Set()
  const newArray = encoded.map((obj) => {
    const newObj = {};
    for (let key in obj) {
      if (obj[key] !== null && !exceptions.includes(key) && key.endsWith("Id")) {
        newObj[key] = translations[obj[key]];
        uniqId.add(obj[key])
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  })


  return {newArray, uniqId: Array.from(uniqId)};
}

const {newArray, uniqId} = decoded(encoded, translations)

console.log("decoded:", newArray)
console.log("uniqueId:", uniqId)