import { Component, OnInit } from '@angular/core';
import {WebserviceService} from '../../service/webservice.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-moshahedeh-darkhast-service',
  templateUrl: './moshahedeh-darkhast-service.component.html',
  styleUrls: ['./moshahedeh-darkhast-service.component.css']
})
export class MoshahedehDarkhastServiceComponent implements OnInit {

  user ={
    code_rahgiri: ''
  }
  codeRahgiri=new String("");
  empetyCodeRahgiri=false;
  NAP_ERROR=false;
  NAP_SUCCEED=false;
  submitted=false;
  allRef;
  allResult;
  constructor(private  service:WebserviceService,private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.NAP_SUCCEED=false;
  }
  onSubmit(){
    this.spinner.show();
    var lengthcodeRahgiri= new String(this.codeRahgiri);
    if (lengthcodeRahgiri.length<=0) {
      console.log("کد رهگیری را وارد نمائید");
      this.NAP_SUCCEED=false;
      this.NAP_ERROR=false;
      this.empetyCodeRahgiri=true;
    }
    //AA5M45
    else {
      this.service.fetchMoshahedehNatije(this.codeRahgiri).subscribe(
          (data) => {
            this.spinner.hide();
            this.empetyCodeRahgiri=false;
            this.NAP_ERROR=false;
            if (data.valueOf()['resultCode'] == "NAP_SUCCEED") {
              this.NAP_SUCCEED=true;
              this.allRef=data.valueOf()['allRef'];
              this.allResult=data.valueOf()['allResult'];
              console.log(this.allRef);
            } else {
              this.NAP_ERROR=true;
              this.NAP_SUCCEED=false;
              this.empetyCodeRahgiri=false;
              console.log("کد رهگیری معتبر نیست");
            }
          })
    }

  }

}
