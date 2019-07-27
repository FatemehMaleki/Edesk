
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { WebserviceService } from 'src/app/service/webservice.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {


  result;
  quetionForm:FormGroup;
  submitted = false;
question_onvan;
// question_answer:'1';
stringResponse1:'1';
stringResponse2:'0';
stringResponse3:'0';
stringResponse4:'0';
stringResponse5:'0';
ResponsQuestion={
  response1Value:'1',
  response2Value:'0',
  response3Value:'0',
  response4Value:'0',
  response5Value:'0',
  questionUUID:'',
  userAgent:'',
}
  countResponse1Value:number=0;
  countResponse2Value:number=0;
  countResponse3Value:number=0;
  countResponse4Value:number=0;
  countResponse5Value:number=0;
  lenquestion:any=0;

  SendSuccess:boolean=false;
  indexChecked;

constructor(private service:WebserviceService,private  http:HttpClient,private formBuilder:FormBuilder,private router:Router,private spinner:NgxSpinnerService) {
  this.fetche_question();
    this.SendSuccess=false;
 }
Fetche_RadioButton(indexValue:any){
   var x=indexValue['response'];
    if(x=="1"){
        this.ResponsQuestion.response1Value='1';
        this.ResponsQuestion.response2Value='0';
        this.ResponsQuestion.response3Value='0';
        this.ResponsQuestion.response4Value='0';
        this.ResponsQuestion.response5Value='0';
    }
  if(x=="2"){
      this.ResponsQuestion.response1Value='0';
      this.ResponsQuestion.response2Value='1';
      this.ResponsQuestion.response3Value='0';
      this.ResponsQuestion.response4Value='0';
      this.ResponsQuestion.response5Value='0';
  }
  if(x=="3"){
      this.ResponsQuestion.response1Value='0';
      this.ResponsQuestion.response2Value='0';
      this.ResponsQuestion.response3Value='1';
      this.ResponsQuestion.response4Value='0';
      this.ResponsQuestion.response5Value='0';
  }
  if(x=="4"){
      this.ResponsQuestion.response1Value='0';
      this.ResponsQuestion.response2Value='0';
      this.ResponsQuestion.response3Value='0';
      this.ResponsQuestion.response4Value='1';
      this.ResponsQuestion.response5Value='0';
  }
  if(x=="5"){
      this.ResponsQuestion.response1Value='0';
      this.ResponsQuestion.response2Value='0';
      this.ResponsQuestion.response3Value='0';
      this.ResponsQuestion.response4Value='0';
      this.ResponsQuestion.response5Value='1';
  }
}
clear(){
  this.SendSuccess=false;
}
ngOnInit() {
    this.SendSuccess=false;
    this.quetionForm = this.formBuilder.group({
       response: ['', Validators.required],
    })
}
fetche_question(){
  this.service.fetchQuestion().subscribe(
      (data)=>{
       this.result= data.valueOf()['allData'][0]
        this.question_onvan=this.result['question']
        this.stringResponse1=this.result['stringResponse1']
        this.stringResponse2=this.result['stringResponse2']
        this.stringResponse3=this.result['stringResponse3']
        this.stringResponse4=this.result['stringResponse4']
        this.stringResponse5=this.result['stringResponse5']
          this.ResponsQuestion.questionUUID=this.result['uuid']
      }
      ,
      (error: any) => {
          this.router.navigate(['/error']);
      }
  )}

  OnSubmit(){
      this.submitted = true;

      // stop here if form is invalid
      if (this.quetionForm.invalid) {
          return;
      }
this.spinner.show();
 this.Fetche_RadioButton(this.quetionForm.value);
        this.SendSuccess=false;
    //
      this.ResponsQuestion.userAgent='rasoul';

      this.service.Post_createPublicPolling(this.ResponsQuestion).subscribe(
          (data) =>{
              this.spinner.hide();
              this.SendSuccess=true;

          },
          (error: any) => {
              this.router.navigate(['/error']);
          }

      );

  }
  get f() { return this.quetionForm.controls; }
  findPollingOfQuestion(){
      this.service.findPollingOfQuestion(this.ResponsQuestion.questionUUID).subscribe(
          (data)=> {
              this.countResponse1Value=0;
              this.countResponse2Value=0;
              this.countResponse3Value=0;
              this.countResponse4Value=0;
              this.countResponse5Value=0;
              this.lenquestion=0;
              var lenquestion=data.valueOf()['allData'];
              this.lenquestion=lenquestion.valueOf().length;
              for(var i=0;i<lenquestion.valueOf().length;i++){
                var response1Value= data.valueOf()['allData'][i];
                  if(response1Value['response1Value']==1){
                      this.countResponse1Value++;
                  }
                  if(response1Value['response2Value']==1){
                      this.countResponse2Value++;
                  }
                  if(response1Value['response3Value']==1){
                      this.countResponse3Value++;
                  }
                  if(response1Value['response4Value']==1){
                      this.countResponse4Value++;
                  }
                  if(response1Value['response5Value']==1){
                      this.countResponse5Value++;
                  }
              }

          },
          (error: any) => {
              this.router.navigate(['/error']);
          }
      )}

}
