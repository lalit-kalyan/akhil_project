function myblue() {
  let id = null;
  const arrow = document.getElementById("bluearrow");

  let pos = 0;
  clearInterval(id);

  id = setInterval(frame, 20);

  function frame() {
    if (pos == 92) {
      clearInterval(id);
    } else {
      pos++;

      arrow.style.marginRight = pos + "%";
      if (pos == 87) {
        document.getElementById("bluedot").style.backgroundColor = "#FF8F00";
      }
    }
  }
}

function myYellow() {
  let id = null;
  const arrow = document.getElementById("yellowarrow");

  let pos = 0;
  clearInterval(id);

  id = setInterval(frame, 20);

  function frame() {
    if (pos == 92) {
      clearInterval(id);
    } else {
      pos++;

      arrow.style.marginRight = pos + "%";
      if (pos == 87) {
        document.getElementById("yellowdot").style.backgroundColor = "#FF00B9";
      }
    }
  }
}

function myred() {
  let id = null;
  const arrow = document.getElementById("redarrow");

  let pos = 0;
  clearInterval(id);

  id = setInterval(frame, 20);

  function frame() {
    if (pos == 92) {
      clearInterval(id);
    } else {
      pos++;

      arrow.style.marginRight = pos + "%";
      if (pos == 87) {
        document.getElementById("reddot").style.backgroundColor = "#A6FF00";
      }
    }
  }
}

function mygreen() {
  let id = null;
  const arrow = document.getElementById("greenarrow");

  let pos = 0;
  clearInterval(id);

  id = setInterval(frame, 20);

  function frame() {
    if (pos == 92) {
      clearInterval(id);
    } else {
      pos++;

      arrow.style.marginRight = pos + "%";
      if (pos == 87) {
        document.getElementById("greendot").style.backgroundColor = "#00ECFF";
      }
    }
  }
}

function reset() {
  document.getElementById("bluearrow").style.marginRight = "";
  document.getElementById("bluedot").style.backgroundColor = "";
  document.getElementById("yellowarrow").style.marginRight = "";
  document.getElementById("yellowdot").style.backgroundColor = "";
  document.getElementById("redarrow").style.marginRight = "";
  document.getElementById("reddot").style.backgroundColor = "";
  document.getElementById("greenarrow").style.marginRight = "";
  document.getElementById("greendot").style.backgroundColor = "";
}
