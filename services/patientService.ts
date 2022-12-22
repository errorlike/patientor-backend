import patientData from '../data/patients.json';
import { NoSsnPatient, Patient } from '../types';

const patients: Patient[] = patientData;

const getPatients = (): NoSsnPatient[] => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return patients.map(({ ssn, ...noSSnpatient }) => {
        return noSSnpatient;
    });
};

export { getPatients };
