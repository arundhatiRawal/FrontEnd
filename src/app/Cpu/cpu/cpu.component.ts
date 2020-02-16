import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CpuService } from './cpu.service'
import { Cpu } from './cpu'
@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {

  cpu : Cpu[];
  constructor(private router: Router, private cpuService: CpuService) { }

  ngOnInit() {
    this.cpuService.getCpuDetails()
    .subscribe( data => {
      this.cpu = data;
      console.log("heythere"+data);
    });
  };

  getCpuDetails(cpu:Cpu): void {
    this.cpuService.getCpuDetails()
    .subscribe( data => {
      this.cpu = data;
    });
  };

}
