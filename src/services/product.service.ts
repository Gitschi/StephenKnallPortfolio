import { Injectable } from "../../node_modules/@angular/core";
import { Product } from "../models/product.model";

@Injectable()

export class ProductService{

  projectTags: object[] = [
    // 0: Solo
    {tagTextEN: "Solo", tagTextJP: "ソロ", tagClass: "soloTag"},
    // 1: Group
    {tagTextEN: "Group", tagTextJP: "グループ", tagClass: "groupTag"},
    // 2: Company
    {tagTextEN: "Company", tagTextJP: "企業", tagClass: "companyTag"}
  ]
  
  thumbnailPath: string[] = [
    "https://res.cloudinary.com/knallcloud/image/upload/v1539688553/PortfolioImages/Furry_Gladiators_GoogleBanner.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702253/PortfolioImages/SuperTurboKanji.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702255/PortfolioImages/VRGamersBot.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1540019996/PortfolioImages/PortfolioBanner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1545351304/PortfolioImages/soulframes_banner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1544884024/PortfolioImages/strandedtypist.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1549440385/PortfolioImages/Furpunk_Blast.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1548584381/PortfolioImages/BlockMatchLogo.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1552188598/PortfolioImages/Brawling_Heavies_Thumb.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1567304382/PortfolioImages/LandOfBeastsBanner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1572602848/PortfolioImages/Monster_Reapers_-_Release_confirm.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1574256795/PortfolioImages/Motionbase_banner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1574257054/PortfolioImages/vacancy_chat_banner.png",
    "https://res.cloudinary.com/knallcloud/image/upload/v1574258517/PortfolioImages/sog_banner.png"
  ]

  introTextEN: string[] = [
    // 0: Furry Gladiators
    "Arcade Game made with <strong>Unity Engine</strong>, downloaded <strong>500+ times</strong> across <strong>PC</strong> and <strong>Android Devices</strong>. Aiming to create a reflex based game which feels <strong>'Hard but Fair'</strong>, adjusting game balance by receiving and implementing user feedback played a huge role. A big challenge I had to overcome was building the project for <strong>different devices and platforms from the same code base</strong>.",
    // 1: Super Turbo Kanji
    "My <strong>first website</strong> and large scale solo project, which allowed me to combine my love for language studies, fighting games and web development. It introduces a more fun and unconventional way of <strong>memorizing Japanese kanji</strong> by breaking down coined words from fighting games, such as 'Hadoken' and 'Shoryuken' most of us have heard before. <strong>Node.js with the express framework</strong> was used for routing and communicating to <strong>MongoDB</strong>.",
    // 2: VR Gamers Bot
    "Active <strong>Retweet Bot</strong> created using the <strong>Twitter API</strong> and <strong>JavaScript</strong> to be a hub for user created VR gaming content. I actively used this bot to optimize certain tasks during my time doing social media marketing for <strong>Swords of Gargantua</strong>, which is why I was fixated on implementing many filter functions to make sure only high quality content gets retweeted.",
    // 3: Portfolio Website
    "The website you are currently viewing is a <strong>Single Page Application</strong> allowing dynamic navigation and language change through the power of <strong>Angular</strong>. The source code, which is hosted on Github, can be viewed through the link below.",
    // 4: Soul Frames
    "<strong>Frame Data Application</strong> for the fighting game <strong>Soul Calibur 6</strong>. It has reached <strong>3000+ downloads</strong> to date and gained great support from the competitive community. After starting as a solo project, a couple of developers have joined following the beta release, which lead to me also assuming a <strong>project management role</strong>, setting project standards and creating technical documentation.",
    // 5: Stranded Typist
    "Created with <strong>Unity Engine</strong>, this is a on rails <strong>Typing Game</strong> highly influenced by classic titles such as <strong>Typing of the Dead</strong>. <strong>Multiple game modes</strong>, <strong>adjustable difficulty</strong> and over <strong>200,000 words</strong> increase replay value and impact on the players typing skill. Knowledge I reinforced through this project covers the following: handling large amounts of text data, managing game objects in lists, creating waypoint and spawn systems.",
    // 6: Furpunk Blast
    "Co-Op Twin Stick Shooter with a strong emphasis on teamwork. This <strong>group project</strong> was created using <strong>Unreal Engine 4</strong> with a team of 15 students. As the <strong>Lead Programmer</strong> I was responsible for <strong>heading a team of 5 programmers</strong>, <strong>repository management using git</strong>, <strong>technical guidance</strong>, <strong>gameplay implementation</strong> and much more.",
    // 7: Block Match
    "A simple <strong>puzzle game prototype</strong> created with C++ and a graphics library called Siv3D. Instead of using a powerful game engine, this project was completed for the purpose of practicing the usage of <strong>multi dimensional arrays</strong>, <strong>recursive functions</strong> and <strong>drawing of textures</strong>, while having to micro manage everything through code.",
    // 8: Brawling Heavies
    "<strong>Hybrid Fighting Game</strong> which implements concepts from multiple genres. The base for this project was built using C++ and the rest using <strong>Unreal Engine 4's</strong> blueprint system. Skills reinforced through this project are <strong>Implementation of accurate hit detection</strong>, <strong>UE4 animation state machines</strong>, <strong>animation notifies</strong> and <strong>communication between blueprints and C++</strong>.",
    // 9: Land of Beasts
    "Work in progress <strong>Action RPG</strong> with an emphasis on cooperation between hunter and beast. The user can freely switch between the hunter and beast at any point in time while the couterpart will be controlled by Ai or a second player. Designing the code to dynamically adapt to these changes in player state at any time was quite the challenge. Other skills reinforced by this project include designing class inheritance for large scale projects and enemy/partner Ai behavior.",
    // 10: Monster Reapers VR
    "This <strong>Roguelike VR Monster Hunting Game</strong> was created by one of my friends and me over a pretty short amount of time. <strong>It got released on Steam Early Access on October 30th 2019</strong> and is <strong>constantly being updated</strong> according to the road map. My contributions to this project were <strong>not only programming</strong>, but also <strong>game design</strong>, <strong>dev-ops</strong> and <strong>promotion</strong>. Most of the things I've learned over the last years have come together and have been reinforced through this project.",
    // 11: Vacancy Chat
    "Vacancy Creators is a <strong>matching service between creators and hiring companies</strong> in the game and anime industry, with the creation of which I was involved in <strong>working at Gengosha</strong>. I mainly took care of the <strong>built in chat service</strong> that allows company members and the matched creators to converse and created most of its functionality <strong>single handedly</strong>. I took care of <strong>both the front-end and back-end</strong> when implementing parts of the service and the biggest challenge I overcame was <strong>implementing a multi-database structure</strong> using Ruby on Rails 5.",
    // 12: Swords of Gargantua
    "Swords of Gargantua is a fast-paced arena combat action game featuring <strong>realistic swordplay in an immersive VR-enabled online environment</strong>. I was involved in the development of this game <strong>working at Yomuneco</strong>. Not only did I implement <strong>gameplay functionality using either C++ or Blueprints with Unreal Engine 4</strong>, but I also <strong>came up with system improvements and created prototypes</strong> to present these and eventually have them included in the main game. Working on this project allowed me to gain <strong>excellent knowledge of VR technology and the industry</strong> around it. Furthermore I was able to learn advanced game development techniques for both <strong>client and server side</strong>.",
    // 13: Motionbase Chat
    "Jector Motionbase is a platform which enables <strong>video creators to share creations and collaborate together</strong> in a more effecient manner. Working at Gengosha we were tasked to <strong>expand the service by implementing a chat application</strong> into it. I took on <strong>both front-end and back-end tasks</strong> on this project and <strong>enormously grew my Ruby on Rails, Vue JS and Typescript knowledge</strong> throughout development."
  ]

  introTextJP: string[] = [
    // 0: Furry Gladiators
    "パソコンとアンドロイド番を含めて５００回以上ダウンロードされたユニティ反射神経ゲームです。このジャンルでは難易度調整や操作の調整が最も大事なので、SNSでユーザと繋がってフィードバックで改善を行いました。特にはチャレンジでしたのは同じコードベースから複数のプラットフォームや画面サイズが対応する実行ファイルをビルトすることです。",
    // 1: Super Turbo Kanji
    "始めての規模が大きいな、語学や格闘ゲームやプログラミングに対しての興味を結び付けたプロジェクトです。普通の漢字勉強方法と違って、格闘ゲームの用語を例にして漢字が勉強できる作ったウエブサイトです。バックエンドがNode.jsやExpress Frameworkを使ってルーティングやMongoDBのデータベースとのやり取りを行っています。",
    // 2: VR Gamers Bot
    "VRゲーマーのために作った650以上のフォロワーを集まったアクティブなリツイートボットです。TwitterのAPIを使用して、指定されたハッシュタグで望ましいコンテンツをみつけて、リツイートすることでVRゲームコンテンツのハブなりました。アルゴリズムでスパムやクオリティーが低いコンテンツを判断して、無視します。VRゲーム会社でSNSマーケティングのバイトをした頃色々な過程を自動化するために使用しました。",
    // 3: Portfolio Website
    "このポートフォリオウエブサイトは、Angularの力で動的に言語を変えることができて、リーロードせずにナビゲーションができるシングルページアプリケーションです。継続的に更新される、私が完成させたプログラミングプロジェクトのハブです。Githubにアップロードしているソースコードが下のリンクでアクセスできます。",
    // 4: Soul Frames
    "ソールキャリバー６の3000回以上ダウンロードされたフレーム表アンドロイドアプリケーションです。ソロプロジェクトで始まったが、ベター版のリリースから複数の貢献者が参加するようになりました。あの時からリーダの役割を担当して、リポジトリの基準を決めてテクニカルドキュメントを書いています。準備したDiscordサーバーやアプリのツイッターアカウントでユーザのやり取りで改善やバグ直しを行っています。",
    // 5: Stranded Typist
    "ユニティーエンジンを使用して制作した、PCのレールシュータータイピングゲームです。複数のゲームモードと難易度の上に20万の言葉のワードリストを搭載されたため、リプレイバリューがあり、プレイヤーのタイピングの腕をあがります。このプロジェクトで乗り越えたチャレンジが、多くのテキストデータの処理やゲームオブジェクトをリストでの複雑の扱いやウェイポイントと生成システムの制作です。",
    // 6: Furpunk Blast
    "Unreal Engine 4を作って制作された、協力アクションツインスティックシューティングゲーム。メインプログラマーとしてゲームプレイ実装の上に、プログラマー５人のチームを指導、gitを使用してレポジトリーの管理、技術的なガイダンスなどを担当しました。",
    // 7: Block Match
    "ゲームエンジンを使わず、C++とSiv3Dというグラフィックスライブラリーを使用して制作されたパズルゲームのプロトタイプです。パワフルなエンジンを使う時にあんまり気にする必要がないことを練習するため作ったものです。テキスチャーの描き、二次元配列の使い、再起関数などの学習になりました。",
    // 8: Brawling Heavies
    "複数のジャンルの特徴を含める雑種格闘ゲームです。ゲームの基本がほとんどのプラットフォームファイターと近いが、RPGのような強化システムの実装で完全に新しい経験になります。プロジェクトのベースだけがC++で出来上がりシステムの大半はUE4のブループリントシステムで実装されました。",
    // 9: Land of Beasts
    "進行中の作業のアクションRPGゲーム。ハンターと野獣のデュオを操作できるがカウンターパートはAiか他のプレイヤーに操作されます。あのいつでも可能のプレイヤーステートの変更にコードを適用されることがかなり苦労しました。その上クラス継続やAIの動作のこと色々勉強ができました。",
    // 10: Monster Reapers VR
    "このローグライクモンスターハンティングVRゲームが一人の友達と一緒に作ってスチーム Early Access 自己出版をしています。ゲームのコア部分や最初のレベルパックが完成していますがこれからも絶えず新しいシステム、武器、敵やレベルを追加しています。私の役割はプログラミング以上もゲームデザイン、Dev-ops や PR をしました。初めての自己出版のタイトルなのでゲーム開発のことに全体的に色々勉強になりました。",
    // 11: Vacancy Chat
    "Vacancy Creators は募集中企業とアーティストのマッチングウエブアプリケーション。株式会社言語社で働いた時にあのウエブサービスの作成がお客様から依頼されました。私はマッチングサービスやポートフォリオの部分より実装されたチャットアプリの方を担当して、フロントエンドの実装もバックエンドの実装もしました。このプロジェクトで乗り越えたチャレンジは Ruby on Rails 5 でマルチデータベースのシステムを実装することを含みます。",
    // 12: Swords of Gargantua
    "Swords of Gargantua はVR空間でのリアル剣術オンラインマルチプレイゲームです。株式会社よむネコに勤めた時期に Unreal Engine 4 を使ってこのゲームの開発に貢献しました。ゲームシステムの実装だけではなくてゲームを改善できる所を考えて、プロトタイプを作って、結果をプレゼンすることも良くしました。このプロジェクトで規模が多きゲームの開発やネットワークマルチプレイのこと色々勉強になりました。",
    // 13: Motionbase Chat
    "Jector Motionbase は動画クリエイターがもっと効率よくクリエーションをシェアと協力できるためのウエブアプリケーション。株式会社言語社で働いた時にこのサービスのチャットアプリケーションの部分の開発がお客様に依頼されました。このプロジェクトでフロントエンドもバックエンドも実装したため、Ruby on Rails, Vue JS と Typescript の知識を大幅に成長しました。"
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
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1547550814/PortfolioLogos/UE4simple.png", title: "Unreal Engine 4"},
    // 13 C++
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548583832/PortfolioLogos/CPPLogo.png", title: "C++"},
    // 14 Ruby on Rails
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1574343045/PortfolioLogos/rails_tool_logo.png", title: "Ruby on Rails"},
    // 15 Vue Js
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1574343241/PortfolioLogos/Vue_js_logo.png", title: "Vue JS"},  
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
    {link: "https://github.com/Gitschi/Furry-Gladiators-Scripts/", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"},
    // 10 Soul Frames Github
    {link: "https://github.com/Gitschi/SoulFrames", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"},
    // 11 Block Match Video
    {link: "https://youtu.be/fLzmDOFMmYQ", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 12 Block Match Github
    {link: "https://github.com/Gitschi/Block-Match", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"},
    // 13 Block Match Gamejolt
    {link: "https://gamejolt.com/games/block-match/393486", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Gamejolt.png"},
    // 14 Furry Gladiators Video
    {link: "https://youtu.be/E8zw7XeOugE", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 15 Stranded Typist Video
    {link: "https://youtu.be/2irQxZXP1_c", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 16 Furpunk Blast Video
    {link: "https://youtu.be/afrle4UgOlQ", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 17 Furpunk Blast Gamejolt
    {link: "https://gamejolt.com/games/furpunk-blast/395295", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Gamejolt.png"},
    // 18 Brawling Heavies Video
    {link: "https://youtu.be/KoKLoO2RhY0", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 19 Brawling Heavies Gamejolt
    {link: "https://gamejolt.com/games/brawling-heavies/401316", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Gamejolt.png"},
    // 20 Land of Beasts Youtube
    {link: "https://youtu.be/7R-4tY87N6o", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 21 Land of Beasts Gamejolt
    {link: "https://gamejolt.com/games/land-of-beasts/436762", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Gamejolt.png"},
    // 22 Monster Reapers VR Steam
    {link: "https://store.steampowered.com/app/616680/Monster_Reapers_VR/", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1572605985/PortfolioActionButtons/DownloadOnSteam.png"},
    // 23 Monster Reapers VR Youtube
    {link: "https://www.youtube.com/watch?v=YnctTRTcHjA", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 24 Vacancy chat project
    {link: "https://vacancy-creators.com/", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539767942/PortfolioActionButtons/Button_Project.png"},
    // 25 Swords of Gargantua Steam
    {link: "https://store.steampowered.com/app/895200/SWORDS_of_GARGANTUA/", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1572605985/PortfolioActionButtons/DownloadOnSteam.png"},
    // 26 Swords of Gargantua Video
    {link: "https://www.youtube.com/watch?v=EJTzZ9vHpkU&ab_channel=UploadVR", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1548585216/PortfolioActionButtons/WatchVideoButton.png"},
    // 27 Motionbase chat project
    {link: "https://www.motionbase.jp/", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539767942/PortfolioActionButtons/Button_Project.png"},
  ]

  public products: Product[] = [
    new Product(
      "Monster Reapers VR", "monster-reapers-vr", "Game",
      this.thumbnailPath[10], this.introTextEN[10], this.introTextJP[10],
      [this.toolLogos[13], this.toolLogos[12]],
      [this.actionButtons[22], this.actionButtons[23]],
      this.projectTags[1]
    ),
    new Product(
      "Vacancy Chat", "vacancy-chat", "Web",
      this.thumbnailPath[12], this.introTextEN[11], this.introTextJP[11],
      [this.toolLogos[14], this.toolLogos[15], this.toolLogos[10]],
      [this.actionButtons[24]],
      this.projectTags[2]
    ),
    new Product(
      "Soul Frames", "soul-frames", "Web",
      this.thumbnailPath[4], this.introTextEN[4], this.introTextJP[4],
      [this.toolLogos[10], this.toolLogos[3], this.toolLogos[4]],
      [this.actionButtons[6], this.actionButtons[10]],
      this.projectTags[1]
    ),
    new Product(
      "Swords of Gargantua", "swords-of-gargantua", "Game",
      this.thumbnailPath[13], this.introTextEN[12], this.introTextJP[12],
      [this.toolLogos[13], this.toolLogos[12]],
      [this.actionButtons[25], this.actionButtons[26]],
      this.projectTags[2]
    ),
    new Product(
      "Motionbase Chat", "motionbase-chat", "Web",
      this.thumbnailPath[11], this.introTextEN[13], this.introTextJP[13],
      [this.toolLogos[14], this.toolLogos[15], this.toolLogos[10]],
      [this.actionButtons[27]],
      this.projectTags[2]
    ),
    new Product(
      "Land of Beasts (WIP)", "land-of-beasts", "Game",
      this.thumbnailPath[9], this.introTextEN[9], this.introTextJP[9],
      [this.toolLogos[13], this.toolLogos[12]],
      [this.actionButtons[20], this.actionButtons[21]],
      this.projectTags[0]
    ),
    new Product(
      "Furry Gladiators", "furry-gladiators", "Game",
      this.thumbnailPath[0], this.introTextEN[0], this.introTextJP[0],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[14], this.actionButtons[0], this.actionButtons[1], this.actionButtons[9]],
      this.projectTags[0]
    ),
    new Product(
      "Brawling Heavies", "brawling-heavies", "Game",
      this.thumbnailPath[8], this.introTextEN[8], this.introTextJP[8],
      [this.toolLogos[13], this.toolLogos[12]],
      [this.actionButtons[18], this.actionButtons[19]],
      this.projectTags[0]
    ),
    new Product(
      "Super Turbo Kanji", "super-turbo-kanji", "Web",
      this.thumbnailPath[1], this.introTextEN[1], this.introTextJP[1],
      [this.toolLogos[5], this.toolLogos[6], this.toolLogos[7], this.toolLogos[2], this.toolLogos[8], this.toolLogos[9]],
      [this.actionButtons[3]],
      this.projectTags[0]
    ),
    new Product(
      "Furpunk Blast", "furpunk-blast", "Game",
      this.thumbnailPath[6], this.introTextEN[6], this.introTextJP[6],
      [this.toolLogos[12]],
      [this.actionButtons[16], this.actionButtons[17]],
      this.projectTags[1]
    ),
    new Product(
      "Stranded Typist", "stranded-typist", "Game",
      this.thumbnailPath[5], this.introTextEN[5], this.introTextJP[5],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[15], this.actionButtons[7], this.actionButtons[8]],
      this.projectTags[0]
    ),
    // Currently don't display 'Block Match'
    // new Product(
    //   "Block Match", "block-match", "Game",
    //   this.thumbnailPath[7], this.introTextEN[7], this.introTextJP[7],
    //   [this.toolLogos[13]],
    //   [this.actionButtons[11], this.actionButtons[13], this.actionButtons[12]],
    //   this.projectTags[0]
    // ),
    new Product(
      "VR Gamers Bot", "vr-gamers-bot", "Web",
      this.thumbnailPath[2], this.introTextEN[2], this.introTextJP[2],
      [this.toolLogos[7], this.toolLogos[2], this.toolLogos[9]],
      [this.actionButtons[4], this.actionButtons[2]],
      this.projectTags[0]
    ),
    new Product(
      "Portfolio Website", "portfolio-website", "Web",
      this.thumbnailPath[3], this.introTextEN[3], this.introTextJP[3],
      [this.toolLogos[10], this.toolLogos[3], this.toolLogos[11]],
      [this.actionButtons[5]],
      this.projectTags[0]
    ),
  ]

  getProducts(){
    return this.products.slice();
  }
}