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
    "Graduating game development college in 2020 and looking for a position as a Game programmer in Tokyo. If you are interested in my work, feel free to hit me up. Currently not taking requests for freelance work.",
    "2020年3月卒業見込みですので、就活中です。貴社では私に適当な働き口空いていったらか、たったゲームやプログラミングについてお話したい場合ご連絡ください。現在フリーランスの依頼を受け取れません。"
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