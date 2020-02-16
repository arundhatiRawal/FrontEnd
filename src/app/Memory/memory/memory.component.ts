import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from './memory.service'
import { Memory } from './memory'
@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  memory : Memory[];
  constructor(private router: Router, private memoryService: MemoryService) { }

  ngOnInit() {
    this.memoryService.getMemoryDetails()
    .subscribe( data => {
      this.memory = data;
      console.log("heythere"+data);
    });
  };

  getMemoryDetails(memory:Memory): void {
    this.memoryService.getMemoryDetails()
    .subscribe( data => {
      this.memory = data;
    });
  };

  

}
