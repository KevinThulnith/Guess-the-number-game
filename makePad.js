let pad = document.querySelector(".pad");

for (let k = 0; k < 16; k++) {
  pad.innerHTML +=
    '<div class="tile" id="' + k + '"><div class="num"></div></div>';
}
