let isOpen = false;

function togglePortfolio() {
  const portfolio = document.getElementById("portfolio");
  const btn = document.querySelector(".portfolio-btn");
  isOpen = !isOpen;
/*Tutaj wybierasz co ma pisać na przycisku od zamknięcia portfolio*/
  if (isOpen) {
    portfolio.classList.remove("hidden");
    btn.textContent = "Zamknij portfolio";
  } else {
    portfolio.classList.add("hidden");
    btn.textContent = "Zobacz portfolio";
  }
}
