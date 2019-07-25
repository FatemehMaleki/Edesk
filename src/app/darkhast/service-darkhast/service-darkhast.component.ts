import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebserviceService} from '../../service/webservice.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-service-darkhast',
  templateUrl: './service-darkhast.component.html',
  styleUrls: ['./service-darkhast.component.css']
})
export class ServiceDarkhastComponent implements OnInit {

  user ={
    codeMeli:'',
    firstName:'',
    lastName:'',
    tel:'',
    mobile:'',
    processUUID:'',
    address:'',
    tozihat:'',
    onvan:'',
    saveOrUpdate:'save',
  }
  index;
  processUUIDOnvan;
  isEditable = true;
  codeRahgiri;
  resultOnvan;
  result:boolean=false;

  areas: string[][];
  onvan:string[]=[];
  processUUID:string[]=[];
  x;
  formGroup: FormGroup;
  nameFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(public activatedRoute: ActivatedRoute,private _formBuilder: FormBuilder,private service:WebserviceService,private http:HttpClient,public dialog: MatDialog,private router:Router
    ,private spinner: NgxSpinnerService) {
    this.fetche_ProcessUUID();
    this.areas = new Array<Array<string>>();
  }

  ngOnInit() {
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
              // console.log( this.processUUID[item])
            }
          }
        },
        (error: any) => {
          this.router.navigate(['/error404']);
        }
    )
  }
  findIndex(){
    this.index = this.onvan.findIndex(item => item === this.processUUIDOnvan);
    // this.processUUIDOnvan=this.user.processUUID;
    console.log(this.processUUIDOnvan)
    this.user.processUUID=this.processUUID[this.index];
    console.log("index="+this.index+this.user.processUUID+this.processUUIDOnvan);
  }

  OnSubmit(){
    this.spinner.show();
    this.user.saveOrUpdate='save';
    this.codeRahgiri='';
    this.result=false;
    this.service.Post_processUpload(this.user).subscribe(
        (data) =>{
          this.spinner.hide();
          this.isEditable = false;
          this.result=true;
          this.x = data.valueOf()['allData'][0]
          // this.step1=data['allData'];
          console.log("درخواست ثبت شد"+data);
          // this.step1=this.step1[0];
          this.codeRahgiri=this.x['codeRahgiri']
          this.resultOnvan=data['resultOnvan'];
          // console.log("kod rahgiri="+this.codeRahgiri)
        },
        (error: any) => {
          this.router.navigate(['/error404']);
        }
    );

  }
  Clear(): void {
    this.codeRahgiri = '';
    this.resultOnvan='';
    this.result=false;
  }


}
