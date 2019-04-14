import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Router } from '../../../node_modules/@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',  
  host: { class:'content' },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textEnglish = {
    firstName: "Stephen",
    secondName: "Knall",
    job: "Game Programmer & Software Engineer",
    welcome: "I am a Tokyo based Software Engineer who is well versed in many facettes of programming, with a main focus on game programming and full-stack web development. Having spent multiple years living in China and Japan has given me a chance to experience enourmous personal growth and work on many projects with people from different backgrounds.",
    portfolio: "View Portfolio",
    about: "About Me"
  }

  textJapanese = {
    firstName: "クナル",
    secondName: "ステフェン",
    job: "ゲームプログラマー・ソフトウェアエンジニア",
    welcome: "プログラミングの複数の面の経験があり、特にはゲームプログラミングとフルスタックWEBエンジニアリングが熱中です。数年中国や日本に住んだことあるため、違う歴史がある人々と協力して色々のプロジェクトを完成できました。",
    portfolio: "ポートフォリオを見る",
    about: "自己紹介"
  }

  constructor(public languageService: LanguageService, private router: Router, private seoService: SeoService) { }

  ngOnInit() {
    this.languageService.activePage = 0;
    this.seoService.createLinkForCanonicalURL();
  }

  ngOnDestroy(){
    this.seoService.removeCanonicalTags();
  }

  navigatePortfolio() {
    this.router.navigateByUrl('/portfolio');
    //scroll to top of page
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  navigateAbout() {
    this.router.navigateByUrl('/about');
    //scroll to top of page
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}