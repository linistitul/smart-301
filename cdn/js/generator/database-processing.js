// Procesarea bazei de date
const scriptYT = 'https://script.google.com/macros/s/AKfycbxNLmgsJMje4dftHV5elx9Zos-GJzfub7V199QhX60pITEd-K_eCQ2XSsDgHINyRpTJ/exec'
const scriptIG = 'https://script.google.com/macros/s/AKfycbw75v8FC16wqBW1WthNxq7efJH_yau9LKAhZIpu2VaxaYJRNJB0tHi3qezxqme9-CBvdw/exec'
const scriptTW = 'https://script.google.com/macros/s/AKfycbxP64xH7jMU78YoeVFV_ljmXFN6RJrCsH8CTuMK6bpUL8Obw0omC9oj3wqzhr8b8dbI9Q/exec'
const form = document.forms['Smart301']

// Trimite inputul catre baza de date
let query = window.location.search;
form.addEventListener ("submit", e => {
        if (query.includes('yt')) {
            e.preventDefault()
            fetch(scriptYT, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        }
        else if (query.includes('ig')) {
            e.preventDefault()
            fetch(scriptIG, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        }
        else if (query.includes('tw')) {
            e.preventDefault()
            fetch(scriptTW, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        }
    }
);

// Inregistreaza adresa IPv4 a inputului
const ipFormInput = document.getElementById('userIPv4');
fetch('https://api.ipify.org?format=json')
.then((response) => { return response.json() })
.then((json) => {
    const ip = json.ip;
    ipFormInput.value = ip;
    console.log(ip);
})
.catch((err) => { console.error(`Error getting IP Address: ${err}`) })

// Inregistreaza adresa IPv6 a inputului
const ipFormInputV6 = document.getElementById('userIPv6');
fetch('https://ipify.org?format=json')
.then((response) => { return response.json() })
.then((json) => {
    const ip = json.ip;
    ipFormInputV6.value = ip;
    console.log(ip);
})
.catch((err) => { console.error(`Error getting IP Address: ${err}`) })