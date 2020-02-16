import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disk } from './disk';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DiskService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/users';
  //private userUrl = '/api';

  public getDiskDetails() {
    return this.http.get<Disk[]>(this.userUrl);
  }


}