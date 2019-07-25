import { Component, OnInit } from '@angular/core';
import {WebserviceService} from '../../service/webservice.service';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-khadamat-g2-b',
  // template: `<div><router-outlet></router-outlet></div>`,
  // template:`<app-top-menu></app-top-menu>`,
  templateUrl: './khadamat-g2-b.component.html',
  styleUrls: ['./khadamat-g2-b.component.css']
})
export class KhadamatG2BComponent implements OnInit {

  x:any;
  y:any;
  z:any;
  onvan:string[]=[];
  processCode:string[]=[];

  message:string="20";
  loading=true;

  constructor(private servi: WebserviceService,private router:Router,private spinner: NgxSpinnerService) {
    this.fetchjson();
  }

  ngOnInit() {

    this.spinner.show();
    this.fetchjson();
  }

  fetchjson(){
    this.servi.fetchjson().subscribe(
        (data)=>{
          //this.loading=false;
          this.spinner.hide();
          console.log(data)
          this.x=data.valueOf()['allProcess'][3]
          this.onvan[0]=this.x['onvan']
          this.processCode[0]=this.x['processCode']

          this.y=data.valueOf()['allProcess'][5]
          this.onvan[1]=this.y['onvan']
          this.processCode[1]=this.y['processCode']


          this.z=data.valueOf()['allProcess'][18]
          this.onvan[2]=this.z['onvan']
          this.processCode[2]=this.z['processCode']

        },
        (error: any) => {
          // this.router.navigate(['/error404']);
        }
    )

  }

}
