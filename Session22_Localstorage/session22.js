let session22ListProducts = [
  {
    id: 1,
    name: "Airpods Pro",
    price: 24900,
    imageUrl: "./image/vest.webp",
    qty: 10,
    heading: "Wireless Noise Cancelling Earphones",
    des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
  },
  {
    id: 2,
    name: "Apple Watch",
    price: 40900,
    imageUrl: "./image/vest_image10.webp",
    qty: 15,
    heading: "You’ve never seen a watch like this",
    des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
  },
  {
    id: 3,
    name: "Macbook Pro",
    price: 199900,
    imageUrl: "./image/vest_image8.webp",
    qty: 20,
    heading: "The best for the brightest",
    des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
  },
  {
    id: 4,
    name: "iPhone 11 pro",
    price: 106600,
    imageUrl: "./image/vest_image9.webp",
    qty: 35,
    heading: "Pro cameras. Pro display. Pro performance",
    des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
  },
  {
    id: 5,
    name: "iPad Pro",
    price: 71900,
    imageUrl: "./image/vest_image9_1.webp",
    qty: 25,
    heading: "Your next computer is not a computer",
    des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
  },
];

if (localStorage.getItem("session22ListProducts")) {
  session22ListProducts = Object.values(
    JSON.parse(localStorage.getItem("session22ListProducts"))
  );
} else {
  localStorage.setItem(
    "session22ListProducts",
    JSON.stringify(session22ListProducts)
  );
}

let mainCart = document.querySelector(".main-cart");
let content = "";
for (let item of session22ListProducts) {
  content += `<div class="card">
              <div class="top-bar">
                <i class="fab fa-apple"></i>
                <em class="stocks">${item.qty}</em>
              </div>
              <div class="img-container">
                <img
                  class="product-img"
                  src="${item.imageUrl}"
                  alt="item"
                />
                <div class="out-of-stock-cover"><span>Out Of Stock</span></div>
              </div>
              <div class="details">
                <div class="name-fav">
                  <strong class="product-name">${item.name}</strong>
                  <button class="heart">
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
                <div class="wrapper">
                  <h5>${item.heading}</h5>
                  <p>
                   ${item.des}
                  </p>
                </div>
                <div class="purchase">
                  <p class="product-price">₹ ${item.price}</p>
                  <span class="btn-add">
                    <div>
                      <button class="add-btn" id="${item.id}">
                        Add <i class="fas fa-chevron-right"></i>
                      </button></div
                  ></span>
                </div>
              </div>
            </div>`;
}
mainCart.innerHTML += content;

let buttonAdds = document.querySelectorAll(".add-btn");

let session22Carts = [];
if (localStorage.getItem("session22Carts")) {
  session22Carts = Object.values(
    JSON.parse(localStorage.getItem("session22Carts"))
  );
} else {
  localStorage.setItem("session22Carts", JSON.stringify(session22Carts));
}

let nav = document.querySelector(".nav");
nav.innerHTML += `<span class="total-qty">${session22Carts.length}</span>`;

// tạo sự kiện thêm sp vào giỏ hàng
for (let add of buttonAdds) {
  add.addEventListener("click", function (e) {
    let id = e.target.getAttribute("id");
    let index = session22Carts.findIndex((product) => product.id == id);

    if (!session22Carts.length || index < 0) {
      if (
        session22ListProducts[
          session22ListProducts.findIndex((product) => product.id == id)
        ].qty >= 1
      ) {
        let product = {
          ...session22ListProducts[
            session22ListProducts.findIndex((product) => product.id == id)
          ],
          qty: 1,
        };
        session22ListProducts[
          session22ListProducts.findIndex((product) => product.id == id)
        ].qty -= 1;
        localStorage.setItem(
          "session22ListProducts",
          JSON.stringify(session22ListProducts)
        );
        session22Carts.push(product);
        localStorage.setItem("session22Carts", JSON.stringify(session22Carts));
        window.location.reload();
      }
    } else {
      if (
        session22ListProducts[
          session22ListProducts.findIndex((product) => product.id == id)
        ].qty >= 1
      ) {
        session22Carts[index].qty += 1;
        localStorage.setItem("session22Carts", JSON.stringify(session22Carts));
        console.log(session22Carts[index]);
        session22ListProducts[
          session22ListProducts.findIndex((product) => product.id == id)
        ].qty -= 1;
        localStorage.setItem(
          "session22ListProducts",
          JSON.stringify(session22ListProducts)
        );
        window.location.reload();
      }
    }
  });
}
