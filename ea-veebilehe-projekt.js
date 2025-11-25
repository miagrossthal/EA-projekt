// Pealehtede õiged vastused
const oigedVastused = {
  "pealeht_1": "1011",
  "pealeht_2": "28",
  "pealeht_3": "5763",
};

// Nupu kood
document.querySelectorAll(".kontrolli").forEach(btn => {
  btn.addEventListener("click", () => {
    const alamleht = btn.dataset.leht;
    const vastusInput = document.querySelector(`#vastus[data-leht="${alamleht}"]`);
    const tulemusElem = document.querySelector(`#tulemus[data-leht="${alamleht}"]`);
    // Output kui vastus on õige/vale
    if (vastusInput.value === oigedVastused[alamleht]) {
      tulemusElem.textContent = "Õige! ✅";
      tulemusElem.style.color = "green";
    } else {
      tulemusElem.textContent = "Vale! ❌";
      tulemusElem.style.color = "red";
    }
  });
});
