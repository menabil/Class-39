let phnNum = document.getElementById("phnNum");
let pasSw = document.getElementById("pasSw");
let logIn = document.getElementById("logIn");
let pageS = document.getElementById("pageS");
let homE = document.getElementById("homE");
let ouT = document.getElementById("ouT");
let secPage = document.getElementById("secPage");

logIn.addEventListener("click", () => {
  let phone = phnNum.value;
  let pas = pasSw.value;

  if (phone == "1234" && pas == 1234) {
    alert("Login Successful");
    secPage.removeAttribute("hidden");
    homE.setAttribute("hidden", true);
  } else {
    alert("Wrong Information");
  }
});
phnNum.value = "";
pasSw.value = "";

ouT.addEventListener("click", () => {
  homE.removeAttribute("hidden");
  secPage.setAttribute("hidden", true);
  phnNum.value = "";
  pasSw.value = "";
  welPart.removeAttribute("hidden");
  defPart.removeAttribute("hidden");
  addBtn.style.color = "";
  addBtn.style.background = "";
});

// ===============================================

let welPart = document.getElementById("welPart");
let defPart = document.getElementById("defPart");
let addMon = document.getElementById("addMon");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  welPart.setAttribute("hidden", true);
  defPart.setAttribute("hidden", true);
  addMon.removeAttribute("hidden");

  addBtn.style.border = "2px solid #0874F2";
  addBtn.style.color = "#0874F2";
  addBtn.style.background = "#f3f8fe";
});

// ===========================================

let accNum = document.getElementById("accNum");
let amountSend = document.getElementById("amountSend");
let pinNum = document.getElementById("pinNum");
let addMonBtn = document.getElementById("addMonBtn");
let totalAmount = document.getElementById("totalAmount");

addMonBtn.addEventListener("click", () => {
  let amountTotal = parseInt(totalAmount.innerText);
  let sendAmount = parseInt(amountSend.value);

  if (pinNum.value === "1234") {
    let toale = amountTotal + sendAmount;
    totalAmount.innerText = toale;
    amountSend.value = "";
    pinNum.value = "";
  }
});
