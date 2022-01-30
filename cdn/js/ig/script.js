// Generezi link-ul
function generateLink() {
  var link = document.getElementById("rawlink");
  var checker = document.getElementById("validation");
  var generator = document.getElementById("generate");
  var copy = document.getElementById("copy");

  var root = "https://smart301.linistitul.ro/s/ig/";
  var id = link.value;

  var appVer = document.getElementById("ver");
  var theVer = document.getElementById("usedAppVer");

  // Erori
  if (link.value.length == 0) {
    {
      copy.style.visibility = "hidden";
      checker.value = "Enter Your Username";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = "CREATE SMART LINK";
      theVer.value = appVer.innerHTML;
    }
  }

  else if (link.value.includes("http://")) {
    {
      copy.style.visibility = "hidden";
      checker.value = "Only Your Username";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = "CREATE SMART LINK";
      theVer.value = appVer.innerHTML;
    }
  }

  else if (link.value.includes("https://")) {
    {
      copy.style.visibility = "hidden";
      checker.value = "Only Your Username";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = "CREATE SMART LINK";
      theVer.value = appVer.innerHTML;
    }
  }

  else if (link.value.includes("instagram.com")) {
    {
      copy.style.visibility = "hidden";
      checker.value = "Only Your Username";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = "CREATE SMART LINK";
      theVer.value = appVer.innerHTML;
    }
  }

  else if (link.value.length >= 31 && link.value.length <= Infinity) {
    {
      copy.style.visibility = "hidden";
      checker.value = "You weren't supose to do that!";
      checker.style.color = "red";
      checker.style.width = "300px";
      checker.style.visibility = "visible";
      generator.innerHTML = "CREATE SMART LINK";
      theVer.value = appVer.innerHTML;
    }
  }

  // Succes
  else if (link.value.length >= 1 && link.value.length <= 30) {
    {
      copy.style.visibility = "hidden";
      checker.value = root + id;
      checker.style.color = "green";
      checker.style.textAlign = "left";
      checker.style.visibility = "visible";
      generator.innerHTML = 'Copy Link';
      theVer.value = appVer.innerHTML;
      generator.setAttribute( "onClick", "javascript: copyLink();" );
    }
  }
}

// Dupa ce genereaza link-URL, apesi sa il copiezi
function copyLink() {
  var link = document.getElementById("rawlink");
  var checker = document.getElementById("validation");
  var generator = document.getElementById("generate");
  var copy = document.getElementById("copy");
  var rawlink = document.getElementById('rawlink');

  var copyText = document.getElementById("validation");

  if (link.value.length >= 0 && link.value.length <= Infinity) {
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copy.style.visibility = "visible";
    checker.style.textAlign = "center";
    setTimeout(function() {
      copy.style.visibility = "hidden";
      generator.innerHTML = 'CREATE NEW LINK';
      rawlink.value = '';
      checker.value = '';
    }, 2000);
    generator.setAttribute( "onClick", "javascript: generateLink();" );
    event.preventDefault()
    theVer.value = appVer.innerHTML;
  }

  else {
    alert("WTF! How did you reached this error LOL!")
  }
}