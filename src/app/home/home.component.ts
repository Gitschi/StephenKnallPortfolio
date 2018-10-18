import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textEnglish: object = {
    name: "Stephen Knall",
    job: "Game Programmer & Software Engineer",
    welcome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra est nec lorem tincidunt, et pulvinar nisi malesuada. Aenean non turpis ac nisi lacinia commodo semper sit amet neque. Nunc vitae, elementum odio. Cras sollicitudin ornare magna, in imperdiet eros volutpat quis. Vestibulum maximussagittis magna.",
    portfolio: "View Portfolio",
    about: "About Me"
  }

  textJapanese: object = {
    name: "クナル　ステフェン",
    job: "ゲームプログラマー・ソフトウェアエンジニア",
    welcome: "供ルムミ断掌ねレっ国市カユタ親屯放96時ど独色ヤトテ別懇じほ来稿そ携更ほしり具取ち止広よ減戸せ投後ばぱ客告をの純安ウ阪経きへ。彼ヘル細31識江択モヒルノ乳事サカ費仙イにょ他乏成ウトク乗試ホノフリ局文てぶスル五攻ごきりめ月幕メフニ標加党善宇レぐくゆ。",
    portfolio: "ポートフォリオを見る",
    about: "自己紹介"
  }

  constructor(private languageService: LanguageService, private router: Router) { }

  ngOnInit() {
    this.languageService.activePage = 0;
  }

  NavigatePortfolio() {
    this.router.navigateByUrl('/portfolio');
  }

  NavigateAbout() {
    this.router.navigateByUrl('/about');
  }
}