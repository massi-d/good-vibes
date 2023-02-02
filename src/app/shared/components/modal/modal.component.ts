import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  close: IconDefinition = faClose;
  @Input() isOpened: boolean = false;
  @Output() modalClosed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.isOpened = false;
    this.modalClosed.emit(false);
  }

}
