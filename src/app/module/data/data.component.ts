import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface Word {
  name: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],

})
export class DataComponent {

  sideNavStatus: boolean = false;


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  word: Word[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple'}];
  exword: Word[] = [{ name: 'kul' }, { name: 'fah' }, { name: 'milk'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.word.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  exadd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.exword.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(word: Word): void {
    const index = this.word.indexOf(word);

    if (index >= 0) {
      this.word.splice(index, 1);
    }
  }
  exremove(exword: Word): void {
    const index = this.word.indexOf(exword);

    if (index >= 0) {
      this.exword.splice(index, 1);
    }
  }

  edit(word: Word, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(word);
      return;
    }

    // Edit existing fruit
    const index = this.word.indexOf(word);
    if (index >= 0) {
      this.word[index].name = value;
    }
  }
  exedit(exword: Word, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(exword);
      return;
    }

    // Edit existing fruit
    const index = this.exword.indexOf(exword);
    if (index >= 0) {
      this.exword[index].name = value;
    }
  }

  moveExwordToWord() {
    this.word = this.word.concat(this.exword);
    this.exword = [];
  }

  movewordToWord() {
    this.exword = this.exword.concat(this.word);
    this.word = [];
  }

}
