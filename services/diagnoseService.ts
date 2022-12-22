import diagnoseData from '../data/diagnoses.json';
import { DiagnoseEntry } from '../types';

const getEntries = (): Array<DiagnoseEntry> => {
    return diagnoseData;
};

export { getEntries };
