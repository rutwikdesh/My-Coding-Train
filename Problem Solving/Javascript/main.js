const myRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500 + 500);
    console.log(delay);
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your fake data ${url}`);
      }
    }, delay);
  });
};

async function makeReq() {
  try {
    let data1 = await myRequest("www.gsgssdsfsdfs.comm");
    console.log(data1);
  } catch (e) {
    console.log("Error caught!", e);
  }
}

makeReq();
