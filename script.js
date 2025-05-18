const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdown-content");
const totopBtn = document.getElementById("totop");

dropdownBtn.addEventListener("click", () => {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (e) => {
    if(!e.target.matches("#dropdownBtn")){
        dropdownContent.style.display = "none";
    }
})

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
      totopBtn.style.display = "block";
    } else {
      totopBtn.style.display = "none";
    }
  };

  totopBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };