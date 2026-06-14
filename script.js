const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");

console.log("JS chargé");

seal.addEventListener("click", () => {
    console.log("clic !");
    envelope.classList.toggle("open");
});