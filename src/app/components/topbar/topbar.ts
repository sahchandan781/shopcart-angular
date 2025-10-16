import { Component } from '@angular/core';


@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css'
})
export class Topbar {

  // dropdown visibility flags
  showLangDropdown = false;
  showLocDropdown = false;

  // selected values
  selectedLang = 'Eng';
  selectedLoc = 'Location';

  // options
  languages = ['English', 'Nepali', 'Hindi'];
  locations = ['Kathmandu', 'Biratnagar', 'Pokhara'];

  // toggle dropdown visibility
  toggleDropdown(type: 'lang' | 'loc') {
    if (type === 'lang') {
      this.showLangDropdown = !this.showLangDropdown;
      this.showLocDropdown = false;
    } else {
      this.showLocDropdown = !this.showLocDropdown;
      this.showLangDropdown = false;
    }
  }

  // handle selection
  selectOption(type: 'lang' | 'loc', value: string) {
    if (type === 'lang') {
      this.selectedLang = value;
      this.showLangDropdown = false;
    } else {
      this.selectedLoc = value;
      this.showLocDropdown = false;
    }
  }
}
