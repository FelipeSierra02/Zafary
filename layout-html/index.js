  
const home = document.querySelector('#Home');
const wazapp = document.querySelector('#wazap');
const ezpotify = document.querySelector('#espotify');
const titulo = document.querySelector('#Titulo');


home.addEventListener('click', LlamarHome);

function LlamarHome() {
    document.getElementById("iFrame").src = "../Home/index.html";
    titulo.innerHTML = "Zafary<br>La mejor forma<br>de ver los sitios web.";
}

wazapp.addEventListener('click', LlamarWazap);

function LlamarWazap() {
    document.getElementById("iFrame").src = "../wazap/index.html";
    titulo.innerHTML = "WhattzApp";
}

ezpotify.addEventListener('click', LlamarEspotify);

function LlamarEspotify() {
    document.getElementById("iFrame").src = "../espotify-html/index.html";
    titulo.innerHTML = "Espotify";
}