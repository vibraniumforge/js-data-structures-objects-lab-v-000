// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj={...driver};
  newObj[key]=value;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]=value;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver={...driver}
  delete newDriver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
}
