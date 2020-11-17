import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'patient.action.component',
  templateUrl: './patient.action.component.html',
  styleUrls: ['./patient.action.component.css']
})
export class PatientActionComponent implements OnInit {

  @Input() fromParent;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    
    console.log(this.fromParent);
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}