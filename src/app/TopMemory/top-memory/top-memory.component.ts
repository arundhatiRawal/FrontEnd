import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { topMemoryService } from './top-memory.service'
import { TopMemory } from './top-memory'

@Component({
  selector: 'app-top-memory',
  templateUrl: './top-memory.component.html',
  styleUrls: ['./top-memory.component.css']
})
export class TopMemoryComponent implements OnInit {
  topMemory : TopMemory[];
  constructor(private router: Router, private topMemoryService: topMemoryService) { }

  ngOnInit() {
    this.topMemoryService.getTopMemoryDetails()
    .subscribe( data => {
      this.topMemory = data;
      console.log("heythere"+data);
    });
  };

  getTopMemoryDetails(topMemory:TopMemory): void {
    this.topMemoryService.getTopMemoryDetails()
    .subscribe( data => {
      this.topMemory = data;
    });
  };

}
