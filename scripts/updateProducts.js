const fs = require("fs");
const XLSX = require("xlsx");

// ✅ path change (IMPORTANT)
const products = JSON.parse(
  fs.readFileSync("./data/handicraft.json", "utf-8")
);

// ✅ Excel file (root मध्ये ठेव)
const workbook = XLSX.readFile("final_products.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// 👉 mapping
const map = {};

excelData.forEach((row) => {
  const name = (row[0] || "").toString().trim();

  if (!name) return;

  map[name.toLowerCase()] = {
    hsCode: row[3] ? row[3].toString().trim() : "",
    minPrice: row[4] ? Number(row[4]) : null,
    maxPrice: row[5] ? Number(row[5]) : null,
  };
});

// 👉 update
const updatedProducts = products.map((item) => {
  const key = item.name.toLowerCase().trim();

  const match = map[key];

  if (match) {
    return {
      ...item,
      hsCode: match.hsCode || item.hsCode,
      minPrice: match.minPrice ?? item.minPrice,
      maxPrice: match.maxPrice ?? item.maxPrice,
    };
  }

  return item;
});

// ✅ overwrite same file (IMPORTANT)
fs.writeFileSync(
  "./data/handicraft.json",
  JSON.stringify(updatedProducts, null, 2)
);

console.log("✅ Handicraft data updated successfully!");