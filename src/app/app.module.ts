import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiskComponent } from './Disk/disk/disk.component';
import { CpuComponent } from './Cpu/cpu/cpu.component';
import { MemoryComponent } from './Memory/memory/memory.component';
import { TopMemoryComponent } from './TopMemory/top-memory/top-memory.component';
import { TopdiskComponent } from './TopDisk/topdisk/topdisk.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskComponent,
    CpuComponent,
    MemoryComponent,
    TopMemoryComponent,
    TopdiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
