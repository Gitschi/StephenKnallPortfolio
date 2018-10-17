import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  SwitchToEnglish(){
    this.languageService.SwitchToEnglish();
  }

  SwitchToJapanese(){
    this.languageService.SwitchToJapanese();
  }
}