import { Component, OnInit } from '@angular/core';
import {WebserviceService} from '../../service/webservice.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-service-nazarsanji',
  templateUrl: './service-nazarsanji.component.html',
  styleUrls: ['./service-nazarsanji.component.css']
})
export class ServiceNazarsanjiComponent implements OnInit {

  submitted = false;
  user ={
    processUUID:'',
    jensiat:'',
    sen:'',
    tahsilat:'',
    shoghl:'',
    refCount:'',
    answer1:'',
    answer2:'',
    answer3:'',
    answer4:'',
    answer5:'',
    answer6:'',
    answer7:'',
    answer8:'',
    answer9:'',
    answer10:'',
    answer11:'',
    answer12:'',
    answer13:'',
    answer14:'',
    answer15:'',
    answer16:'',
    tozihat:'',

  }
  index;
  processUUIDOnvan;

  answer: string[] = ['خیلی کم', 'کم', 'متوسط', 'زیاد'];
  // public Editor = ClassicEditor;
  formGroupUser: FormGroup;
  onvan:string[]=[];
  processUUID:string[]=[];
  SendSuccess:boolean=false;
  x;
  constructor(private service:WebserviceService,private _formBuilder: FormBuilder,private http:HttpClient,private router:Router
    ,private spinner:NgxSpinnerService) {
    this.fetche_ProcessUUID();
    this.SendSuccess=false;
  }
  findIndex(){
    var uuid:string;
    this.index = this.onvan.findIndex(item => item === this.f.processUUID.value);
    uuid=this.processUUID[this.index];
    this.f.processUUID.setValue(uuid);
    this.SendSuccess=false;
  }
  fetche_ProcessUUID(){
    
    var item:number=-1;
    this.service.fetchProcessUUID().subscribe(
        (data)=>{
          this.spinner.hide();
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
  ngOnInit() {
    this.spinner.show();
    this.formGroupUser = this._formBuilder.group({
      jensiat: ['', Validators.required],
      sen: ['',Validators.required],
      tahsilat:['', Validators.required],
      shoghl:['', Validators.required],
      refCount: ['', Validators.required],
      processUUID:['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      answer5: ['', Validators.required],
      answer6: ['', Validators.required],
      answer7: ['', Validators.required],
      answer8: ['', Validators.required],
      answer9: ['', Validators.required],
      answer10: ['', Validators.required],
      answer11: ['', Validators.required],
      answer12: ['', Validators.required],
      answer13: ['', Validators.required],
      answer14: ['', Validators.required],
      answer15: ['', Validators.required],
      answer16: ['', Validators.required]
    })
  }
  get f() { return this.formGroupUser.controls; }
  OnSubmit(){
    this.submitted = true;
    if (this.formGroupUser.invalid) {
      return;
    }

    //     //find index uuid
    this.spinner.show();
    var uuid:string;
    this.index = this.onvan.findIndex(item => item === this.f.processUUID.value);
    uuid=this.processUUID[this.index];
    this.SendSuccess=false;
    this.user.processUUID=uuid;
    this.user.jensiat=this.f.jensiat.value;
    this.user.sen=this.f.sen.value;
    this.user.tahsilat=this.f.tahsilat.value;
    this.user.shoghl=this.f.shoghl.value;
    this.user.refCount=this.f.refCount.value;
    this.user.answer1=this.f.answer1.value;
    this.user.answer2=this.f.answer2.value;
    this.user.answer3=this.f.answer3.value;
    this.user.answer4=this.f.answer4.value;
    this.user.answer5=this.f.answer5.value;
    this.user.answer6=this.f.answer6.value;
    this.user.answer7=this.f.answer7.value;
    this.user.answer8=this.f.answer8.value;
    this.user.answer9=this.f.answer9.value;
    this.user.answer10=this.f.answer10.value;
    this.user.answer11=this.f.answer11.value;
    this.user.answer12=this.f.answer12.value;
    this.user.answer13=this.f.answer13.value;
    this.user.answer14=this.f.answer14.value;
    this.user.answer15=this.f.answer15.value;
    this.user.answer16=this.f.answer16.value;
    this.service.Post_createFixedPolling(this.user).subscribe(
        (data) =>{
          this.spinner.hide();
          this.SendSuccess=true;
        },
        (error: any) => {
          this.router.navigate(['/error']);
        }
    );

  }

}
