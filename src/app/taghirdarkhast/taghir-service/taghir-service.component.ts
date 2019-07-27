import { Component, OnInit } from '@angular/core';
import {WebserviceService} from '../../service/webservice.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-taghir-service',
  templateUrl: './taghir-service.component.html',
  styleUrls: ['./taghir-service.component.css']
})
export class TaghirServiceComponent implements OnInit {
  formGroup: FormGroup;
  nameFormGroup: FormGroup;

  secondFormGroup: FormGroup;
  code_rahgiri:''
  flage:boolean=false;
  user={
    codeMeli:'',
    firstName:'',
    lastName:'',
    tel:'',
    mobile:'',
    processUUID:'',
    address:'',
    tozihat:'',
    onvan:'',
    saveOrUpdate:'update',
    codeRahgiri:''
  }
  index;
  processUUIDOnvan;
  isEditable = true;
  codeRahgiri;
  resultOnvan;
  selectedUUID;
  step1:string[]=[];
  result:boolean=false;
  areas: string[][];
  private multis:string [][];
  onvan:string[]=[];
  processUUID:string[]=[];
  x;
  existCodeRaghiri=false;
  NAP_ERROR=false;
  NAP_SUCCEED=false;
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
  constructor(private service:WebserviceService,private http:HttpClient,public router: Router,private route: ActivatedRoute,private _formBuilder:FormBuilder,private spinner:NgxSpinnerService) {
    this.fetche_ProcessUUID();
  }
  fetche_ProcessUUID(){
    var item:number=-1;
    this.service.fetchProcessUUID().subscribe(
        (data)=>{
          for (var i =2; i <=22; i++) {
            this.x = data.valueOf()['allProcess'][i]
            var str=this.x['code'];
            var index=str.indexOf("NAP_SHEKAYAT");
            if(index!=0){
              item=item+1;
              this.onvan[item] = this.x['onvan']
              this.processUUID[item]=this.x['uuid']
            }
          }


        }
    )
  }
  findIndex(){
    this.index = this.onvan.findIndex(item => item === this.processUUIDOnvan);
    this.user.processUUID=this.processUUID[this.index];
  }
  ngOnInit() {

    this.fetchCodeRahgiri();
    // console.log(this.codeRahgiriedit)
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          processUUIDOnvan: ['', Validators.required],
          codeMeli: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          mobile: ['', Validators.required],
          phone: ['', Validators.required],
          address: ['', Validators.required],
          tozihat: ['', Validators.required],
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email]
        }),
      ])
    });
    this.nameFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });


    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });

  }
  onSubmit(){
    this.spinner.show();
    this.user.codeRahgiri=this.code_rahgiri;
    this.service.fetchCodeRahgiri(this.code_rahgiri).subscribe(
        (data)=>{
          this.spinner.hide();
          if(data['codeRahgiri']!=null) {
            this.NAP_SUCCEED=true;
            this.user.firstName = data['firstName'];
            this.user.lastName = data['lastName'];
            this.user.codeMeli = data['codeMeli'];
            this.user.mobile = data['mobile'];
            this.user.tel = data['tel'];
            this.user.address = data['address'];
            this.user.tozihat = data['tozihat'];
            // this.user.uuid = data['uuid'];
            this.flage = true;
          }
          else {this.existCodeRaghiri=true;}
        }
    )
  }
  fetchCodeRahgiri(){
    var script = (<HTMLScriptElement[]><any>document.getElementsByTagName('p'))[0];
    this.service.fetchCodeRahgiri(this.code_rahgiri).subscribe(
        (data)=>{
          this.user.firstName=data['firstName'];
          this.user.lastName=data['lastName'];
          this.user.codeMeli=data['codeMeli'];
          this.user.mobile=data['mobile'];
          this.user.tel=data['tel'];
          this.user.address=data['address'];
          script.innerHTML=data['tozihat'];
          this.user.tozihat= script.textContent;
          // console.log(script);
        }
    )
  }
  Clear(): void {
    this.codeRahgiri = '';
    this.resultOnvan='';
    this.result=false;
  }
  OnSubmit2(){
    this.spinner.show();
    this.result=false;
    this.service.Post_processUpload(this.user).subscribe(
        (data) =>{
          this.spinner.hide();
          this.isEditable = false;
          this.result=true;
          this.x = data.valueOf()['allData'][0]
          this.codeRahgiri=this.x['codeRahgiri']
          this.resultOnvan=data['resultOnvan'];
        },
        (err) => console.log('error='+err)
    );

  }
}
