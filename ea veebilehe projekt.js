// Õige vastus on 12
let oigeVastus = "12";

document.getElementById("kontrolli").addEventListener("click", function() {
  let kasutajaVastus = document.getElementById("vastus").value;

  if (kasutajaVastus === oigeVastus) {
    document.getElementById("tulemus").textContent = "Õige! ✅";
    document.getElementById("tulemus").style.color = "green";
  } else {
    document.getElementById("tulemus").textContent = "Vale! ❌";
    document.getElementById("tulemus").style.color = "red";
  }
});
