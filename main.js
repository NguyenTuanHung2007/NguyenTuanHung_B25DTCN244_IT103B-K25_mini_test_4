let products = [
  {
    id: "P01",
    name: "Laptop MacBook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không dây Logitech",
    price: 45,
    category: "Phụ kiện",
    inStock: true,
  },
  {
    id: "P03",
    name: "Bàn phím cơ Keychron",
    price: 95,
    category: "Phụ kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Man hinh Dell UltraSharp",
    price: 450,
    category: "Man hinh",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phụ kiện",
    inStock: true,
  },
];
// Case 1
let findProductId = (obj) => {
  const findResult = obj.filter((s) => s.id === "P03");
  if (findResult === 0) {
    console.log("Không tìm thấy sản phẩm");
  } else {
    console.log(findResult);
  }
};

findProductId(products);

// Case 2
let validatePrice = (obj) => {
  const priceIsValidate = obj.every((s) => s.price > 0);
  if (priceIsValidate) {
    console.log("Dữ liệu bảng giá hợp lệ");
  } else {
    console.log("Phát hiện sản phẩm chưa cập nhật giá");
  }
};

validatePrice(products);

// Case 3
let formattedDisplay = (obj) => {
  const catalogDisplay = [];
  obj.forEach((s) => {
    let line = "";
    line += `${s.name} - Giá: ${s.price} | Trạng thái: ${s.inStock ? "Còn hàng" : "Hết hàng"}`;
    catalogDisplay.push(line);
  });
  console.log(catalogDisplay);
};

formattedDisplay(products);
