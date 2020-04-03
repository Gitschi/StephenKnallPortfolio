import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  host: { class:'content' },
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contactText: string[] = [
    "",
    ""
  ]

  constructor(public languageService: LanguageService, private seoService: SeoService) { }

  ngOnInit() {
    this.languageService.activePage = 3;
    this.seoService.createLinkForCanonicalURL();
  }

  ngOnDestroy(){
    this.seoService.removeCanonicalTags();
  }

}