import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})

export class WebserviceService {
  headers={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,private router:Router) { }

  //GET webService
  fetchjson() {
    // return this.http.get("./assets/data/package.json")

    return this.http.get("http://185.198.252.57:4444/rest/napedeskws/doLoadProcess/1")
  .pipe(
        catchError(this.handleError)
    );
  }
  fetchProcessUUID() {
    // return this.http.get("./assets/data/package.json")

    return this.http.get("http://185.198.252.57:4444/rest/napedeskws/doLoadProcessKeyValue/1")
        .pipe(
            catchError(this.handleError)
        );
  }
  fetchQuestion() {
    // return this.http.get("./assets/data/package.json")

    return this.http.get("http://185.198.252.57:4444/rest/napedeskws/loadActiveQuestion/1")
        .pipe(
            catchError(this.handleError)
        );
  }
  fetchMoshahedehNatije(codeRahgiri:any){
    return this.http.get("http://185.198.252.57:4444/rest/napedeskws/doLoadResult/"+codeRahgiri)

  }
  findPollingOfQuestion(qustionUUID){
    return this.http.get("http://185.198.252.57:4444/rest/napedeskws/findPollingOfQuestion/"+qustionUUID)

  }
  fetch_ProcessRR(uuid:any){

    return this.http.get("http://185.198.252.57:4444/rest/napedeskws/loadProcessRR/"+uuid)

  }
  fetchCodeRahgiri(codeRahgiri:any){
  return this.http.get("http://185.198.252.57:4444/rest/napedeskws/loadProcessByCodeRahgiri/"+codeRahgiri);

}
  //POST webService
  Post_processUpload(data:any){
    var url = 'http://185.198.252.57:4444/rest/napedeskws/uploadProcess';
    return this.http.post<any>(url,data,this.headers);
  }
  Post_createFixedPolling(data:any){
    const url = 'http://185.198.252.57:4444/rest/napedeskws/createFixedPolling';
    return this.http.post<any>(url,data,this.headers);

  }
  Post_createPublicPolling(data:any){
  const url = 'http://185.198.252.57:4444/rest/napedeskws/createPublicPolling';
  return this.http.post<any>(url,data,this.headers);
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // this.flag=true;
      console.error('خطا در شبکه یا کلاینت:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('خطا در سمت سرور');
    // this.router.navigate(['/error404']);

  };
}
