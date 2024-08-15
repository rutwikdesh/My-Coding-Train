const a = 1;
const myPromise = new Promise((resolve, reject) => {
  if (a == 1) {
    resolve({
      data: {
        myData: "This is the final data",
      },
    });
  } else {
    reject("Error");
  }
});

myPromise
  .then((res) => {
    return res.data;
  })
  .then((res) => {
    console.log(res.myData);
  })
  .catch((error) => {
    console.log(error);
  });

// -------------------------------------------------------------------------------------------------

// Promise.all()

const x = 1,
  y = 2;
const myPromise1 = new Promise((resolve, reject) => {
  if (x == 1) {
    resolve({
      data: {
        myData: "This is the data of Promise 1",
      },
    });
  } else {
    reject("Error");
  }
});

const myPromise2 = new Promise((resolve, reject) => {
  if (y == 2) {
    resolve({
      data: {
        myData: "This is the data of Promise 2",
      },
    });
  } else {
    reject("Error");
  }
});

Promise.all([myPromise1, myPromise2]).then(([p1, p2]) => {
  console.log(p1.data.myData);
  console.log(p2.data.myData);
});
