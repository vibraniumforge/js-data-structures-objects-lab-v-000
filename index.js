// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  console.log(driver)
  const newObj={...driver};
  newObj.key=value;
  console.log(newDriver)
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
