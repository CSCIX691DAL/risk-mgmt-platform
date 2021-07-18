import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-long-answer-editor',
  templateUrl: './long-answer-editor.component.html',
  styleUrls: ['./long-answer-editor.component.css']
})

export class LongAnswerEditorComponent {
  longAnswerForm = this.fb.group({
    longqs: this.fb.array([
      this.fb.control('')
    ])
  });

  get longqs() {
    return this.longAnswerForm.get('longqs') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.longAnswerForm.patchValue({
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
    console.warn(this.longAnswerForm.value);
  }
}
