import { Component, OnInit } from '@angular/core';
import { RecordServiceService } from '../record-service.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
  providers: [RecordServiceService]
})
export class EmployeeInfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromServiceClass1(){
    this.infoReceived1 = this.recservice.getinfo1()
  }
  getInfoFromServiceClass2(){
    this.infoReceived2 = this.recservice.getinfo2()
  }
  getInfoFromServiceClass3(){
    this.infoReceived3 = this.recservice.getinfo3()
  }
  constructor(private recservice: RecordServiceService) { }

  ngOnInit(): void {
  }

}
