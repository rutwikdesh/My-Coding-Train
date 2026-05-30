function dbQuery(myVar) {
  return new Promise((resolve, reject) => {
    if (myVar % 2 === 0) {
      setTimeout(() => {
        resolve(myVar * 10);
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(myVar * 9);
      }, 3000);
    }
  });
}

async function someDatabaseOperation(myVar) {
  return new Promise((resolve, reject) => {
    if (myVar % 2 === 0) {
      setTimeout(() => {
        resolve(myVar * 10);
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(myVar * 9);
      }, 3000);
    }
  });
}

async function main() {
  try {
    // const operationResults = await Promise.all([
    //   someDatabaseOperation(2),
    //   someDatabaseOperation(3),
    //   someDatabaseOperation(4),
    //   someDatabaseOperation(5),
    // ]);

    const op1 = someDatabaseOperation(2);
    const op2 = someDatabaseOperation(3);
    const op3 = Promise.reject({ message: "Something went wrong" });
    const op4 = someDatabaseOperation(5);

    // throw new Error("Heyyy, I got errored out");

    op1.then((res) => console.log(res)).catch((e) => console.log("error"));

    const results = await Promise.allSettled([op1, op2, op3, op4]);
    console.log(results);

    // const operationResults = [];
    // operationResults.push(await someDatabaseOperation(2));
    // console.log("DB Op Results: ", operationResults);
    // operationResults.push(await someDatabaseOperation(32));
    // console.log("DB Op Results: ", operationResults);
    // operationResults.push(await someDatabaseOperation(4));
    // console.log("DB Op Results: ", operationResults);
    // operationResults.push(await someDatabaseOperation(52));

    // console.log("DB Op Results: ", operationResults);
  } catch (e) {
    console.log("Error fetching DB Response: ", e.message);
  }
}

main();
