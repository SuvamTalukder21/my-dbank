import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
  console.log("Finished loading"); // Check weather my js is working or not
  const currentAmount = await dbank.CheckBalance();
  console.log(currentAmount);
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100; // My problem is in this line
});

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  console.log("Submitted"); // Check weather my js is working or not

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.TopUp(inputAmount);
  }
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.Withdraw(outputAmount);
  }

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});

async function update() {
  const currentAmount = await dbank.CheckBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100; // My problem is in this line
}