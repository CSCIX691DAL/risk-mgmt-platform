import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-dropdown-editor',
  templateUrl: './dropdown-editor.component.html',
  styleUrls: ['./dropdown-editor.component.css']
})
export class DropdownEditorComponent {
  dropDownForm = this.fb.group({
    longqs: this.fb.array([
      this.fb.control('')
    ])
  });

  get longqs() {
    return this.dropDownForm.get('longqs') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.dropDownForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addLongqs() {
    this.longqs.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.dropDownForm.value);
  }
}
