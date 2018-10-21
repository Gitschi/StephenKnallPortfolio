import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isExpanded: boolean;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
    this.isExpanded = false;
  }

  ToggleNav(){
    this.isExpanded = !this.isExpanded;
  }

  SwitchToEnglish(){
    this.languageService.SwitchToEnglish();
  }

  SwitchToJapanese(){
    this.languageService.SwitchToJapanese();
  }
}