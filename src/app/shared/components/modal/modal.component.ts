
import { fade } from './../../animations/fade';
import { Component, HostBinding } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent {
  @HostBinding('@fade')
  public config: ModalConfig;
  public modalRef: ModalRef;
}
