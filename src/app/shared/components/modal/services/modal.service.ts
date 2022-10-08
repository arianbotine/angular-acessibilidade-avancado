import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ModalService {
  public open(config: ModalConfig): ModalRef {
    return new ModalRef();
  }
}

export interface ModalConfig {
  tempalteRef: TemplateRef<any>;
  title: string;
}

export class ModalRef {
  public close(): void {
    console.log('close called');
  }
}
