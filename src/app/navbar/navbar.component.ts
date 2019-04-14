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

  toggleNav(){
    this.isExpanded = !this.isExpanded;
  }

  switchToEnglish(){
    this.languageService.switchToEnglish();
  }

  switchToJapanese(){
    this.languageService.switchToJapanese();
  }
}