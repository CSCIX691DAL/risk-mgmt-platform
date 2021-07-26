import { Component, OnInit } from '@angular/core';

export type EditorType = 'name' | 'profile' | 'short-answer' | 'form-editor' | 'long-answer' | 'dropdown';

@Component({
  selector: 'issue-survey',
  templateUrl: './issue-survey.html',
  styleUrls: ['./issue-survey.css']
})

export class IssueSurvey {

  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showLongAnswerEditor() {
    return this.editor === 'long-answer';
  }

  get showShortAnswerEditor() {
    return this.editor === 'short-answer';
  }

  get showDropdownEditor() {
    return this.editor === 'dropdown';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
