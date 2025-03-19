Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    const resultArr = new Array(values.length);
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          resultArr[index] = res;
          total++;
          if (total === values.length) resolve(resultArr);
        })
        .catch((err) => {
          reject("Error");
        });
    });
  });
};

const p1 = Promise.resolve(5);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Done");
    resolve(1);
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third complete");
    resolve(2);
  }, 1000);
});

(async () => {
  try {
    const ans = await Promise.myAll([p1, p2, p3]);
    // const ans = await Promise.all([p1, p2, p3]);
    console.log(ans);
  } catch (err) {
    console.error(err);
  }
})();
