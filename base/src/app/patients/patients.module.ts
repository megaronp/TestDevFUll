import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsService } from './patients.service';
import { PatientActionComponent } from './actions/patient.action.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [PatientsListComponent, PatientActionComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    ReactiveFormsModule ,
    NgxMaskModule.forRoot(), 
  ],
  providers:[
    PatientsService,
    DatePipe
  ],
  entryComponents: [PatientActionComponent],
})
export class PatientsModule { }
