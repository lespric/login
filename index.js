window.onload = function() {
  let otxt = document.getElementsByName("account");
  let ospan1 = document.getElementById("dis1");
  let opwd = document.getElementsByName("password");
  let ospan2 = document.getElementById("dis2");

  otxt.onkeyup = function() {
    ospan1.innerHTML = this.value;
    if (ospan1.offsetWidth > otxt.offsetWidth) {
      this.style.width = ospan1.offsetWidth + "px";
    }
  };

  opwd.onkeyup = function() {
    ospan2.innerHTML = this.value;
    if (ospan2.offsetWidth > opwd.offsetWidth) {
      this.style.width = ospan2.offsetWidth + "px";
    }
  };
};
