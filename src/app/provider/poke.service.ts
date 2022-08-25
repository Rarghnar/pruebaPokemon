import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpService) { }

  public getPoke(): Observable<any> {
    return this.http.get<any>('/')
  }
}
