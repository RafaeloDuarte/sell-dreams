import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorretorComponent } from './corretor/corretor.component';
import { CorretoresComponent } from './corretores.component';

@NgModule({
  declarations: [
    CorretorComponent,
    CorretoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CorretorComponent,
    CorretoresComponent
  ]
})
export class CorretoresModule { }
