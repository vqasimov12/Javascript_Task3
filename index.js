const products = [
  {
    title: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    stock: 150,
    image:
      "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FRapoo-1620--Optical-Wireless-Mouse_1JuX7_.webp&w=640&q=100",
  },
  {
    title: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    stock: 85,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
  },
  {
    title: "Office Desk Chair",
    category: "Furniture",
    price: 119.99,
    stock: 0,
    image:
      "https://m.media-amazon.com/images/I/61VqPRU2-UL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 19.99,
    stock: 0,
    image:
      "https://www.prodigi.com/download/product-range/stainless-steel-water-bottles/Prodig-stainless-steel-bottle-510ml-blank.jpg",
  },
  {
    title: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 75,
    image:
      "https://www.arizon.az/storage/photos/M%C6%8FHSULLAR2/yogamat/yogamat/03.jpg",
  },
  {
    title: "Gaming Keyboard",
    category: "Electronics",
    price: 79.99,
    stock: 60,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMxMO4WXhpVDBzU_bpTgF_8mb1md8uk03dg&s",
  },
  {
    title: "LED Desk Lamp",
    category: "Home & Kitchen",
    price: 39.99,
    stock: 0,
    image:
      "https://evimizstore.az/storage/7968/conversions/203890642a15b2f86e075e22b39bef68-md.jpg",
  },
  {
    title: "Electric Kettle",
    category: "Home & Kitchen",
    price: 34.99,
    stock: 90,
    image:
      "https://i5.walmartimages.com/seo/Variable-Temperature-Electric-Kettle-1200W-Tea-8-Big-Cups-2-0L-Glass-Kettle-4Hrs-Keep-Warm-Function-Boil-Dry-Protection_f1a91c3f-3612-474d-83c5-2eb06fbf7e9f.048e12398c63357854fa090a347a7ef8.jpeg",
  },
  {
    title: "Fitness Tracker",
    category: "Wearables",
    price: 49.99,
    stock: 40,
    image:
      "https://pyxis.nymag.com/v1/imgs/921/c0c/d56eeaa21522d8918ee1cedde9dea91293.rsquare.w600.jpg",
  },
  {
    title: "Backpack",
    category: "Accessories",
    price: 39.99,
    stock: 10,
    image:
      "https://www.antler.com/cdn/shop/files/01-Antler-Chelsea-Backpack-Black-Angle.jpg?v=1714740406",
  },
];

const basket = []
const ul = document.createElement("ul");
const ul1 = document.createElement("ul");

ul.style.display = "grid";
ul.style.alignItems = "center";
ul.style.gridTemplateColumns = "repeat(4, 1fr)";
ul.style.gridAutoRows = "auto";
ul.style.justifyContent = "center";
ul.style.width = "90%";
ul.style.height = "fit-content";
ul.style.gap = "20px";

ul1.style.display = "grid";
ul1.style.alignItems = "center";
ul1.style.gridTemplateColumns = "repeat(4, 1fr)";
ul1.style.gridAutoRows = "auto";
ul1.style.justifyContent = "center";
ul1.style.width = "90%";
ul1.style.height = "fit-content";
ul1.style.gap = "20px";

for (let i = 0; i < products.length; i++) {
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.flexDirection = "column";
  li.style.width = "100%";
  li.style.height = "400px";
  li.style.padding = "20px";
  li.style.justifyContent = "center";
  li.style.gap = "20px";

  li.style.border = "1px solid lightgray";
  const img = document.createElement("img");

  img.style.marginLeft = "70px";
  img.style.marginTop = "-20px";
  img.style.height = "120px";
  img.style.width = "180px";
  img.src = products[i].image;

  const h3 = document.createElement("h3");
  h3.style.marginLeft = "30px";
  h3.style.marginTop = "-10px";
  h3.innerText = `Title: ${products[i].title}`;

  const h4 = document.createElement("h3");
  h4.style.marginLeft = "30px";
  h4.style.marginTop = "-10px";
  h4.innerText = `Category: ${products[i].category}`;

  const price = document.createElement("h3");
  price.style.marginLeft = "30px";
  price.innerText = `Price: ${products[i].price}$`;

  const btn = document.createElement("button");
  btn.innerText = "Add to cart";
  btn.style.backgroundColor = "#060405";
  btn.style.height = "50px";
  btn.style.width = "150px";
  btn.style.color = "white";
  btn.style.marginLeft = "70px";
  btn.style.borderRadius = "12px";
  btn.style.fontSize = "18px";
  btn.style.fontWeight = "semi-bold";

  btn.style.transition = "background-color 0.5s ease";
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "white";
    btn.style.color = "#060405";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#060405";
    btn.style.color = "white";
  });

  btn.addEventListener("click", () => {
    if (products[i].stock === 0) console.log("This product is out of stock");
    else {
      basket.push(products[i]);
      updateBasket()
      products[i].stock--
    }
  });

  li.appendChild(img);
  li.appendChild(price);
  li.appendChild(h3);
  li.appendChild(h4);
  li.appendChild(btn);
  ul.appendChild(li);
}

function updateBasket(){

  ul1.innerHTML=""
  for (let i = 0; i < basket.length; i++) {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.flexDirection = "column";
    li.style.width = "100%";
    li.style.height = "400px";
    li.style.padding = "20px";
    li.style.justifyContent = "center";
    li.style.gap = "20px";

    li.style.border = "1px solid lightgray";
    const img = document.createElement("img");

    img.style.marginLeft = "70px";
    img.style.marginTop = "-20px";
    img.style.height = "120px";
    img.style.width = "180px";
    img.src = basket[i].image;

    const h3 = document.createElement("h3");
    h3.style.marginLeft = "30px";
    h3.style.marginTop = "-10px";
    h3.innerText = `Title: ${basket[i].title}`;

    const h4 = document.createElement("h3");
    h4.style.marginLeft = "30px";
    h4.style.marginTop = "-10px";
    h4.innerText = `Category: ${basket[i].category}`;

    const price = document.createElement("h3");
    price.style.marginLeft = "30px";
    price.innerText = `Price: ${basket[i].price}$`;

    const btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.style.backgroundColor = "#060405";
    btn.style.height = "50px";
    btn.style.width = "150px";
    btn.style.color = "white";
    btn.style.marginLeft = "70px";
    btn.style.borderRadius = "12px";
    btn.style.fontSize = "18px";
    btn.style.fontWeight = "semi-bold";

    btn.style.transition = "background-color 0.5s ease";
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "white";
      btn.style.color = "#060405";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "#060405";
      btn.style.color = "white";
    });


    btn.addEventListener("click",()=>{

    })
    li.appendChild(img);
    li.appendChild(price);
    li.appendChild(h3);
    li.appendChild(h4);
    li.appendChild(btn);
    ul1.appendChild(li);
  }
}

const t = document.createElement("h1");
const t1 = document.createElement("h1");
t.innerText = "Products";
t1.innerText = "Basket";

const body = document.getElementsByTagName("body")[0];

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.width = "100%";
body.style.alignItems = "center";
body.style.gap = "30px";

body.appendChild(t);
body.appendChild(ul);
body.appendChild(t1);
body.appendChild(ul1);
