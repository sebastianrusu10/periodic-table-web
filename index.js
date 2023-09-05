let clickedOnButton = false

const elements = document.querySelectorAll('.element');
const elements1 = document.querySelectorAll('.element1');
const elements2 = document.querySelectorAll('.element2');
elements.forEach((element) => {
    element.addEventListener('click', () => {
        const card = document.querySelector('#card');
        removeAllChildren(card);

        let symbol;
        for (let child of element.children) {
            if (child.className == 'symbol') {
                symbol = child.textContent
            }
        }

        const text1 = document.createElement('p');
        text1.textContent = symbol;
        const text2 = document.createElement('p');
        text2.textContent = decideContents(symbol)[0]
        const Z = document.createElement('p');
        Z.textContent = "Z = " + decideContents(symbol)[1]
        const Ar = document.createElement('p');
        Ar.textContent = "Ar = " + decideContents(symbol)[2]

        card.appendChild(text1);
        card.appendChild(text2);
        card.appendChild(Z);
        card.appendChild(Ar);
        card.style.cssText = 'background: green; border-radius: 16px; border: 3px solid white';

        clickedOnButton = true
    })
});

elements1.forEach((element) => {
    element.addEventListener('click', () => {
        const card = document.querySelector('#card');
        removeAllChildren(card);

        let symbol;
        for (let child of element.children) {
            if (child.className == 'symbol') {
                symbol = child.textContent
            }
        }

        const text1 = document.createElement('p');
        text1.textContent = symbol;
        const text2 = document.createElement('p');
        text2.textContent = decideContents(symbol)[0]
        const Z = document.createElement('p');
        Z.textContent = "Z = " + decideContents(symbol)[1]
        const Ar = document.createElement('p');
        Ar.textContent = "Ar = " + decideContents(symbol)[2]

        card.appendChild(text1);
        card.appendChild(text2);
        card.appendChild(Z);
        card.appendChild(Ar);
        card.style.cssText = 'background: rgb(200, 213, 36); border-radius: 16px; border: 3px solid white';
        
        clickedOnButton = true
    })
});

elements2.forEach((element) => {
    element.addEventListener('click', () => {
        const card = document.querySelector('#card');
        removeAllChildren(card);

        let symbol;
        for (let child of element.children) {
            if (child.className == 'symbol2') {
                symbol = child.textContent
            }
        }

        const text1 = document.createElement('p');
        text1.textContent = symbol;
        const text2 = document.createElement('p');
        text2.textContent = decideContents(symbol)[0]
        const Z = document.createElement('p');
        Z.textContent = "Z = " + decideContents(symbol)[1]
        const Ar = document.createElement('p');
        Ar.textContent = "Ar = " + decideContents(symbol)[2]

        card.appendChild(text1);
        card.appendChild(text2);
        card.appendChild(Z);
        card.appendChild(Ar);
        card.style.cssText = 'background: grey; border-radius: 16px; border: 3px solid white';

        clickedOnButton = true
    })
});

function decideContents(text1){
    const text2 = periodicTable[text1][0];
    const Z = periodicTable[text1][2];
    const Ar = periodicTable[text1][1];

    return [text2, Z, Ar]
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const body = document.body;
body.addEventListener('click', ()=>{
    if (clickedOnButton) {
        console.log('va rog doamna profesoara un 10')
    } else {
        const card = document.querySelector('#card');
        removeAllChildren(card);
        card.style.cssText = 'background: none; border: none'
    }

    clickedOnButton = false
})



var periodicTable = {
    H: ["Hidrogen", 1.008, 1],
    He: ["Heliu", 4.0026, 2],
    Li: ["Litiu", 6.94, 3],
    Be: ["Beriliu", 9.0122, 4],
    B: ["Bor", 10.81, 5],
    C: ["Carbon", 12.01, 6],
    N: ["Azot", 14.01, 7],
    O: ["Oxigen", 16.00, 8],
    F: ["Fluor", 19.00, 9],
    Ne: ["Neon", 20.18, 10],
    Na: ["Sodiu", 22.99, 11],
    Mg: ["Magneziu", 24.31, 12],
    Al: ["Aluminiu", 26.98, 13],
    Si: ["Siliciu", 28.09, 14],
    P: ["Fosfor", 30.97, 15],
    S: ["Sulf", 32.07, 16],
    Cl: ["Clor", 35.45, 17],
    Ar: ["Argon", 39.95, 18],
    K: ["Potasiu", 39.10, 19],
    Ca: ["Calciu", 40.08, 20],
    Sc: ["Scandiu", 44.96, 21],
    Ti: ["Titan", 47.87, 22],
    V: ["Vanadiu", 50.94, 23],
    Cr: ["Crom", 52.00, 24],
    Mn: ["Mangan", 54.94, 25],
    Fe: ["Fier", 55.85, 26],
    Co: ["Cobalt", 58.93, 27],
    Ni: ["Nichel", 58.69, 28],
    Cu: ["Cupru", 63.55, 29],
    Zn: ["Zinc", 65.38, 30],
    Ga: ["Galiu", 69.72, 31],
    Ge: ["Germaniu", 72.63, 32],
    As: ["Arsen", 74.92, 33],
    Se: ["Seleniu", 78.96, 34],
    Br: ["Brom", 79.90, 35],
    Kr: ["Kripton", 83.80, 36],
    Rb: ["Rubidiu", 85.47, 37],
    Sr: ["Stronțiu", 87.62, 38],
    Y: ["Ytriu", 88.91, 39],
    Zr: ["Zirconiu", 91.22, 40],
    Nb: ["Niobiu", 92.91, 41],
    Mo: ["Molibden", 95.95, 42],
    Tc: ["Technetiu", 98.00, 43],
    Ru: ["Ruteniu", 101.1, 44],
    Rh: ["Rodiu", 102.9, 45],
    Pd: ["Paladiu", 106.4, 46],
    Ag: ["Argint", 107.9, 47],
    Cd: ["Cadm", 112.4, 48],
    In: ["Indiu", 114.8, 49],
    Sn: ["Staniu", 118.7, 50],
    Sb: ["Stibiu", 121.8, 51],
    Te: ["Telur", 127.6, 52],
    I: ["Iod", 126.9, 53],
    Xe: ["Xenon", 131.3, 54],
    Cs: ["Cesiu", 132.9, 55],
    Ba: ["Bariu", 137.3, 56],
    La: ["Lantan", 138.9, 57],
    Ce: ["Ceriu", 140.1, 58],
    Pr: ["Praseodimiu", 140.9, 59],
    Nd: ["Neodimiu", 144.2, 60],
    Pm: ["Promethiu", 145.0, 61],
    Sm: ["Samariu", 150.4, 62],
    Eu: ["Europiu", 152.0, 63],
    Gd: ["Gadoliniu", 157.3, 64],
    Tb: ["Terbiu", 158.9, 65],
    Dy: ["Dizprosiu", 162.5, 66],
    Ho: ["Holmiu", 164.9, 67],
    Er: ["Erbiu", 167.3, 68],
    Tm: ["Tuliu", 168.9, 69],
    Yb: ["Yterbiu", 173.0, 70],
    Lu: ["Lutețiu", 175.0, 71],
    Hf: ["Hafniu", 178.5, 72],
    Ta: ["Tantal", 180.9, 73],
    W: ["Wolfram", 183.8, 74],
    Re: ["Reniu", 186.2, 75],
    Os: ["Osmiu", 190.2, 76],
    Ir: ["Iridiu", 192.2, 77],
    Pt: ["Platină", 195.1, 78],
    Au: ["Aur", 197.0, 79],
    Hg: ["Mercur", 200.6, 80],
    Tl: ["Taliu", 204.4, 81],
    Pb: ["Plumb", 207.2, 82],
    Bi: ["Bismut", 208.9, 83],
    Po: ["Poloniu", 209.0, 84],
    At: ["Astat", 210.0, 85],
    Rn: ["Radon", 222.0, 86],
    Fr: ["Franciu", 223.0, 87],
    Ra: ["Radiu", 226.0, 88],
    Ac: ["Actiniu", 227.0, 89],
    Th: ["Toriu", 232.0, 90],
    Pa: ["Protactiniu", 231.0, 91],
    U: ["Uran", 238.0, 92],
    Np: ["Neptuniu", 237.0, 93],
    Pu: ["Plutoniu", 244.0, 94],
    Am: ["Americiu", 243.0, 95],
    Cm: ["Curium", 247.0, 96],
    Bk: ["Berkeliu", 247.0, 97],
    Cf: ["Californiu", 251.0, 98],
    Es: ["Einsteiniu", 252.0, 99],
    Fm: ["Fermiu", 257.0, 100],
    Md: ["Mendeleviu", 258.0, 101],
    No: ["Nobiu", 259.0, 102],
    Lr: ["Lawrențiu", 262.0, 103],
    Rf: ["Rutherfordiu", 267.0, 104],
    Db: ["Dubniu", 270.0, 105],
    Sg: ["Seaborgiu", 271.0, 106],
    Bh: ["Bohriu", 270.0, 107],
    Hs: ["Hassium", 277.0, 108],
    Mt: ["Meitneriu", 276.0, 109],
    Ds: ["Darmstadtiu", 281.0, 110],
    Rg: ["Roentgeniu", 280.0, 111],
    Cn: ["Coperniciu", 285.0, 112],
    Nh: ["Nihoniu", 284.0, 113],
    Fl: ["Fleroviu", 289.0, 114],
    Mc: ["Moscoviu", 288.0, 115],
    Lv: ["Livermoriu", 293.0, 116],
    Ts: ["Tennessin", 294.0, 117],
    Og: ["Oganesson", 294.0, 118],
};