import { FocusTrapModule } from './../../directives/focus-trap/focus-trap.module';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule],
  exports: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {}
