import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopdiskService } from './topdisk.service'
import { Topdisk } from './topdisk'
@Component({
  selector: 'app-topdisk',
  templateUrl: './topdisk.component.html',
  styleUrls: ['./topdisk.component.css']
})
export class TopdiskComponent implements OnInit {

  topdisk: Topdisk[];

  constructor(private router: Router, private topdiskService: TopdiskService) {

  }

  ngOnInit() {
    this.topdiskService.getTopDiskDetails()
    .subscribe( data => {
      this.topdisk = data;
      console.log("heythere"+data);
    });
  };

  getDiskDetails(topdisk : Topdisk): void {
    this.topdiskService.getTopDiskDetails()
    .subscribe( data => {
      this.topdisk = data;
    });
  };


}
