import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() isFormVisible: boolean = false;
  @Input() title: string = '';
  @Input() quote: string = '';
  @Input() whiteStyle: boolean = false;

  @Output() sendForm = new EventEmitter<any>();
  @Output() isOpenedForm = new EventEmitter<boolean>();

  vibeForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    quote: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vibeForm = this.fb.group({
      title: [this.title, [Validators.required, Validators.maxLength(12)]],
      quote: [this.quote, [Validators.required]],
      author: ['Massi']
    });
  }

  submit(): void {
    this.sendForm.emit(this.vibeForm.value);
    this.ngOnInit();
    this.isOpenedForm.emit(false);
  }

  cancel(): void {
    this.ngOnInit();
    this.isOpenedForm.emit(false);
  }

}
