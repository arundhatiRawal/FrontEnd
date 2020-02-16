import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cpu } from './cpu';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CpuService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/users';
  //private userUrl = '/api';

  public getCpuDetails() {
    return this.http.get<Cpu[]>(this.userUrl);
  }

}