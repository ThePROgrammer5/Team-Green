var order = {
    imperfectSeed: 0,
    nSeed: 0,
    pSeed: 0,
};

function addToKart(item, no) {
    kart.item = kart.item + int(no);
}

function order() {
    var email = document.createElement("a");
    email.href = `mailto=codingplusgaming@gmail.com&subject=Team Green Order&body=${order}`;
    email.click();
}