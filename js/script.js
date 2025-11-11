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

  //   addBtn.style.border.background = "#0874F2";
  addBtn.style.color = "#0874F2";
  addBtn.style.background = "#f3f8fe";
});
