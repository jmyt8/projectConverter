export const viewBlock = {

    blockTitle: document.querySelector('title'),
    selectionList: document.querySelector('.selections'),
    
    // Cat
    blockCat: document.getElementById('cat'),
    blockUnit: document.getElementById('cat').querySelector('.col-value'),
    
    // Input
    inputBlock: document.getElementById('input'),
    inputValue: document.querySelector('.input-value'),
    inputUnit: document.querySelector('.input-unit'),

    // Output
    outputBlock: document.querySelector('.output-list'),
    outputValue: document.querySelector('.active-value'), 
    outputUnit: document.querySelector('.output-unit'),

};

export const baseData = {
    
    cat: [
        'weight',
        'length'
    ],
    weight: {
        mg: 1000,
        g:  1,
        kg: 0.001,
        ton: 0.000001,
        lb: 0.00220462262185,
        '🥔': 1/175
    },
    length: {
        mm: 1000,
        cm: 100,
        m: 1,
        km: 0.001,
        inch: 39.3700787,
        feet: 3.2808399,
        '🍌': 7.69230769231
    }

}