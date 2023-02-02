import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
   declarations: [
      FormComponent,
      ModalComponent
   ],
   imports: [
      CommonModule,
      RouterModule,
      FontAwesomeModule,
      ReactiveFormsModule
   ],
   exports: [
      FormComponent,
      ModalComponent
   ]
})
export class SharedModule { }