// Imports
import { viewBlock, baseData } from './viewBase';
import * as view from './view';
import modelConvert from './model';
import copyValue from './model';

/** Global state
 * 
 *  Selector function
 *  Select Category
 *  Select Input Unit
 *  Select Output Unit
 */
const state ={
    cat: 'weight',
    inputUnit: 'kg',
    outputUnit: 'g',
    inputValue: 0
};

/** A. Change category or unit */

// A1. Change Cateogry
viewBlock.blockCat.addEventListener('click', () => {
    state.listType = 'cat';
    state.list = baseData.cat;
    openSelector()
})

// A2. Change Input unit
viewBlock.inputUnit.addEventListener('click', () => {
    state.listType = 'input';
    state.list = Object.keys(baseData[state.cat]);
    openSelector()
})

// A3. Change Output unit
viewBlock.outputUnit.addEventListener('click', () => {
    state.listType = 'output';
    state.list = Object.keys(baseData[state.cat]);
    openSelector()
})

// 1. Expand and show selections.
const openSelector = () => {    
    view.clearList();
    viewBlock.selectionList.classList.add('expand');
    view.createList( state.list );
}

// 2. Select.
viewBlock.selectionList.addEventListener('click', e => {
    const selected = e.target.dataset.selection;
    if (selected) {
        if (state.listType === 'cat' && state.cat !== selected) {
            state.cat = selected;
            viewBlock.blockUnit.textContent = state.cat.toUpperCase();
            state.list = Object.keys(baseData[state.cat]);
            state.inputUnit = state.list[0];
            state.outputUnit = state.list[1];
            viewBlock.inputUnit.value = state.inputUnit;
            viewBlock.outputUnit.textContent = state.outputUnit;
        } else if (state.listType === 'input') {
            state.inputUnit = selected;
            viewBlock.inputUnit.value = state.inputUnit;
        } else if (state.listType === 'output') {
            state.outputUnit = selected;
            viewBlock.outputUnit.textContent = state.outputUnit;
        }      
    }
    state.listType = '';
    viewBlock.selectionList.classList.remove('expand');
    view.htmlTitle(state.cat, state.inputUnit, state.outputUnit);

    calc();
})

/** B. Conversion */

// Calculate
const calc = () => {

    view.clearAdditional();
    state.conversion = new modelConvert(state.cat);
    
    // Main output conversion
    state.outputValue = state.conversion.calcConv(state.inputUnit, state.outputUnit, state.inputValue);

    view.updateMainOutput(state.outputValue);
    
    // Additional output conversion
    const additional = baseData[state.cat];
    for(let unit in additional) {

        if(unit === state.inputUnit || unit === state.outputUnit) continue;
        const cur = state.conversion.calcConv(state.inputUnit, unit, state.inputValue);
        
        view.updateAdditionalOutput(cur, unit);
    }
}

// 1. Input value

viewBlock.inputValue.oninput = () => {
    state.inputValue = view.getInput();
    calc();
}

/** C. Copy */
document.addEventListener('click', element => {
    copyValue(element);
});