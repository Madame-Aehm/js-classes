//*Declare a new promise using Promise Constructor
const promise = new Promise (function(resolve, reject) {
  console.log("JavaScript is reading this promise");
  const a = 'a';
  if (a === 'a') {
    resolve("resolved");
  }
  reject("rejected")
});



//*What is the promise?
// console.log("promise: ", promise);



//*Let's look at some in action:
// promise
// .then(function(resolve) {
//   console.log("catch resolve: ", resolve);
// })
// .catch(function(reject) { 
//   console.log("catch reject: ", reject);
// })
// .finally(function() {
//   console.log("promise has finished")
// });



//*If there is nothing to catch the rejected value, the script will collapse with a console message
// promise
// .then(res => console.log("catch res: ", res))
// .catch(rej => console.log("catch rej: ", rej));



//*Show pending...
// function pending () {
//   const result = promise.then(res => res).catch(rej => rej);
//   console.log("pending: ", result);
// }

// pending();



//*Enter async/await
// async function asyncFunction () {
//   const res = await promise;
//   console.log("asyncFunction resolved: ", res);
// }

// asyncFunction()
// .catch(rej => console.log("asyncFunction rejected: ", rej))



//*Enter try/catch block - compare speed of catches
// async function tryCatch () {
//   try {
//     const res = await promise;
//     console.log("tryCatch resolved: ", res);
//   } catch (rej) {
//     console.log("tryCatch rejected: ", rej)
//   }
// }

// tryCatch();



//*Promise all, allSettled, and race

// const p1 = new Promise((res, rej) => {
//   res("p1 resolved")
// });
// const p2 = new Promise((res, rej) => { 
//   setTimeout(() => res("p2 resolved"), 2000)
// });
// const p3 = new Promise((res, rej) => {
//   rej("p3 rejected");
// });


// const promiseAll = async () => {
//   try {
//     const all = await Promise.all([p1, p2]);
//     console.log("all: ", all);
//   } catch (err) {
//     console.log("all err: ", err)
//   }
// }

// promiseAll();


// const allSettled = async () => {
//   try {
//     const allSettled = await Promise.allSettled([p1, p2, p3]);
//     console.log("allSettled: ", allSettled);
//   } catch (err) {
//     console.log("allSettled err: ", err)
//   }
// }

// allSettled();


// const race = async () => {
//   try {
//     const race = await Promise.race([p2, p1, p3]);
//     console.log("race: ", race);
//   } catch (err) {
//     console.log("race err: ", err);
//   }
// }

// race();
