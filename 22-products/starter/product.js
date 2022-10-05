const productDOM = document.querySelector(".product");
const url =
  "https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<4 class="product-loading">Loading...</h4>`;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class='error'>There was a problem loading the product. Please try again later.</p>`;
  }
};

const displayProduct = (product) => {
  product.map(() => {
    return `<section class="product">
      <div class="product-wrapper">
        <img src="./couch.jpg" class="img" alt="" />
        <div class="product-info">
          <h3>title</h3>
          <h5>company</h5>
          <span>$9.99</span>
          <div class="colors">
            <span class="product-color" style="background: red"></span>
          </div>
          <p>text</p>
          <buttom class="btn">add to cart</buttom>
        </div>
      </div>
    </section>`;
  });
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
