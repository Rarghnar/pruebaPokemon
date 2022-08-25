import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.url
  }

  get<type>(path:string): Observable<type> {
    return this.httpClient.get(this.baseUrl+path)
      .pipe(map((data:any) => {
        return data as type
      }))
  }
}
