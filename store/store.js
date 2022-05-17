var kart = {
    imperfectSeed: 0,
    normalSeed: 0,
    perfectSeed: 0,
};

function addToKart(item, no) {
    kart.item = kart.item + int(no);
}

function order() {
    var email = document.createElement("a");
    email.href = `mailto=codingplusgaming@gmail.com&subject=Team Green Order&body=${kart}`;
    email.click();
}
