let list = document.querySelectorAll("li");

let greenGems = ['explosive trap','lesser poison support','onslaught support','herald of ice','trap and mine damage support', 'added cold damage','chain support'];
let blueGems = ['freezing pulse','orb of storms','elemental proliferation support','frost blink','arcane surge support','added lightning damage support','flame dash','arc','frost bomb','herald of thunder','wave of conviction','controlled destruction support','conductivity','lightning spire trap'];

function addColor (el) {
    if  (greenGems.some(name => el.innerText.includes(name))) {
        el.classList.add('green')
    } else if (blueGems.some(name => el.innerText.includes(name))) {
        el.classList.add('blue')
    } else {
        console.log('no match')
    }
}


for (let i = 0; i < list.length; i++) {
    addColor(list[i]);
}

