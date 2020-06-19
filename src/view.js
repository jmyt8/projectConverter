import { viewBlock } from './viewBase';

// Create selection list.
export const createList = listType => {
    
    // Create List element
    const list = listType.map(e => `<li data-selection=${e}>${e}</li>`).join('');

    viewBlock.selectionList.insertAdjacentHTML('afterbegin', list);
}

// Clear selection list
export const clearList = () => {
    const list = viewBlock.selectionList;
    list.innerHTML = '';
}

// Cahnge page title
export const htmlTitle = (cat, input, output) => {
    viewBlock.blockTitle.textContent = `${cat.toUpperCase()} Converter: ${input} to ${output}`;
}

// Get input value
export const getInput = () => viewBlock.inputValue.value;

// Update output value
export const updateMainOutput = (val) => {
    viewBlock.outputValue.textContent = val;
}

export const updateAdditionalOutput = (val, unit) => {
    const markup = `
    <li class="row">
        <span class="col-value output-value state-value ${unit}">${val}</span>
        <span class="col-unit btn-unit output-unit">${unit}</span>
    </li>
    `;

    viewBlock.outputBlock.insertAdjacentHTML('beforeend', markup);
}

export const clearAdditional = () => {
    const listBlock = viewBlock.outputBlock;
    while(listBlock.firstChild) {
        listBlock.removeChild(listBlock.firstChild);
    }
}