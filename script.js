const buttons = document.querySelectorAll(".rate");
const submit = document.querySelector(".submit");
const selectedRate = document.querySelector(".selectedRate");
const resultBox = document.querySelector(".resultBox");
const rateBox = document.querySelector(".rateBox");


let submitVlue = "";


buttons.forEach((rateButton) => {

    rateButton.addEventListener("click", () => {
        buttons.forEach((rateButton) => {
            rateButton.classList.remove("active");
        })
        rateButton.classList.add("active");
        submitVlue = rateButton.textContent;
        submit.disabled = false;
    })
})
submit.addEventListener("click", () => {
    rateBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    selectedRate.innerHTML = `You selected ${submitVlue} out of 5`;
})