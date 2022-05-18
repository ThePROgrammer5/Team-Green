var kart = {
    imperfectSeed: 0,
    normalSeed: 0,
    perfectSeed: 0,
};

function addToKart(item, no) {
    kart.item = kart.item + int(no);
}

function order() {
    document.getElementById("orderL").setAttribute('href', "mailto&to=codingplusgaming@gmail.com");
}
