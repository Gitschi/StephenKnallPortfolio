import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  btnTextEnglish: string[] = [
    "English CV",
    "Japanese CV",
    "Japanese Work History"
  ]

  btnTextJapanese: string[] = [
    "英語の履歴書",
    "日本語の履歴書",
    "日本語の職務経歴書"
  ]

  aboutGroups: object[] = [
    {
      headerEN: "Passion for Programming",
      headerJP: "プログラミングに熱情",
      imgPath: "https://res.cloudinary.com/knallcloud/image/upload/v1539869526/About/About_School.png",
      paragraphEN: "Studying <strong>Game Programming</strong> at Tokyo Net Wave (東京ネットウエイブ) and set to graduate in March 2020. I am really glad to finally be at the point where I can create applications and games that I want to use myself, which gives me drive to constantly work on private projects. Learning <strong>C#, C++, PHP, Unity, Unreal Engine</strong> and more at school, while having a strong foundation in <strong>HTML, CSS, JavaScript</strong> and <strong>Node.js</strong> from multiple years of self study.",
      paragraphJP: ""
    },
    {
      headerEN: "Critical Thinking",
      headerJP: "批判的思考",
      imgPath: "https://res.cloudinary.com/knallcloud/image/upload/v1539870357/About/About_Doa.png",
      paragraphEN: "Developed strong <strong>Critical Thinking</strong> and <strong>Technical Expertise</strong> during more than 8 years of working as a <strong>(Senior) Operations Technician</strong>. This experience also has a strong influence on my work as a programmer and the way I analize games. Having played <stong>Fighting Games</strong> in a competitive manner for many years has taught me to break games down into numbers and use that knowledge to best my opponent. This knowledge greatly comes in handy when creating complicated game mechanics and making a game feel balanced and fair.",
      paragraphJP: ""
    },
    {
      headerEN: "Constant Self Improvement",
      headerJP: "定数事項啓発",
      imgPath: "https://res.cloudinary.com/knallcloud/image/upload/v1539869179/About/About_Tkd.png",
      paragraphEN: "Picking up the Korean martial art of <strong>Taekwondo</strong> when I was 20, put me on a path of constant self improvement. It taught me that seemingly impossible things can be overcome with vigor and a good training plan. Furthermore I spent a lot of time studying and practicing <strong>Neuro Linguistic Programming</strong> and <strong>Mindfulness Exercises</strong>, which played a big deal in me becoming able to <strong>speak 4 languages fluently</strong>.",
      paragraphJP: ""
    }
  ]

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.activePage = 2;
  }

}
