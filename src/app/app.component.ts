import { Component } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {Event, Router,NavigationStart,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edesk';

  showLoadingIndicator=true;
  constructor(private spinner: NgxSpinnerService,private router:Router) {
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator=true;
        spinner.show();
      }
      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator=false;
        spinner.hide();
      }
    });

}


ngOnInit(){
}
}
