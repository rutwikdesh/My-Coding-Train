document
  .getElementById("fileInput")
  .addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];

  if (!file) {
    console.error("No file selected.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const text = e.target.result;
    // console.log("Text = " + text.split("\n")[0]);
    let a = text.split("\n")[0];
    let b = a.split(",");
    // console.log(b);
    const rows = text.split("\n").map((row) =>
      row
        .replace('/"/g', "")
        .split(",")
        .map((field) => field.trim())
    );

    console.log(rows); // Output the array
  };

  reader.onerror = function (e) {
    console.error("Error reading file:", e.target.error);
  };

  reader.readAsText(file);
}

// const reader = new FileReader();

// reader.onload = function (e) {
//   const text = e.target.result;
//   const row =
// }
