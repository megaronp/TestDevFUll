import { Component, OnInit, TemplateRef } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../patients';
import { Observable } from 'rxjs';
import {NgbModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
//import { PatientActionComponent } from '../actions/patient.action.component';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
  providers: [DatePipe]
})
export class PatientsListComponent implements OnInit {

  model: NgbDateStruct;

  patients: Observable<Patient[]>;
  contentForm: FormGroup;

  submitted = false;

  items: any[];
  closeResult = '';
  page = 1;
  total =1;
  maxPage = 1;

  constructor(private datePipe: DatePipe, private fb: FormBuilder, public service:PatientsService, private modalService: NgbModal) { 
    this.items = Array(15).fill(0);
  }

  ngOnInit(): void {
    
    this.contentForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      gender: [''],
      telephone: [''],
      birthDate: ['', Validators.required],
      lastAttendance: ['']
     });

    this.service.get().subscribe( (data) => {      
      this.patients = data['data'];
      this.maxPage = data['last_page'];
      this.page = data['current_page'];
      this.total = data['total'];
    } , 
    (error) => {       
      console.log(error);    
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contentForm.controls; }

  reloadList() {
    this.service.get().subscribe( (data) => {      
      this.patients = data['data'];   
    } , 
    (error) => {       
      console.log(error);    
    });
  }

  loadPage(page: number) {
    this.service.get('page=' + page).subscribe( (data) => {      
      this.patients = data['data'];   
    } , 
    (error) => {       
      console.log(error);    
    });
  }

  openModal(targetModal, patient) {

    this.modalService.open(targetModal);
         
    this.contentForm.patchValue({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      gender: patient.gender,
      telephone: patient.telephone,
      birthDate: this.datePipe.transform(patient.birthDate, 'dd/MM/yyyy'),
      lastAttendance: this.datePipe.transform(patient.lastAttendance, 'dd/MM/yyyy')
    });

  }

  formatDate(string){
    let dataArray = string.split('/');
    return dataArray[2]+'-'+dataArray[1]+'-'+dataArray[0];
  }

  async onSubmit() {

    this.submitted = true;

    const data = this.contentForm.getRawValue();
    // stop here if form is invalid
    if (this.contentForm.invalid) {
      return;
    }

    this.modalService.dismissAll();

    if(data.id){
      console.log(data.birthDate);
      console.log(data.lastAttendance);
      data.birthDate = this.formatDate(data.birthDate);
      data.lastAttendance = this.formatDate(data.lastAttendance);

      await this.service.update(data).subscribe( (data) => {
        console.log('Alterado com sucesso');
        this.reloadList();

      } , (error) => {
          console.log('Erro ao salvar');
      });

    }else{
      console.log(data.birthDate);
      console.log(data.lastAttendance);
      data.birthDate = this.formatDate(data.birthDate);
      data.lastAttendance = this.formatDate(data.lastAttendance);

      await this.service.create(data).subscribe( (data) => {
        console.log('Criado com sucesso');
        this.reloadList();
      } , (error) => {
          console.log('Erro ao salvar');
      });
    }

  }

}
