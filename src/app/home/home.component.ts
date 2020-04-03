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
    job: "Software Engineer",
    welcome: "I am a Tokyo based Software Engineer who is well versed <strong>Web Development</strong> and <strong>Game Programming</strong>. My work experience includes the creation of Chat Applications, VR Games and Crypto Games.",
    portfolio: "View Portfolio",
    about: "About Me"
  }

  textJapanese = {
    firstName: "クナル",
    secondName: "ステフェン",
    job: "ソフトウェアエンジニア",
    welcome: "プログラミングの複数の面の経験があり、特にはゲームプログラミングとフルスタックWEBエンジニアリングが熱中です。実務経験はチャットアプリケーション、VR ゲームとブロックチェーンゲームの制作を含めています。",
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