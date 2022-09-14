
/**
 * Finds the objects that match the given search criteria.
 * - Time: O(n * m) n = collection.length, m = num of keys in criteria.
 * - Space: O(n) linear. All objects in collection could be a match.
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */


 function findObjects1(criteria, collection) {
    // let found = false
    // let isFound = true;
    let rs =[]
    for( let i = 0; i < collection.length; i++ ){
      let isFound = true;
      obj = collection[i]
      for (let key in criteria){
        if (criteria[key] !== obj[key]){
          isFound=false
        } 
      }
      if(isFound === true){
        rs.push(obj)
      }
    }
    return rs;
  }
  
  
  function findObjects2(criteria, collection) {
    const foundDocuments = [];
  
    for (const item of collection) {
      let isMatch = true;
  
      for (const searchKey in criteria) {
        const searchVal = criteria[searchKey];
  
        if (
          item.hasOwnProperty(searchKey) === false ||
          item[searchKey] !== searchVal
        ) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        foundDocuments.push(item);
      }
    }
    return foundDocuments;
  }
  
  const functionalFindObjects = (criteria, collection) =>
    collection.filter((item) =>
      Object.keys(criteria).every((key) => item[key] === criteria[key])
    );
  
  // .keys --> ["firstName", "age"]
  
  /**
   * Finds the specified obj by id and updates it with the given key value pairs.
   * - Time: O(n + m) linear, n = collection.length. m = updatedVals num of keys.
   *    Worst case is looping through the full collection because no id matched.
   *    updatedVals is only looped over one time despite being a nested loop
   *    since it is within a condition, hence we use addition instead of
   *    multiplication in the Big O notation.
   * - Space: O(1) constant.
   * @param {number} id
   * @param {Object} updatedVals Key value pairs used to update the found obj.
   * @param {Array<Object>} collection
   * @returns {?Object} The object that was updated or null if no object found.
   */
  function findByIdAndUpdate(id, updatedVals, collection) {
    for (const doc of collection) {
      if (doc.id === id) {
        for (const key in updatedVals) {
          // only update keys that exist on the found object
          if (doc.hasOwnProperty(key)) {
            const newVal = updatedVals[key];
  
            doc[key] = newVal;
          }
        }
        return doc;
      }
    }
    // above return didn't run so nothing was found
    return null;
  }
  
  
  
  
  function findByIdAndUpdate(id, updatedVals, collection) {
    for (const eachObj of collection) {
      if (eachObj["id"] === id) {
        for (const eachKey in updatedVals) {
          if (eachObj.hasOwnProperty(eachKey)) {
            eachObj[eachKey] = updatedVals[eachKey]
          }
        }
      }
    }
    return collection
  }
  