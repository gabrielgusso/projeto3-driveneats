function closeOrder() {
  const foodSelect = document.querySelector(".foods .select");
  const drinkSelect = document.querySelector(".drinks .select");
  const dessertSelect = document.querySelector(".desserts .select");
  const button = document.querySelector(".button");
  const link = document.querySelector(".bottom .link");

  const foodNameHTML = document.querySelector(".foods .select h3");
  const drinkNameHTML = document.querySelector(".drinks .select h3");
  const dessertNameHTML = document.querySelector(".desserts .select h3");

  const foodPriceHTML = document.querySelector(".foods .select h4 span");
  const drinkPriceHTML = document.querySelector(".drinks .select h4 span");
  const dessertPriceHTML = document.querySelector(".desserts .select h4 span");


  if (foodSelect && drinkSelect && dessertSelect) {
    const foodPrice = foodPriceHTML.innerHTML;
    const drinkPrice = drinkPriceHTML.innerHTML;
    const dessertPrice = dessertPriceHTML.innerHTML;

    const foodPriceNumber = Number(foodPrice.replaceAll(',','.'));
    const drinkPriceNumber = Number(drinkPrice.replaceAll(',','.'));
    const dessertPriceNumber = Number(dessertPrice.replaceAll(',','.'));

    const totalPrice = Math.round(foodPriceNumber + drinkPriceNumber + dessertPriceNumber);

    const foodName = foodNameHTML.innerHTML;
    const drinkName = drinkNameHTML.innerHTML;
    const dessertName = dessertNameHTML.innerHTML;

    const linkText = `Olá, gostaria de fazer o pedido:
    - Pizza: ${foodName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
    Total: R$ ${totalPrice}`
    let encoded = encodeURIComponent(linkText)
    button.classList.add("allSelect");
    button.innerHTML = "Fechar pedido";
    link.classList.remove("disable");
    link.setAttribute('href', 'https://wa.me/5511942167462?text=' + encoded)
  }
}

function selectfood(buttonclass) {
  const selectbutton = document.querySelector(".foods .select");
  if (selectbutton !== null) {
    selectbutton.classList.remove("select");
  }

  if (selectbutton !== null) {
    const icons = document.querySelectorAll(".icon");
    for (const icon of icons) {
      if (!icon.classList.contains("display")) {
        icon.classList.add("display");
      }
    }
  }

  const selector = "." + buttonclass;

  const button = document.querySelector(selector);
  button.classList.add("select");

  const icon = document.querySelector("." + buttonclass + " .icon");

  icon.classList.remove("display");

  closeOrder();
}

function selectdrink(buttonclass) {
  const selectbutton = document.querySelector(".drinks .select");

  if (selectbutton !== null) {
    selectbutton.classList.remove("select");
  }

  if (selectbutton !== null) {
    const icons = document.querySelectorAll(".icon1");
    for (const icon of icons) {
      if (!icon.classList.contains("display")) {
        icon.classList.add("display");
      }
    }
  }

  const selector = "." + buttonclass;

  const button = document.querySelector(selector);
  button.classList.add("select");

  const icon = document.querySelector("." + buttonclass + " .icon1");

  icon.classList.remove("display");

  closeOrder();
}

function selectdessert(buttonclass) {
  const selectbutton = document.querySelector(".desserts .select");

  if (selectbutton !== null) {
    selectbutton.classList.remove("select");
  }

  if (selectbutton !== null) {
    const icons = document.querySelectorAll(".icon2");
    for (const icon of icons) {
      if (!icon.classList.contains("display")) {
        icon.classList.add("display");
      }
    }
  }

  const selector = "." + buttonclass;

  const button = document.querySelector(selector);
  button.classList.add("select");

  const icon = document.querySelector("." + buttonclass + " .icon2");

  icon.classList.remove("display");

  closeOrder();
}
