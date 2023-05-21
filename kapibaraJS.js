function getrand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var click = 1;
var coin_min = 1;
var coin_max = 5;
var score = 0;
var coin = 0;
var kapibara_coin = 0;
var clicker = document.getElementById("kapibara_btn");
var procrutka = document.getElementById("procrutka");
var scoreDisplay = document.getElementById("score");
var kapibara_coinDisplay = document.getElementById("kapibara_coin");
var progressBar = document.getElementById("progressBar");
var kapibaraklickButton = document.getElementById("kapibara_btn");

clicker.addEventListener("click", function() {
    score+= click;
    scoreDisplay.innerHTML = "Score: " + (score+coin);
    let val = progressBar.value;
    val++;
    progressBar.value = val;
    if(val === 10){
        progressBar.value = 0;
        kapibara_coin++;
        kapibara_coinDisplay.innerHTML = "Kapibara coin:" + kapibara_coin;
    }
});


const eatButton = document.getElementById("eat_kapibara");
const buy_kapibaraButton = document.getElementById("buy_kapibara");
const skinsButton = document.getElementById("skins")

const buyButton1 = document.createElement("button");
buyButton1.setAttribute("id", "1_buy");

const buyButton2 = document.createElement("button");
buyButton2.setAttribute("id", "2_buy");

const buyButton3 = document.createElement("button");
buyButton3.setAttribute("id", "3_buy");

const buyButton4 = document.createElement("button");
buyButton4.setAttribute("id", "4_buy");

const buyButton5 = document.createElement("button");
buyButton5.setAttribute("id", "5_buy");

const buyButton6 = document.createElement("button");
buyButton6.setAttribute("id", "6_buy");

const buyButton7 = document.createElement("button");
buyButton7.setAttribute("id", "7_buy");


eatButton.addEventListener("click", function() {
    // Создаем таблицу и добавляем ее на страницу
    const table = document.createElement("table");
    table.style.borderSpacing = "7px";
    const row1 = table.insertRow();
    const row2 = table.insertRow();
    const row3 = table.insertRow();
    const row4 = table.insertRow();
    const row5 = table.insertRow();
    const row6 = table.insertRow();
    const row7 = table.insertRow();
    const grass = row1.insertCell();
    const seed = row2.insertCell();
    const cabbage = row3.insertCell();
    const seaweed = row4.insertCell();
    const eggplant = row5.insertCell();
    const watermelon = row6.insertCell();
    const melon = row7.insertCell();
        // Добавляем текст и кнопки в ячейки таблицы
    grass.appendChild(buyButton1);
    seed.appendChild(buyButton2);
    cabbage.appendChild(buyButton3);
    seaweed.appendChild(buyButton4);
    eggplant.appendChild(buyButton5);
    watermelon.appendChild(buyButton6);
    melon.appendChild(buyButton7);

    buyButton1.className = "grass";
    buyButton2.className = "seed";
    buyButton3.className = "cabbage";
    buyButton4.className = "seaweed";
    buyButton5.className = "eggplant";
    buyButton6.className = "watermelon";
    buyButton7.className = "melon";

    

        // Добавляем обработчики событий "click" для кнопок "купить"
    buyButton1.addEventListener("click", function() {
        if(score >= 300){
            click = 2;
            score = score - 300;
            scoreDisplay.innerHTML = "Score:" + score;
            buyButton1.style.backgroundImage = "url('images/bought.png')";
            buyButton1.setAttribute("disabled", true)
        }
    });

    buyButton2.addEventListener("click", function() {
        if(score >= 500){
            click = 3;
            score = score - 500;
            scoreDisplay.innerHTML = "Score:" + score;
            buyButton2.style.backgroundImage = "url('images/bought.png')";
            buyButton2.setAttribute("disabled", true)
        }
    });

    buyButton3.addEventListener("click", function() {
        if(score >= 1000){
            click = 5;
            score = score - 1000;
            scoreDisplay.innerHTML = "Score:" + score;
            buyButton3.style.backgroundImage = "url('images/bought.png')";
            buyButton3.setAttribute("disabled", true)
        }
    });

    buyButton4.addEventListener("click", function() {
        if(score >= 2000){
            click = 7;
            score = score - 2000;
            scoreDisplay.innerHTML = "Score:" + score;
            buyButton4.style.backgroundImage = "url('images/bought.png')";
            buyButton4.setAttribute("disabled", true)
        }
    });

    buyButton5.addEventListener("click", function() {
        if(score >= 5000){
            click = 10;
            score = score - 5000;
            scoreDisplay.innerHTML = "Score:" + score;
            buyButton5.style.backgroundImage = "url('images/bought.png')";
            buyButton5.setAttribute("disabled", true)
        }
    });

    buyButton6.addEventListener("click", function() {
        if(score >= 10000){
            click = 15;
            score = score - 1000;
            scoreDisplay.innerHTML = "Score:" + score;
            buyButton6.style.backgroundImage = "url('images/bought.png')";
            buyButton6.setAttribute("disabled", true)
        }
    });

    buyButton7.addEventListener("click", function() {
        if(score >= 15000){
            click = 20;
            score = score - 15000;
            scoreDisplay.innerHTML = "Score:" + score;
            buyButton7.style.backgroundImage = "url('images/bought.png')";
            buyButton7.setAttribute("disabled", true)
        }
    });

        // Добавляем таблицу на страницу
    const eatDiv = document.createElement("div");
    eatDiv.appendChild(table);
    procrutka.appendChild(eatDiv);

    // Создаем кнопку "выход" и добавляем ее на страницу
    const exitButton1 = document.createElement("button");
    eatDiv.appendChild(exitButton1);

    exitButton1.className = "close_button"

        // Добавляем обработчик события "click" для кнопки "выход"
    exitButton1.addEventListener("click", function() {
        // Удаляем таблицу и кнопку "выход" со страницы
        eatDiv.removeChild(table);
        eatDiv.removeChild(exitButton1);

        // Возвращаем кнопку "shop"
    procrutka.appendChild(eatButton);
    procrutka.appendChild(buy_kapibaraButton);
    procrutka.appendChild(skinsButton);
    });

    procrutka.removeChild(eatButton);
    procrutka.removeChild(buy_kapibaraButton);
    procrutka.removeChild(skinsButton);
});

const capibaraButton1 = document.createElement("button");
capibaraButton1.setAttribute("id", "1_capibara");

const capibaraButton2 = document.createElement("button");
capibaraButton2.setAttribute("id", "2_capibara");

const capibaraButton3 = document.createElement("button");
capibaraButton3.setAttribute("id", "3_capibara");

const capibaraButton4 = document.createElement("button");
capibaraButton4.setAttribute("id", "4_capibara");

const capibaraButton5 = document.createElement("button");
capibaraButton5.setAttribute("id", "5_capibara");

const capibaraButton6 = document.createElement("button");
capibaraButton6.setAttribute("id", "6_capibara");

const capibaraButton7 = document.createElement("button");
capibaraButton7.setAttribute("id", "7_capibara");

buy_kapibaraButton.addEventListener("click", function() {
    const table = document.createElement("table");
    table.style.borderSpacing = "7px";
    const row8 = table.insertRow();
    const row9 = table.insertRow();
    const row10 = table.insertRow();
    const row11 = table.insertRow();
    const row12 = table.insertRow();
    const row13 = table.insertRow();
    const row14 = table.insertRow();

    const one_kap = row8.insertCell();
    const two_kap = row9.insertCell();
    const three_kap = row10.insertCell();
    const four_kap = row11.insertCell();
    const five_kap = row12.insertCell();
    const six_kap = row13.insertCell();
    const seven_kap = row14.insertCell();



    one_kap.appendChild(capibaraButton1);
    two_kap.appendChild(capibaraButton2);
    three_kap.appendChild(capibaraButton3);
    four_kap.appendChild(capibaraButton4);
    five_kap.appendChild(capibaraButton5);
    six_kap.appendChild(capibaraButton6);
    seven_kap.appendChild(capibaraButton7);

    capibaraButton1.className = "one_kap";
    capibaraButton2.className = "two_kap";
    capibaraButton3.className = "three_kap";
    capibaraButton4.className = "four_kap";
    capibaraButton5.className = "five_kap";
    capibaraButton6.className = "six_kap";
    capibaraButton7.className = "seven_kap";


    capibaraButton1.addEventListener("click", function() {
        if(score >= 1000){
            score = score - 1000;
            scoreDisplay.innerHTML = "Score:" + score;
            setInterval(function() {
                score+= click;
                scoreDisplay.innerHTML = "Score: " + (score+coin);
            }, 5000);
            capibaraButton1.style.backgroundImage = "url('images/bought.png')";
            capibaraButton1.setAttribute("disabled", true)
        }
    });

    capibaraButton2.addEventListener("click", function() {
        if(score >= 2000){
            score = score - 2000;
            scoreDisplay.innerHTML = "Score:" + score;
            setInterval(function() {
                score+= click;
                scoreDisplay.innerHTML = "Score: " + (score+coin);
            }, 4000);
            capibaraButton2.style.backgroundImage = "url('images/bought.png')";
            capibaraButton2.setAttribute("disabled", true)
        }
    });

    capibaraButton3.addEventListener("click", function() {
        if(score >= 4000){
            score = score - 4000;
            scoreDisplay.innerHTML = "Score:" + score;
            setInterval(function() {
                score+= click;
                scoreDisplay.innerHTML = "Score: " + (score+coin);
            }, 3000);
            capibaraButton3.style.backgroundImage = "url('images/bought.png')";
            capibaraButton3.setAttribute("disabled", true)
        }
    });

    capibaraButton4.addEventListener("click", function() {
        if(score >= 8000){
            score = score - 8000;
            scoreDisplay.innerHTML = "Score:" + score;
            setInterval(function() {
                score+= click;
                scoreDisplay.innerHTML = "Score: " + (score+coin);
            }, 2000);
            capibaraButton4.style.backgroundImage = "url('images/bought.png')";
            capibaraButton4.setAttribute("disabled", true)
        }
    });

    capibaraButton5.addEventListener("click", function() {
        if(score >= 15000){
            score = score - 15000;
            scoreDisplay.innerHTML = "Score:" + score;
            setInterval(function() {
                score+= click;
                scoreDisplay.innerHTML = "Score: " + (score+coin);
            }, 1000);
            capibaraButton5.style.backgroundImage = "url('images/bought.png')";
            capibaraButton5.setAttribute("disabled", true)
        }
    });

    capibaraButton6.addEventListener("click", function() {
        if(score >= 25000){
            score = score - 25000;
            scoreDisplay.innerHTML = "Score:" + score;
            setInterval(function() {
                score+= click;
                scoreDisplay.innerHTML = "Score: " + (score+coin);
            }, 700);
            capibaraButton6.style.backgroundImage = "url('images/bought.png')";
            capibaraButton6.setAttribute("disabled", true)
        }
    });

    capibaraButton7.addEventListener("click", function() {
        if(score >= 50000){
            score = score - 50000;
            scoreDisplay.innerHTML = "Score:" + score;
            setInterval(function() {
                score+= click;
                scoreDisplay.innerHTML = "Score: " + (score+coin);
            }, 500);
            capibaraButton7.style.backgroundImage = "url('images/bought.png')";
            capibaraButton7.setAttribute("disabled", true)
        }
    });


            // Добавляем таблицу на страницу
    const capibaraDiv = document.createElement("div");
    capibaraDiv.appendChild(table);
    procrutka.appendChild(capibaraDiv);

    // Создаем кнопку "выход" и добавляем ее на страницу
    const exitButton2 = document.createElement("button");
    capibaraDiv.appendChild(exitButton2);
    exitButton2.className = "close_button"

        // Добавляем обработчик события "click" для кнопки "выход"
    exitButton2.addEventListener("click", function() {
        // Удаляем таблицу и кнопку "выход" со страницы
        capibaraDiv.removeChild(table);
        capibaraDiv.removeChild(exitButton2);

        // Возвращаем кнопку "shop"
    procrutka.appendChild(eatButton);
    procrutka.appendChild(buy_kapibaraButton);
    procrutka.appendChild(skinsButton);
    });

    procrutka.removeChild(eatButton);
    procrutka.removeChild(buy_kapibaraButton);
    procrutka.removeChild(skinsButton);  
});


