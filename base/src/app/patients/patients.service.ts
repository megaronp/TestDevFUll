import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {environment} from '../../environments/environment';
import {Patient} from '../patients/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  endpoint = '';

  constructor( private http: HttpClient ) {
    this.endpoint = environment.url +  '/patient';
  }

  get(query = '') {
    return this.http.get<Patient[]>(this.endpoint + '?' + query );
  }

  getById(id: number) {
    return this.http.get<Patient>(this.endpoint + '/' + id);
  }

  create(patient: Patient) {
    return this.http.post<Patient>(this.endpoint, patient);
  }

  update(patient: Patient) {
    console.log(patient);
    try{
      return this.http.put<Patient>( this.endpoint + '/' + patient.id, patient );
    }catch(e){
      console.error(e);
    }
    
  }

  delete(id: number) {
    return this.http.delete(this.endpoint + '/' + id);
  }

}
