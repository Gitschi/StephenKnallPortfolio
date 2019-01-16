import { Injectable } from "../../node_modules/@angular/core";
import { Product } from "../models/product.model";

@Injectable()

export class ProductService{

  thumbnailPath: string[] = [
    "https://res.cloudinary.com/knallcloud/image/upload/v1539688553/PortfolioImages/Furry_Gladiators_GoogleBanner.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702253/PortfolioImages/SuperTurboKanji.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702255/PortfolioImages/VRGamersBot.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1540019996/PortfolioImages/PortfolioBanner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1545351304/PortfolioImages/soulframes_banner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1544884024/PortfolioImages/strandedtypist.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1547551142/PortfolioImages/Furpunk_Blast.jpg"
  ]

  introTextEN: string[] = [
    "Arcade Game made with <strong>Unity Engine</strong>, downloaded <strong>500+ times</strong> across <strong>PC</strong> and <strong>Android Devices</strong>. Aiming to create a reflex based game which feels <strong>'Hard but Fair'</strong>, adjusting game balance by receiving and implementing user feedback played a huge role. A big challenge I had to overcome was building the project for <strong>different devices and platforms from the same code base</strong>.",
    "My <strong>first website</strong> and large scale solo project, which allowed me to combine my love for language studies, fighting games and web development. It introduces a more fun and unconventional way of <strong>memorizing Japanese kanji</strong> by breaking down coined words from fighting games, such as 'Hadoken' and 'Shoryuken' most of us have heard before. <strong>Node.js with the express framework</strong> was used for routing and communicating to <strong>MongoDB</strong>.",
    "Active <strong>Retweet Bot</strong> created using the <strong>Twitter API</strong> and <strong>JavaScript</strong> to be a hub for user created VR gaming content. I actively used this bot to optimize certain tasks during my time doing social media marketing for <strong>Swords of Gargantua</strong>, which is why I was fixated on implementing many filter functions to make sure only high quality content gets retweeted.",
    "The website you are currently viewing is a <strong>Single Page Application</strong> allowing dynamic navigation and language change through the power of <strong>Angular</strong>. The source code, which is hosted on Github, can be viewed through the link below.",
    "<strong>Frame Data Application</strong> for the fighting game <strong>Soul Calibur 6</strong>. It has reached <strong>1000+ downloads</strong> to date and gained great support from the competitive community. After starting as a solo project, a couple of developers have joined following the beta release, which lead to me also assuming a <strong>project management role</strong>, setting project standards and creating technical documentation.",
    "Created with <strong>Unity Engine</strong>, this is a on rails <strong>Typing Game</strong> highly influenced by classic titles such as <strong>Typing of the Dead</strong>. <strong>Multiple game modes</strong>, <strong>adjustable difficulty</strong> and over <strong>200,000 words</strong> increase replay value and impact on the players typing skill. Knowledge I reinforced through this project covers the following: handling large amounts of text data, managing game objects in lists, creating waypoint and spawn systems.",
    "Co-Op Twin Stick Shooter with a strong emphasis on teamwork. This <strong>group project</strong> was created using <strong>Unreal Engine 4</strong> with a team of 13 students. As the <strong>Lead Programmer</strong> I was responsible for <strong>heading a team of 5 programmers</strong>, <strong>repository management using git</strong>, <strong>technical guidance</strong>, <strong>gameplay implementation</strong> and much more."
  ]

  introTextJP: string[] = [
    "パソコンやアンドロイドにリリースしたアーケードスタイルゲーム。目的は落下物をよけながら、フルーツを分別してブッシュに戻すこと。時間が経つと落下物の生成時間短くなるので、高いスコアを取るため気をつけてください。",
    "波動拳や昇竜拳みたいな造語がゲームをプレイ中に何回も聞きます。日本語を勉強している海外の方を対象に、その慣れはどうやって学習のための武器にすることができるを教えるウエブサイト。ゲーム造語の漢字を分析して、日常でも役に立つ、同じ漢字を使っている単語を紹介する。楽しくて自然の勉強方で漢字の知識を極めよう。",
    "VRゲーマーズのために作った、現実継続的にアクティブなTwitterボット。指定されたハッシュタグで望ましいコンテンツをみつけて、リツイートすることでVRゲームコンテンツのハブになった。搭載されたアルゴリズムでスパムやクオリティーが低いコンテンツを判断して、無視する。SNSマーケティングのインターンシップでもこのボットのおかげで色々の過程を自動した。",
    "このポートフォリオウエブサイトは、Angularの力で動的に言語を変えることができて、リーロードなしにナビゲーションができるシングルページアプリケーション。継続的に更新される、私が完成させたプログラミングプロジェクトのハブ。Githubにアップロードしているソースコードが下のリンクでアクセスできる。",
    "ソールキャリバー６の技表やフレーム表アプリケーション。多くの格闘ゲームプレイヤーはスキルアップのために、キャラクターの動作のフレームタイミングを覚えないといけない。このアプリでは色々なフィルターを用いて、気になる技のタイミングを覚えるための武器になる。",
    "ユニティーエンジンで作られた、クラシックのアーケードゲームに影響されたタイピングゲーム。単語の長さは自由に選ぶことができて、簡単に楽しみながらタイピングの腕をあげよう。アーケードモード、スピードモードとミスモードで三つのゲームモードがあるため、色々な楽しみかたがある。",
    "Unreal Engine 4を作って制作された、協力アクションツインスティックシューティングゲーム。メインプログラマーとしてゲームプレイ実装の上に、プログラマー５人のチームを指導、gitを使用してレポジトリーの管理、技術的なガイダンスなどを担当しました。"
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
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1540082702/PortfolioLogos/Logo_Netlifiy.png", title: "Netlify"},
    // 12 Unreal Engine 4
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1547550814/PortfolioLogos/UE4simple.png", title: "Unreal Engine 4"}
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
      "Furpunk Blast", "furpunk-blast", this.thumbnailPath[6], this.introTextEN[6], this.introTextJP[6],
      [this.toolLogos[12]],
      []
    ),
    new Product(
      "Stranded Typist", "stranded-typist", this.thumbnailPath[5], this.introTextEN[5], this.introTextJP[5],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[7], this.actionButtons[8]]
    ),
    new Product(
      "Soul Frames", "soul-frames", this.thumbnailPath[4], this.introTextEN[4], this.introTextJP[4],
      [this.toolLogos[10], this.toolLogos[3], this.toolLogos[4]],
      [this.actionButtons[6]]
    ),
    new Product(
      "Furry Gladiators", "furry-gladiators", this.thumbnailPath[0], this.introTextEN[0], this.introTextJP[0],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[0], this.actionButtons[1], this.actionButtons[9]]
    ),
    new Product(
      "Super Turbo Kanji", "super-turbo-kanji", this.thumbnailPath[1], this.introTextEN[1], this.introTextJP[1],
      [this.toolLogos[5], this.toolLogos[6], this.toolLogos[7], this.toolLogos[2], this.toolLogos[8], this.toolLogos[9]],
      [this.actionButtons[3]]
    ),
    new Product(
      "VR Gamers Bot", "vr-gamers-bot", this.thumbnailPath[2], this.introTextEN[2], this.introTextJP[2],
      [this.toolLogos[7], this.toolLogos[2], this.toolLogos[9]],
      [this.actionButtons[4], this.actionButtons[2]]
    ),
    new Product(
      "Portfolio Website", "portfolio-website", this.thumbnailPath[3], this.introTextEN[3], this.introTextJP[3],
      [this.toolLogos[10], this.toolLogos[3], this.toolLogos[11]],
      [this.actionButtons[5]]
    ),
  ]

  GetProducts(){
    return this.products.slice();
  }
}