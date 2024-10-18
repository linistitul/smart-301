// ====== Inlocuire buton cu tasta enter ======
function checkForEnterKey() {
  if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById("generate").click();
  }
}

// ====== App Init ======
window.onload = function app() {
  // App Defaults
  document.getElementById("ver").innerHTML = "Release 〢 v2.3.2";
  document.getElementById("rawlink").value = '';

  // Detectie link pentru Youtube
  if (window.location.search.includes('yt')) {
    document.getElementById("go").innerHTML = 'Enter Your YouTube Link';
    document.getElementById('rawlink').setAttribute('maxlength', 200);
    document.getElementById("rawlink").setAttribute('name', 'Original_Link');
    document.getElementById('generate').onclick = generateYoutubeLink;
    document.getElementById("anchorA").href="/app?=ig";
    document.getElementById("anchorB").href="/app?=tw";
    document.getElementById("icoA").src = "https://gocdn.frontfacer.com/img/icons/ig-dev1.png";
    document.getElementById("icoB").src = "https://gocdn.frontfacer.com/img/icons/tw-dev1.png";
  }

  // Detectie link pentru Instagram
  if (window.location.search.includes('ig')) {
    document.getElementById("go").innerHTML = 'Enter Your Instagram Username';
    document.getElementById("rawlink").style.textAlign = "center"; 
    document.getElementById('rawlink').setAttribute('maxlength', 30);
    document.getElementById("rawlink").setAttribute('name', 'Username');
    document.getElementById('generate').onclick = generateInstagramLink;
    document.getElementById("anchorA").href="/app?=yt";
    document.getElementById("anchorB").href="/app?=tw";
    document.getElementById("icoA").src = "https://gocdn.frontfacer.com/img/icons/yt-dev1.png";
    document.getElementById("icoB").src = "https://gocdn.frontfacer.com/img/icons/tw-dev1.png";
  }

  // Detectie link pentru Twitter
  if (window.location.search.includes('tw')) {
    document.getElementById("go").innerHTML = 'Enter Your Twitter Username';
    document.getElementById("rawlink").style.textAlign = "center"; 
    document.getElementById('rawlink').setAttribute('maxlength', 15);
    document.getElementById("rawlink").setAttribute('name', 'Username');
    document.getElementById('generate').onclick = generateTwitterLink;
    document.getElementById("anchorA").href="/app?=yt";
    document.getElementById("anchorB").href="/app?=ig";
    document.getElementById("icoA").src = "https://gocdn.frontfacer.com/img/icons/yt-dev1.png";
    document.getElementById("icoB").src = "https://gocdn.frontfacer.com/img/icons/ig-dev1.png";
  }
}

// ====== Youtube ======
function generateYoutubeLink() {
  // Radacini
  let root = "https://smart301.linistitul.ro/watch/";
  let url = document.getElementById("rawlink").value;
  
  // Decompunerea link-ului de Youtube
  let parts = url.split('/');
  let id = parts.pop();
  let brutParts = url.split('?v=');
  let brutID = brutParts.pop();

  // Proces #1 - Caseta de link este goala
  if (document.getElementById("rawlink").value.length == 0) {
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("validation").value = "Please Enter Your Link";
    document.getElementById("validation").style.color = "red";
    document.getElementById("validation").style.visibility = "visible";
    document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
    console.log('Report tag #1')
  }

  // Proces #2 - Caseta de link a fost completata
  else if (document.getElementById("rawlink").value.length >= 1 && document.getElementById("rawlink").value.length <= Infinity) {
    console.log('Report tag #2')
    // Proces #3 - Link-ul introdus este prea lung
    if (document.getElementById("rawlink").value.length >= 100) {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = "Woooo... That's too big!";
      document.getElementById("validation").style.color = "red";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      console.log('Report tag #3')
    }
    // Proces #4 - A fost introdus un link corect de tip youtu.be
    else if (document.getElementById("rawlink").value.includes("youtu.be/")) {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = root + id;
      document.getElementById("validation").style.color = "green";
      document.getElementById("validation").style.textAlign = "left";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("generate").innerHTML = 'Copy Link';
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      document.getElementById("generate").setAttribute("onClick", "javascript: copyLink();");
      console.log('Report tag #4')
    }
    // Proces #5 - A fost introdus un link corect de tip youtube.com
    else if (document.getElementById("rawlink").value.includes("youtube.com/watch?v=")) {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = root + brutID;
      document.getElementById("validation").style.color = "green";
      document.getElementById("validation").style.textAlign = "left";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("generate").innerHTML = 'Copy Link';
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      document.getElementById("generate").setAttribute("onClick", "javascript: copyLink();");
      console.log('Report tag #5')
    }
    // Proces #6 - A fost introdus un link necorespunzator
    else {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = "This link seems incorrect";
      document.getElementById("validation").style.color = "red";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      console.log('Report tag #6')
    }
  }
}

// ====== Instagram ======
function generateInstagramLink() {
  // Radacini
  let root = "https://smart301.linistitul.ro/s/ig/";
  let id = document.getElementById("rawlink").value;

  // Proces #1 - Caseta este goala
  if (document.getElementById("rawlink").value.length == 0) {
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("validation").value = "Enter Your Username";
    document.getElementById("validation").style.color = "red";
    document.getElementById("validation").style.visibility = "visible";
    document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
    console.log('Report tag #1')
  }

  // Proces #2 - Caseta a fost completata
  else if (document.getElementById("rawlink").value.length >= 1 && document.getElementById("rawlink").value.length <= Infinity) {
    console.log('Report tag #2')
    // Proces #3 - Caseta a fost completa cu link in loc de username
    if (document.getElementById("rawlink").value.includes("http://") || document.getElementById("rawlink").value.includes("https://") || document.getElementById("rawlink").value.includes("instagram.com") || document.getElementById("rawlink").value.includes("/") || document.getElementById("rawlink").value.includes("@")) {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = "Only Your Username";
      document.getElementById("validation").style.color = "red";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      console.log('Report tag #3')
    }
    // Proces #4 - Caseta a fost completa corect
    else {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = root + id;
      document.getElementById("validation").style.color = "green";
      document.getElementById("validation").style.textAlign = "left";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("generate").innerHTML = 'Copy Link';
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      document.getElementById("generate").setAttribute("onClick", "javascript: copyLink();");
      console.log('Report tag #4')
    }
  }
}

// ====== Twitter ======
function generateTwitterLink() {
  // Radacini
  let root = "https://smart301.linistitul.ro/s/tw/";
  let id = document.getElementById("rawlink").value;

  // Proces #1 - Caseta este goala
  if (document.getElementById("rawlink").value.length == 0) {
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("validation").value = "Enter Your Username";
    document.getElementById("validation").style.color = "red";
    document.getElementById("validation").style.visibility = "visible";
    document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
    console.log('Report tag #1')
  }

  // Proces #2 - Caseta a fost completata
  else if (document.getElementById("rawlink").value.length >= 1 && document.getElementById("rawlink").value.length <= Infinity) {
    console.log('Report tag #2')
    // Proces #3 - Caseta a fost completa cu link in loc de username
    if (document.getElementById("rawlink").value.includes("http://") || document.getElementById("rawlink").value.includes("https://") || document.getElementById("rawlink").value.includes("twitter.com") || document.getElementById("rawlink").value.includes("/") || document.getElementById("rawlink").value.includes("@")) {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = "Only Your Username";
      document.getElementById("validation").style.color = "red";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      console.log('Report tag #3')
    }
    // Proces #4 - Caseta a fost completa corect
    else {
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("validation").value = root + id;
      document.getElementById("validation").style.color = "green";
      document.getElementById("validation").style.textAlign = "left";
      document.getElementById("validation").style.visibility = "visible";
      document.getElementById("generate").innerHTML = 'Copy Link';
      document.getElementById("usedAppVer").value = document.getElementById("ver").innerHTML;
      document.getElementById("generate").setAttribute("onClick", "javascript: copyLink();");
      console.log('Report tag #4')
    }
  }
}

// ====== Dupa ce genereaza link-URL, apesi sa il copiezi ======
function copyLink() {
  document.getElementById("validation").select();
  document.getElementById("validation").setSelectionRange(0, 99999)
  document.execCommand("copy");
  document.getElementById("copy").style.visibility = "visible";
  document.getElementById("validation").style.textAlign = "center";
  setTimeout(function() {
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("generate").innerHTML = 'CREATE NEW LINK';
    document.getElementById("rawlink").value = '';
    document.getElementById("validation").value = '';
  }, 2000);
  if (window.location.search.includes('yt')) {
    document.getElementById("generate").setAttribute("onClick", "javascript: generateYoutubeLink();");
  }
  else if (window.location.search.includes('ig')) {
    document.getElementById("generate").setAttribute("onClick", "javascript: generateInstagramLink();");
  }
  else if (window.location.search.includes('tw')) {
    document.getElementById("generate").setAttribute("onClick", "javascript: generateTwitterLink();");
  }
  event.preventDefault()
}