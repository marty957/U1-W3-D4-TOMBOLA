/*creazione delle celle*/

const createCell = function () {
  const container = document.getElementById("container");

  for (let i = 0; i < 76; i++) {
    /*creazione elementi*/
    const cell = document.createElement("div");
    const numberToInsert = document.createElement("h3");

    /*attributi elementi*/
    cell.className = "cell";
    numberToInsert.className = "number";
    numberToInsert.innerText = i + 1;

    /*inserisco gli elementi*/

    cell.appendChild(numberToInsert);
    container.appendChild(cell);
  }
};
const saveTheNumber = document.getElementById("btn");

/*creazione del bottone a estrazione numero casuale*/
let numberDrawn = 0;
saveTheNumber.onsubmit = function (e) {
  e.preventDefault();
  numberDrawn = Math.floor(Math.random() * 77);
  const num = document.querySelectorAll(".number");

  num.forEach((h3) => {
    parseInt(h3.innerText);

    if (numberDrawn === parseInt(h3.innerText)) {
      h3.parentElement.style.background = "yellow";
      /*num.classList.add(drawns);*/
    }
  });
};

//caricamento pagina//

window.onload = function () {
  createCell();
};
