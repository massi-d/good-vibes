import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrls: ['./vibe.component.scss']
})
export class VibeComponent implements OnInit {
  delete: IconDefinition = faTrash;
  edition: IconDefinition = faEdit;

  isModalOpened: boolean = false;
  @Output() modalStatus = new EventEmitter<boolean>();

  vibes = [
    {
      'title': 'Lorem 1',
      'quote': 'Lorem ipsum dolor sit amet. Nam odio consequatur qui perspiciatis aspernatur vel odit facere ut odio',
      'author': 'Seb'
    },
    {
      'title': 'Lorem 2',
      'quote': 'Lorem ipsum dolor sit amet.',
      'author': '-'
    },
    {
      'title': 'Lorem 1',
      'quote': 'Lorem ipsum dolor sit amet. Nam odio consequatur qui perspiciatis aspernatur vel odit facere ut odio',
      'author': 'Seb'
    },
    {
      'title': 'Lorem 2',
      'quote': 'Lorem ipsum dolor sit amet.',
      'author': '-'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.isModalOpened = true;
    this.modalStatus.emit(true);
  }

  modalClosed(event: boolean): void {
    this.isModalOpened = event;
    this.modalStatus.emit(event);
  }
}