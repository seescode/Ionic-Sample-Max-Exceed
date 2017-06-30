import { IHasId } from '../interfaces/interfaces';

export interface User extends IHasId {
    id: number;	
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    uniqueIdentifier: string;
}