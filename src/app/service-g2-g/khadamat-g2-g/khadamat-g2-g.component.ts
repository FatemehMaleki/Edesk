import { Component, OnInit } from '@angular/core';
import {WebserviceService} from '../../service/webservice.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-khadamat-g2-g',
  templateUrl: './khadamat-g2-g.component.html',
  styleUrls: ['./khadamat-g2-g.component.css']
})
export class KhadamatG2GComponent implements OnInit {

  x1:any;
  x2:any;
  x3:any;
  x4:any;
  x5:any;
  x6:any;
  x7:any;
  x8:any;
  x9:any;
  x10:any;
  x11:any;
  x12:any;
  x13:any;
  x14:any;
  x15:any;
  x16:any;
  x17:any;

  loading = true;
  onvan:string[]=[];
  processCode:string[]=[];
  UUID:string[]=[];
  constructor(private servi: WebserviceService,private router:Router, private spinner: NgxSpinnerService) {

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
          console.log(data['allProcess'])
          this.x1=data.valueOf()['allProcess'][2]
          this.onvan[0]=this.x1['onvan']
          this.processCode[0]=this.x1['processCode']
          this.UUID[0]=this.x1['uuid']
          //jjjjjjjjjjjj
          this.x2=data.valueOf()['allProcess'][4]
          this.onvan[1]=this.x2['onvan']

          this.processCode[1]=this.x2['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x3=data.valueOf()['allProcess'][7]
          this.onvan[2]=this.x3['onvan']
          this.processCode[2]=this.x3['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x4=data.valueOf()['allProcess'][8]
          this.onvan[3]=this.x4['onvan']
          this.processCode[3]=this.x4['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x5=data.valueOf()['allProcess'][9]
          this.onvan[4]=this.x5['onvan']
          this.processCode[4]=this.x5['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x6=data.valueOf()['allProcess'][10]
          this.onvan[5]=this.x6['onvan']
          this.processCode[5]=this.x6['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x7=data.valueOf()['allProcess'][11]
          this.onvan[6]=this.x7['onvan']
          this.processCode[6]=this.x7['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x8=data.valueOf()['allProcess'][12]
          this.onvan[7]=this.x8['onvan']
          this.processCode[7]=this.x8['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x9=data.valueOf()['allProcess'][13]
          this.onvan[8]=this.x9['onvan']
          this.processCode[8]=this.x9['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x10=data.valueOf()['allProcess'][14]
          this.onvan[9]=this.x10['onvan']
          this.processCode[9]=this.x10['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x11=data.valueOf()['allProcess'][15]
          this.onvan[10]=this.x11['onvan']
          this.processCode[10]=this.x11['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x12=data.valueOf()['allProcess'][16]
          this.onvan[11]=this.x12['onvan']
          this.processCode[11]=this.x12['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x13=data.valueOf()['allProcess'][17]
          this.onvan[12]=this.x13['onvan']
          this.processCode[12]=this.x13['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x14=data.valueOf()['allProcess'][19]
          this.onvan[13]=this.x14['onvan']
          this.processCode[13]=this.x14['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x15=data.valueOf()['allProcess'][20]
          this.onvan[14]=this.x15['onvan']
          this.processCode[14]=this.x15['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x16=data.valueOf()['allProcess'][21]
          this.onvan[15]=this.x16['onvan']
          this.processCode[15]=this.x16['processCode']
          //kkkkkkkkkkkkkkkkk
          this.x17=data.valueOf()['allProcess'][22]
          this.onvan[16]=this.x17['onvan']
          this.processCode[16]=this.x17['processCode']

        }
        ,
        (error: any) => {
          this.router.navigate(['/error']);
        }
    )
  }


}
