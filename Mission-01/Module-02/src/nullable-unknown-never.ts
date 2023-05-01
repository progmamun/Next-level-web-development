// nullable type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing in search");
  } else {
    console.log("searching...");
  }
};
searchName("Al Mamun Khan");

// =======
// unknown type /////
// ===== kmh^-1 --> ms^1
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertSpeed = (speed * 1000) / 3600;
    console.log(`My Car Speed is ${convertSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" "); //['10' , 'kmh^-1']

    const convertSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My Car Speed is ${convertSpeed}`);
  } else {
    console.log("there is wrong type. try again!");
  }
};
getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");
getMyCarSpeed(true);

// ==========
// never type
function throwError(message: string): never {
  throw new Error(message);
}
throwError("!alart there is danger");
