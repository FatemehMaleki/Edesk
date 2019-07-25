import { Component, OnInit } from '@angular/core';
import {WebserviceService} from '../../service/webservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-mainbody2',
  templateUrl: './mainbody2.component.html',
  styleUrls: ['./mainbody2.component.css']
})
export class Mainbody2Component implements OnInit {

  result;
  question_onvan;
  quetionForm:FormGroup;
  submitted = false;
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

  SendSuccess:boolean=false;
  indexChecked;
  constructor(private service:WebserviceService,private  http:HttpClient,private formBuilder:FormBuilder ) {
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
          console.log(data['allData'])
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
        (error)=>{
          console.log(error)
        }
    )}

  OnSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.quetionForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.quetionForm.value));
    this.Fetche_RadioButton(this.quetionForm.value)
    this.SendSuccess=false;
    console.log(this.ResponsQuestion);
    this.ResponsQuestion.userAgent='rasoul';
    this.service.Post_createPublicPolling(this.ResponsQuestion).subscribe(
        (data) =>{
          this.SendSuccess=true;
          console.log("نظرسنجی ثبتش شد"+data);
        },
        (err) => {
          // this.result=false;
          console.log('error='+err)}
    );

  }
  get f() { return this.quetionForm.controls; }

}
