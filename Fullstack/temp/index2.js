let arr = [
  {
    brand: "Parle",
    products: [
      {
        brand: "Parle Agro",
        products: [
          {
            brand: "Frooti",
            products: [],
          },
          {
            brand: "Bailey",
            products: [],
          },
        ],
      },
    ],
  },
  {
    brand: "Pepsico",
    products: [
      {
        brand: "VB",
        products: [
          {
            brand: "Lays",
            products: [],
          },
          {
            brand: "Kurkure",
            products: [
              {
                brand: "Mad Angles",
                products: [],
              },
            ],
          },
        ],
      },
      {
        brand: "Pepsi",
        products: [],
      },
    ],
  },
  {
    brand: "Cadbury",
    products: [],
  },
];

// let st = [];

const printBrand = (arr, parent) => {
  const orgPar = parent;
  for (let i = 0; i < arr.length; i++) {
    if (parent === "") {
      console.log("None : " + arr[i]["brand"]);
    } else {
      console.log(`${parent} : ${arr[i]["brand"]}`);
    }
    parent = arr[i]["brand"];
    if (arr[i]["products"]?.length > 0) {
      printBrand(arr[i]["products"], parent);
    }
    parent = orgPar;
  }
};

printBrand(arr, "");
