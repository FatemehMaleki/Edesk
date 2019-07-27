import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {WebserviceService} from '../../service/webservice.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-shekait',
  templateUrl: './service-shekait.component.html',
  styleUrls: ['./service-shekait.component.css']
})
export class ServiceShekaitComponent implements OnInit {

  //
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
  isEditable = true;
  codeRahgiri;
  resultOnvan;

  index;
  result:boolean=false;
  areas: string[][];
  onvan:string[]=[];
  x;
  processUUID:string[]=[];
  processUUIDOnvan;
  formGroup: FormGroup;
  secondFormGroup: FormGroup;
  nameFormGroup: FormGroup;
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private _formBuilder: FormBuilder,private service:WebserviceService,private  http:HttpClient,public dialog: MatDialog,private spinner:NgxSpinnerService,private router:Router) {
    this.fetche_ProcessUUID();
    this.areas = new Array<Array<string>>();

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
          this.codeRahgiri=this.x['codeRahgiri']
          this.resultOnvan=data['resultOnvan'];

        },
        (err) => {
          this.result=false;
          this.router.navigate(['/error']);
        }
    );

  }
  findIndex(){
    this.index = this.onvan.findIndex(item => item === this.processUUIDOnvan);
    this.user.processUUID=this.processUUID[this.index];
  }
  fetche_ProcessUUID(){
    var item:number=-1;
    this.service.fetchProcessUUID().subscribe(
        (data)=>{
          var indices = [];
          var array=['انتقادات','شکایات'];
          for (var i =0; i <=24; i++) {

            this.x = data.valueOf()['allProcess'][i]
            var element=this.x['onvan'];
            var index=array.indexOf(element);
            while (index != -1) {
              indices.push(this.x['onvan']);
              this.onvan[index] = indices[index]
              this.processUUID[index]=this.x['uuid']
              index = array.indexOf(element, index + 1);
            }

          }

        }
    )
  }
  ngOnInit() {

    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          processUUID: new FormControl(['', Validators.required]),
          processUUIDOnvan:new FormControl(['', Validators.required]),
          codeMeli: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          mobile: ['', Validators.required],
          tel: ['', Validators.required],
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
  Clear(): void {
    this.codeRahgiri = '';
    this.resultOnvan='';
    this.result=false;
  }

}
