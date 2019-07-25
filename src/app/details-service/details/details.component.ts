import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebserviceService} from '../../service/webservice.service';
import {HttpClient} from '@angular/common/http';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() id: string;
  @Input() UUID:string;
  x1:any;
  onvan;
  addressMahalErae;
  nahveEraeKhedmat;
  flowChartUrl;
  flowChartPassvand;
  hazineAnjamKhedmat;
  ghavaninVaMoghararat;
  processEmail;
  processMasool;
  processMasoolNameFamily;
  processPhone;
  processShortDesc;
  zamanAnjamKhedmat;
  processCode;
  raveshEraeKhedmat;
  madarekMoredNiazKhedmat;
  identityUrl;
  identityPassvand;
  processUrl;
  processUrl1;
  processUrl2;
  processUrl3;
  processUrlOnvan;
  processUrlOnvan1;
  processUrlOnvan2;
  processUrlOnvan3;
  bayanieSathTavafogh;
  uuid;
  result;
  response:string[]=[];
  request:string[]=[];
  loading=true;
  exsistQuestion=false;
  constructor(private route: ActivatedRoute,private service: WebserviceService,private http:HttpClient,private router:Router,private spinner: NgxSpinnerService) {

  }

  ngOnInit() {

  this.spinner.show();

    this.route.paramMap.subscribe( params =>
        this.id = params.get('id'));
    this.fetchjson();
  }
  fetchjson(){
    this.service.fetchjson().subscribe(
        (data)=>{

          //this.loading=false;
          this.spinner.hide();
          console.log(data['allProcess'])
          this.x1=data.valueOf()['allProcess'][this.id]
          this.onvan=this.x1['onvan']
          this.addressMahalErae=this.x1['addressMahalErae']
          this.nahveEraeKhedmat=this.x1['nahveEraeKhedmat']
          this.hazineAnjamKhedmat=this.x1['hazineAnjamKhedmat']
          this.ghavaninVaMoghararat=this.x1['ghavaninVaMoghararat']
          this.processEmail=this.x1['processEmail']
          this.processMasool=this.x1['processMasool']
          this.processMasoolNameFamily=this.x1['processMasoolNameFamily']
          this.processPhone=this.x1['processPhone']
          this.processShortDesc=this.x1['processShortDesc']
          this.zamanAnjamKhedmat=this.x1['zamanAnjamKhedmat']
          this.processCode=this.x1['processCode']
          this.raveshEraeKhedmat=this.x1['raveshEraeKhedmat']
          this.madarekMoredNiazKhedmat=this.x1['madarekMoredNiazKhedmat']
          this.identityUrl=this.x1['identityUrl']
          this.identityPassvand=this.x1['identityPassvand']
          this.flowChartUrl=this.x1['flowChartUrl']
          this.flowChartPassvand=this.x1['flowChartPassvand']
          this.processUrl=this.x1['processUrl']
          this.processUrl1=this.x1['processUrl1']
          this.processUrl2=this.x1['processUrl2']
          this.processUrl3=this.x1['processUrl3']
          this.processUrlOnvan=this.x1['processUrlOnvan']
          this.processUrlOnvan1=this.x1['processUrlOnvan1']
          this.processUrlOnvan2=this.x1['processUrlOnvan2']
          this.processUrlOnvan3=this.x1['processUrlOnvan3']
          this.bayanieSathTavafogh=this.x1['bayanieSathTavafogh']

          this.uuid=this.x1['uuid'];

          this.fetch_RR(this.uuid);
          console.log("uuid=",this.uuid);


        }
        ,
        (error: any) => {
          this.router.navigate(['/error404']);
        }
    )
  }

  fetch_RR(uuid:any) {
    this.service.fetch_ProcessRR(uuid).subscribe(
        (data) => {
          var lenght=data.valueOf()['allData'];
          if(lenght.valueOf().length>0) {
            for (var i = 0; i < lenght.valueOf().length; i++) {
              this.result = data.valueOf()['allData'][i]
              this.request[i] = this.result['request'];
              this.response[i] = this.result['response'];
              // console.log("سوالات" + this.lenght.valueOf().length)
            }
          }else {
            this.exsistQuestion=true;
            console.log("سوالی طرح نشده" );
          }

        }
        ,
        (error: any) => {
          this.router.navigate(['/error404']);
        }
    )
  }


}
