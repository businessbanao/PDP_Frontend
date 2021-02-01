import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()

export class FinanceService {
    
    private result:any;

    constructor(private _http: HttpClient){
        this.result = [ { id: "1", name:"shivam" }, { id: "2", name:"singh" }, { id: "3", name:"bhadauria" } ]
    }

    getResult(){
        return this.result;
    }

    createInventory(payload): Observable<any> {
      return this._http.post(`http://13.127.184.151:5000/api/v1/CreateInventry`, payload).pipe(
        tap(
          response => {},
          error => {}
        )
      );
    }

      updateInventory(id, payload): Observable<any> {
        debugger;
        return this._http.put(`http://13.127.184.151:5000/api/v1/InventryUpdate/` + id, payload).pipe(
          tap(
            response => {},
            error => {}
          )
        );
      }

      getInventory(): Observable<any> {
        return this._http.get(`http://13.127.184.151:5000/api/v1/GetInventryDetails`).pipe(
          tap(
            response => {},
            error => {}
          )
        );
      }
  
      deleteInventory(id:String): Observable<any> {
        return this._http.delete(`http://13.127.184.151:5000/api/v1/InventryDelete/`+id).pipe(
          tap(
            response => {
              console.log("delete account id : " + id + "success");
            },
            error => {
              console.log("delete account id : " + id + "failed");
            }
          )
        );
      }

}