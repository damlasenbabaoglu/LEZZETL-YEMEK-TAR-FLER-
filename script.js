
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const showSlide = () => {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
};
document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 2 + slides.length) % slides.length;
  showSlide();
});
document.querySelector(".next").addEventListener("click", showSlide);
showSlide();
setInterval(showSlide, 5000); 

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMessage");

  if (!name || !email || !message) {
    msg.textContent = "Lütfen tüm alanları doldurunuz.";
    msg.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    msg.textContent = "Geçerli bir e-posta adresi giriniz.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Mesajınız gönderildi. Teşekkürler!";
  msg.style.color = "green";
  this.reset();
});
