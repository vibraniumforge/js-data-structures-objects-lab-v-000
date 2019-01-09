// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  console.log(key)
  const newObj={...driver};
  newObj["key"]=value;
  console.log(newObj);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  console.log(driver, key, value)
  driver[key]=value;
  return driver
  console.log(driver)
}

function deleteFromDriverByKey(driver, key) {
  let newDriver={...driver}
  delete newDriver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
}
