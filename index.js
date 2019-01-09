// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj={...driver};
  newObj[key]=value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver={...driver}
  console.log(driver);
  console.log(key);
  console.log(newDriver);
  delete newDriver[key];
  console.log(newDriver);
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
}
