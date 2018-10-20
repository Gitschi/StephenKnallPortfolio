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
      paragraphJP: "2020年３月の卒業見込みで専門学校東京ネットウエイブに通ってる。ゲームプログラマー専攻でC#, C++, PHP, Unity, Unreal Engineなどを学んでいるが、入学した前も独学でHTML, CSS, JavaScript, Node.jsなどを勉強したので、二年以上のプログラミング経験がある。どんどんプログラマーとしての腕を上げて、もっと自分の中に理想なゲームを実現できるためどれだけも務める。"
    },
    {
      headerEN: "Critical Thinking",
      headerJP: "批判的思考",
      imgPath: "https://res.cloudinary.com/knallcloud/image/upload/v1540017780/About/About_SC.png",
      paragraphEN: "Developed strong <strong>Critical Thinking</strong> and <strong>Technical Expertise</strong> during more than 8 years of working as a <strong>(Senior) Operations Technician</strong>. This experience also has a strong influence on my work as a programmer and the way I analize games. Having played <stong>Fighting Games</strong> in a competitive manner for many years has taught me to break games down into numbers and use that knowledge to hone my playstyle. This also greatly comes in handy when creating complicated game mechanics and making a game feel balanced and fair.",
      paragraphJP: "8年以上の（シニア）製造技術者として活躍したため、批判的思考や技術的の知識を育んだ。あの経験はプログラマーとしての仕事にも大幅に影響がある。長年に真剣に格闘ゲームをプレイしているため、私にとってはゲームの分析で、すべてのメカニックを徹底的に分かるようになるのは当たり前なこと。その知識を自分のゲーム製作の難易度構成やメカニック面白くすることに不可欠なものだと思う。"
    },
    {
      headerEN: "Constant Self Improvement",
      headerJP: "自己啓発",
      imgPath: "https://res.cloudinary.com/knallcloud/image/upload/v1539869179/About/About_Tkd.png",
      paragraphEN: "Picking up the Korean martial art of <strong>Taekwondo</strong> when I was 20, put me on a path of constant self improvement. It taught me that seemingly impossible things can be overcome with vigor and a good training plan. Furthermore I spent a lot of time studying and practicing <strong>Neuro Linguistic Programming</strong> and <strong>Mindfulness Exercises</strong>, which played a big deal in me becoming able to <strong>speak 4 languages fluently</strong>.",
      paragraphJP: "20歳の頃から韓国の格闘技テコンドーの練習を始まったことをきっかけに継続的の事項啓発を始まった。あのスポーツで、気合いやちゃんとしたスケジュールあれば不可能を可能にすることができると分かるようになった。その続きで神経言語プログラミングの練習や瞑想で人生のすべてのアスペクトで成長した。そういうスキルで独学だけで四か国語を流暢に話せることになった上で、新しい能力を身に付けることが早い。"
    }
  ]

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.activePage = 2;
  }

}