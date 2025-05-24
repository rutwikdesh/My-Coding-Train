const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processArr = async function (arr) {
  const resultArr = await Promise.allSettled(
    arr.map((ele) => processingLogic(ele))
  );
  console.log("Completed Processing of All elements");
  console.log(resultArr);
};

const processingLogic = async function (ele) {
  console.log(`Processing element ${ele}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processed element ${ele}`);
      resolve(ele);
    }, [2000 * Math.random()]);
  });
};

processArr(arr);
