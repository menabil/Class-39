let phnNum = document.getElementById("phnNum");
let pasSw = document.getElementById("pasSw");
let logIn = document.getElementById("logIn");
let pageS = document.getElementById("pageS");
let homE = document.getElementById("homE");
let ouT = document.getElementById("ouT");
let secPage = document.getElementById("secPage");

// login othintication
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

// Log out btn process
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
let accNum = document.getElementById("accNum");
let amountSend = document.getElementById("amountSend");
let pinNum = document.getElementById("pinNum");
let addMonBtn = document.getElementById("addMonBtn");
let totalAmount = document.getElementById("totalAmount");

// addmoney page show
addBtn.addEventListener("click", () => {
  welPart.setAttribute("hidden", true);
  defPart.setAttribute("hidden", true);
  addMon.removeAttribute("hidden");

  addBtn.style.border = "1px solid #0874F2";
  addBtn.style.color = "#0874F2";
  addBtn.style.background = "#f3f8fe";
});

// addmoney process
addMonBtn.addEventListener("click", () => {
  let amountTotal = parseInt(totalAmount.innerText);
  let sendAmount = parseInt(amountSend.value);

  if (pinNum.value === "1234") {
    let total = amountTotal + sendAmount;
    totalAmount.innerText = total;
  }
  amountSend.value = "";
  pinNum.value = "";
  accNum.value = "";
});

// ===========================================

let cashOutPage = document.getElementById("cashOutPage");
let cashOut = document.getElementById("cashOut");
let agentNum = document.getElementById("agentNum");
let cashAmount = document.getElementById("cashAmount");
let pasNum = document.getElementById("pasNum");
let cashBtn = document.getElementById("cashBtn");

// cashout page a asbe
cashOutPage.addEventListener("click", () => {
  welPart.setAttribute("hidden", true);
  defPart.setAttribute("hidden", true);
  addMon.setAttribute("hidden", true);
  cashOut.removeAttribute("hidden");

  cashOutPage.style.border = "1px solid #0874F2";
  cashOutPage.style.color = "#0874F2";
  cashOutPage.style.background = "#f3f8fe";
});

// cashout processing
cashBtn.addEventListener("click", () => {
  let amountTotal = parseInt(totalAmount.innerText);
  let sendAmount = parseInt(cashAmount.value);

  if (pasNum.value === "1234") {
    let total = amountTotal - sendAmount;
    totalAmount.innerText = total;
  }
  cashAmount.value = "";
  pasNum.value = "";
  agentNum.value = "";
});

// ===========================================

let traMoneyPage = document.getElementById("traMoneyPage");
let transfer = document.getElementById("transfer");
let tAgentNum = document.getElementById("tAgentNum");
let tCashAm = document.getElementById("tCashAm");
let tPass = document.getElementById("tPass");
let sendBtn = document.getElementById("sendBtn");

// Transfer Money page a jabe
traMoneyPage.addEventListener("click", () => {
  welPart.setAttribute("hidden", true);
  defPart.setAttribute("hidden", true);
  addMon.setAttribute("hidden", true);
  cashOut.setAttribute("hidden", true);
  transfer.removeAttribute("hidden");

  traMoneyPage.style.border = "1px solid #0874F2";
  traMoneyPage.style.color = "#0874F2";
  traMoneyPage.style.background = "#f3f8fe";
});

// Transfer processing
sendBtn.addEventListener("click", () => {
  let amountTotal = parseInt(totalAmount.innerText);
  let sendAmount = parseInt(tCashAm.value);

  if (tPass.value === "1234") {
    let total = amountTotal - sendAmount;
    totalAmount.innerText = total;
  }
  tCashAm.value = "";
  tPass.value = "";
  tAgentNum.value = "";
});

// ===========================================

let cupon = document.getElementById("cupon");
let cuponPage = document.getElementById("cuponPage");
let cuponNum = document.getElementById("cuponNum");
let cuponbtn = document.getElementById("cuponbtn");

// Cupon page a enter
cupon.addEventListener("click", () => {
  welPart.setAttribute("hidden", true);
  defPart.setAttribute("hidden", true);
  addMon.setAttribute("hidden", true);
  cashOut.setAttribute("hidden", true);
  transfer.setAttribute("hidden", true);
  cuponPage.removeAttribute("hidden");

  cupon.style.border = "1px solid #0874F2";
  cupon.style.color = "#0874F2";
  cupon.style.background = "#f3f8fe";
});

// Cupon processing
cuponbtn.addEventListener("click", () => {
  let amountTotal = parseInt(totalAmount.innerText);

  if (cuponNum.value === "1234") {
    let total = amountTotal + 500;
    totalAmount.innerText = total;
  }

  cuponNum.value = "";
});

// ===========================================

let billPage = document.getElementById("billPage");
let payBill = document.getElementById("payBill");
let billNum = document.getElementById("billNum");
let billAmo = document.getElementById("billAmo");
let billpin = document.getElementById("billpin");
let payBtn = document.getElementById("payBtn");

// Pay bill page show
billPage.addEventListener("click", () => {
  welPart.setAttribute("hidden", true);
  defPart.setAttribute("hidden", true);
  addMon.setAttribute("hidden", true);
  cashOut.setAttribute("hidden", true);
  transfer.setAttribute("hidden", true);
  cuponPage.setAttribute("hidden", true);
  payBill.removeAttribute("hidden");

  billPage.style.border = "1px solid #0874F2";
  billPage.style.color = "#0874F2";
  billPage.style.background = "#f3f8fe";
});

// addmoney process
payBtn.addEventListener("click", () => {
  let amountTotal = parseInt(totalAmount.innerText);
  let sendAmount = parseInt(billAmo.value);

  if (billpin.value === "1234") {
    let total = amountTotal - sendAmount;
    totalAmount.innerText = total;
  }
  billAmo.value = "";
  billpin.value = "";
  billNum.value = "";
});

// ===========================================

let tranPage = document.getElementById("tranPage");
let transaction = document.getElementById("transaction");

// Pay bill page show
tranPage.addEventListener("click", () => {
  welPart.setAttribute("hidden", true);
  defPart.setAttribute("hidden", true);
  addMon.setAttribute("hidden", true);
  cashOut.setAttribute("hidden", true);
  transfer.setAttribute("hidden", true);
  cuponPage.setAttribute("hidden", true);
  payBill.setAttribute("hidden", true);
  transaction.removeAttribute("hidden");

  tranPage.style.border = "1px solid #0874F2";
  tranPage.style.color = "#0874F2";
  tranPage.style.background = "#f3f8fe";
});

// ===========================================
