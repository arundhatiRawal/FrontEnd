import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topdisk } from './topdisk';
@Injectable({
  providedIn: 'root'
})
export class TopdiskService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/users';
  //private userUrl = '/api';

  public getTopDiskDetails() {
    return this.http.get<Topdisk[]>(this.userUrl);
  }
}
