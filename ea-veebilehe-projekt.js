// Õiged vastused alamlehtedele
const oigedVastused = {
  "pealeht_1": "1011",
  "pealeht_2": "1100", // muuda vastust
  "pealeht_3": "1001" //muuda vastust
};

// Lisa event listener kõikidele kontrolli nuppudele
document.querySelectorAll(".kontrolli").forEach(btn => {
  btn.addEventListener("click", () => {
    const alamleht = btn.dataset.leht;
    const vastusInput = document.querySelector(`#vastus[data-leht="${alamleht}"]`);
    const tulemusElem = document.querySelector(`#tulemus[data-leht="${alamleht}"]`);

    if (vastusInput.value === oigedVastused[alamleht]) {
      tulemusElem.textContent = "Õige! ✅";
      tulemusElem.style.color = "green";
    } else {
      tulemusElem.textContent = "Vale! ❌";
      tulemusElem.style.color = "red";
    }
  });
});
