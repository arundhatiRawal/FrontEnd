import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiskService } from './disk.service'
import { Disk } from './disk'

@Component({
  selector: 'app-disk',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.css']
})

export class UserComponent implements OnInit {

  disk: Disk[];

  constructor(private router: Router, private diskService: DiskService) {

  }

  ngOnInit() {
    this.diskService.getDiskDetails()
    .subscribe( data => {
      this.disk = data;
      console.log("heythere"+data);
    });
  };

  getDiskDetails(disk : Disk): void {
    this.diskService.getDiskDetails()
    .subscribe( data => {
      this.disk = data;
    });
  };


}

