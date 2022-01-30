// Generezi link-ul
function generateLink() {
  var link = document.getElementById("rawlink");
  var checker = document.getElementById("validation");
  var generator = document.getElementById("generate");
  var copy = document.getElementById("copy");

  var root = "https://smart301.linistitul.ro/watch/";
  var url = link.value;
  
  var parts = url.split('/');
  var id = parts.pop();

  var brutParts = url.split('?v=');
  var brutID = brutParts.pop();

  var appVer = document.getElementById("ver");
  var theVer = document.getElementById("usedAppVer");

  // Secunde pana dispare mesajul de eroare
  var seconds = 300000;

  // Erori Generale
  if (link.value.length == 0) {
    {
      copy.style.visibility = "hidden";
      checker.value = "Please Enter Your Link";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = 'CREATE SMART LINK';
      theVer.value = appVer.innerHTML;
      setTimeout(function() {
        checker.style.cursor = "default";
      }, seconds*1000);
    }
  }

  if (link.value.length >= 1 && link.value.length <= 100) {
    {
      copy.style.visibility = "hidden";
      checker.value = "Try a YouTube Link";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = 'CREATE SMART LINK';
      theVer.value = appVer.innerHTML;
      setTimeout(function() {
        checker.style.cursor = "default";
      }, seconds*1000);
    }
  }

  if (link.value.length >= 100 && link.value.length <= Infinity) {
    {
      copy.style.visibility = "hidden";
      checker.value = "Woooo... That's too big!";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = 'CREATE SMART LINK';
      theVer.value = appVer.innerHTML;
      setTimeout(function() {
        checker.style.cursor = "default";
      }, seconds*1000);
    }
  }

  // Erori Pentru ID
  if (link.value.includes("youtu.be") && link.value.length <= 100) {
    {
      copy.style.visibility = "hidden";
      checker.value = "This Link Is Incomplete";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = 'CREATE SMART LINK';
      theVer.value = appVer.innerHTML;
      setTimeout(function() {
        checker.style.cursor = "default";
      }, seconds*1000);
    }
  }

  if (link.value.includes("YOUTU.BE") && link.value.length <= 100) {
    {
      copy.style.visibility = "hidden";
      checker.value = "This Link Is Incomplete";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = 'CREATE SMART LINK';
      theVer.value = appVer.innerHTML;
      setTimeout(function() {
        checker.style.cursor = "default";
      }, seconds*1000);
    }
  }

  if (link.value.includes("youtube.com") && link.value.length <= 100) {
    {
      copy.style.visibility = "hidden";
      checker.value = "This Link Is Incomplete";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = 'CREATE SMART LINK';
      theVer.value = appVer.innerHTML;
      setTimeout(function() {
        checker.style.cursor = "default";
      }, seconds*1000);
    }
  }

  if (link.value.includes("YOUTUBE.COM") && link.value.length <= 100) {
    {
      copy.style.visibility = "hidden";
      checker.value = "This Link Is Incomplete";
      checker.style.color = "red";
      checker.style.visibility = "visible";
      generator.innerHTML = 'CREATE SMART LINK';
      theVer.value = appVer.innerHTML;
      setTimeout(function() {
        checker.style.cursor = "default";
      }, seconds*1000);
    }
  }

  // Pentru youtub.be
  if (link.value.includes("youtu.be/") && link.value.length <= 100) {
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

  if (link.value.includes("YOUTU.BE/") && link.value.length <= 100) {
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

  // Pentru youtube.com
  if (link.value.includes("youtube.com/watch?v=") && link.value.length <= 100) {
    {
      copy.style.visibility = "hidden";
      checker.value = root + brutID;
      checker.style.color = "green";
      checker.style.textAlign = "left";
      checker.style.visibility = "visible";
      generator.innerHTML = 'Copy Link';
      theVer.value = appVer.innerHTML;
      generator.setAttribute( "onClick", "javascript: copyLink();" );
    }
  }

  if (link.value.includes("YOUTUBE.COM/watch?v=") && link.value.length <= 100) {
    {
      copy.style.visibility = "hidden";
      checker.value = root + brutID;
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