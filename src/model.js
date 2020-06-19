import {baseData} from './viewBase';
import NP from 'number-precision';

export default class modelConvert {

    constructor(type) {
        this.data = baseData[type];
        NP.enableBoundaryChecking(false);    
    } 

    calcConv(inputUnit, outputUnit, inputValue) {
        const num = NP.divide(this.data[outputUnit], this.data[inputUnit]);
        const outputValue = NP.times(inputValue, num);
        return outputValue;
    }

};