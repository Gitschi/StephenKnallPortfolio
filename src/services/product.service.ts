import { Injectable } from "../../node_modules/@angular/core";
import { Product } from "../models/product.model";

@Injectable()

export class ProductService{

  thumbnailPath: string[] = [
    "https://res.cloudinary.com/knallcloud/image/upload/v1539688553/PortfolioImages/Furry_Gladiators_GoogleBanner.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702253/PortfolioImages/SuperTurboKanji.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702255/PortfolioImages/VRGamersBot.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1540019996/PortfolioImages/PortfolioBanner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1541829915/PortfolioImages/SoulFrames_Banner.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1544884024/PortfolioImages/strandedtypist.jpg"
  ]

  introTextEN: string[] = [
    "Arcade <strong>Game</strong> with retro theme; Try to return the fruits to their bushes while avoiding falling blocks and obstacles. The difficulty will scale the longer the game goes on to keeps you on your toes! Made with <strong>Unity</strong> and released on <strong>PC</strong> and <strong>Android</strong>.",
    "We have all heard coined Japanese words such as <strong>'Hadoken'</strong> or <strong>'Shoryuken'</strong> before, but we mostly don't know what they really mean and even less how to write them in Kanji. This site teaches you how to leverage the Japanese knowledge you acquired through games and pop-culture, to become a master at <strong>recognizing Kanji</strong> and expanding your vocabulary.",
    "A constantly active bot, made with the <strong>Twitter API</strong> to bring user created VR content together. Multiple filter functions make sure that the quality of the retweeted content is kept as high as possible, which also made this bot useful at work during my time as a social media marketing intern.",
    "The website you are currently on is a <strong>Single Page Application</strong> which allows for dynamic navigation and language change through the power of <strong>Angular</strong>. It will function as a hub for all my programming related projects and will be constantly updated. You can have a look at the source code, which is hosted on Github, through the link below.",
    "Move list and frame data application for the game <strong>Soul Calibur 6</strong>. When playing fighting games in a competetive manner many players choose to learn the frame timings of each characters attacks to gain an edge. This app has a multitude of filter functions to help you quickly find exactly what moves you are looking for and support you in your training.",
    "On rails <strong>Typing Game</strong> created with <strong>Unity Engine</strong>, which is highly influenced by classic titles such as <strong>Typing of the Dead</strong>. Put your typing skills to the test in Arcade Mode, Speed Mode or Miss Mode. In each mode the length of the appearing words can be adjusted to fit your skill level and help you grow as a typist."
  ]

  introTextJP: string[] = [
    "パソコンやアンドロイドにリリースしたアーケードスタイルゲーム。目的は落下物をよけながら、フルーツを分別してブッシュに戻すこと。時間が経つと落下物の生成時間短くなるので、高いスコアを取るため気をつけてください。",
    "波動拳や昇竜拳みたいな造語がゲームをプレイ中に何回も聞きます。日本語を勉強している海外の方を対象に、その慣れはどうやって学習のための武器にすることができるを教えるウエブサイト。ゲーム造語の漢字を分析して、日常でも役に立つ、同じ漢字を使っている単語を紹介する。楽しくて自然の勉強方で漢字の知識を極めよう。",
    "VRゲーマーズのために作った、現実継続的にアクティブなTwitterボット。指定されたハッシュタグで望ましいコンテンツをみつけて、リツイートすることでVRゲームコンテンツのハブになった。搭載されたアルゴリズムでスパムやクオリティーが低いコンテンツを判断して、無視する。SNSマーケティングのインターンシップでもこのボットのおかげで色々の過程を自動した。",
    "このポートフォリオウエブサイトは、Angularの力で動的に言語を変えることができて、リーロードなしにナビゲーションができるシングルページアプリケーション。継続的に更新される、私が完成させたプログラミングプロジェクトのハブ。Githubにアップロードしているソースコードが下のリンクでアクセスできる。",
    "ソールキャリバー６の技表やフレーム表アプリケーション。多くの格闘ゲームプレイヤーはスキルアップのために、キャラクターの動作のフレームタイミングを覚えないといけない。このアプリでは色々なフィルターを用いて、気になる技のタイミングを覚えるための武器になる。",
    "ユニティーエンジンで作られた、クラシックのアーケードゲームに影響されたタイピングゲーム。単語の長さは自由に選ぶことができて、簡単に楽しみながらタイピングの腕をあげよう。アーケードモード、スピードモードとミスモードで三つのゲームモードがあるため、色々な楽しみかたがある。"
  ]

  toolLogos: Object[] = [
    // 0 Csharp
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539699205/PortfolioLogos/Logo_cSharp.png", title: "C#"},
    // 1 Unity
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539699205/PortfolioLogos/Logo_unity.png", title: "Unity"},
    // 2 node.js
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539691004/PortfolioLogos/Logo_Nodejs.png", title: "node.js"},
    // 3 Angular
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539699205/PortfolioLogos/Logo_angular.png", title: "Angular"},
    // 4 Ionic
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539699205/PortfolioLogos/Logo_Ionic.png", title: "Ionic"},
    // 5 HTML
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539861712/PortfolioLogos/Logo_html.png", title: "HTML"},
    // 6 CSS
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539861712/PortfolioLogos/Logo_css.png", title: "CSS"},
    // 7 JavaScript
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539861712/PortfolioLogos/Logo_Js.png", title: "JavaScript"},
    // 8 MongoDB
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539700297/PortfolioLogos/Logo_mongoDB.png", title: "MongoDB"},
    // 9 Heroku
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539701620/PortfolioLogos/Logo_Heroku.png", title: "Heroku"},
    // 10 Typescript
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1540017489/PortfolioLogos/Logo_Typescript.png", title: "TypeScript"},
    // 11 Netlify
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1540082702/PortfolioLogos/Logo_Netlifiy.png", title: "Netlify"}
  ]
  
  actionButtons: Object[] = [
    // 0 Furry Gladiators Gamejolt
    {link: "https://gamejolt.com/games/furrygladiators/370809", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Gamejolt.png"},
    // 1 Furry Gladiators GooglePlay
    {link: "https://play.google.com/store/apps/details?id=com.Studio208.FurryGladiators", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692127/PortfolioActionButtons/Button_GooglePlay.png"},
    // 2 Github Vr GamersBot
    {link: "https://github.com/Gitschi/VRGamersBot", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"},
    // 3 Super Turbo Kanji Visit Project
    {link: "http://www.superturbokanji.com", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539767942/PortfolioActionButtons/Button_Project.png"},
    // 4 VR Gamers Bot Visit Project
    {link: "https://twitter.com/vrgamersbot", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539767942/PortfolioActionButtons/Button_Project.png"},
    // 5 Github Portfolio Page
    {link: "https://github.com/Gitschi/StephenKnallPortfolio", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"},
    // 6 Soul Frames GooglePlay
    {link: "https://play.google.com/store/apps/details?id=com.studio208.soulframes", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692127/PortfolioActionButtons/Button_GooglePlay.png"},
    // 7 Stranded Typist Gamejolt
    {link: "https://gamejolt.com/games/stranded-typist/384891", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Gamejolt.png"},
    // 8 Stranded Typist Github
    {link: "https://github.com/Gitschi/Stranded-Typist-Scripts/", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"},
    // 9 Furry Gladiators Github
    {link: "https://github.com/Gitschi/Furry-Gladiators-Scripts/", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"}
  ]

  public products: Product[] = [
    new Product(
      "Stranded Typist", this.thumbnailPath[5], this.introTextEN[5], this.introTextJP[5],
      [this.toolLogos[0], this.toolLogos[1], this.toolLogos[7]],
      [this.actionButtons[7], this.actionButtons[8]]
    ),
    new Product(
      "Soul Frames", this.thumbnailPath[4], this.introTextEN[4], this.introTextJP[4],
      [this.toolLogos[10], this.toolLogos[3], this.toolLogos[4]],
      [this.actionButtons[6]]
    ),
    new Product(
      "Furry Gladiators", this.thumbnailPath[0], this.introTextEN[0], this.introTextJP[0],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[0], this.actionButtons[1], this.actionButtons[9]]
    ),
    new Product(
      "Super Turbo Kanji", this.thumbnailPath[1], this.introTextEN[1], this.introTextJP[1],
      [this.toolLogos[5], this.toolLogos[6], this.toolLogos[7], this.toolLogos[2], this.toolLogos[8], this.toolLogos[9]],
      [this.actionButtons[3]]
    ),
    new Product(
      "VR Gamers Bot", this.thumbnailPath[2], this.introTextEN[2], this.introTextJP[2],
      [this.toolLogos[7], this.toolLogos[2], this.toolLogos[9]],
      [this.actionButtons[4], this.actionButtons[2]]
    ),
    new Product(
      "Portfolio Website", this.thumbnailPath[3], this.introTextEN[3], this.introTextJP[3],
      [this.toolLogos[10], this.toolLogos[3], this.toolLogos[11]],
      [this.actionButtons[5]]
    ),
  ]

  GetProducts(){
    return this.products.slice();
  }
}