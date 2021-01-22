import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-short-answer-editor',
  templateUrl: './short-answer-editor.component.html',
  styleUrls: ['./short-answer-editor.component.css']
})
export class ShortAnswerEditorComponent {
  shortAnswerForm = this.fb.group({
    shortqs: this.fb.array([
      this.fb.control('')
    ])
  });

  get shortqs() {
    return this.shortAnswerForm.get('shortqs') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.shortAnswerForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addShortQ() {
    this.shortqs.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.shortAnswerForm.value);

  }
}
