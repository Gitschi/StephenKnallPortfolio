import { Injectable } from "../../node_modules/@angular/core";
import { Product } from "../models/product.model";

@Injectable()

export class ProductService{

  thumbnailPath: string[] = [
    "https://res.cloudinary.com/knallcloud/image/upload/v1539688553/PortfolioImages/Furry_Gladiators_GoogleBanner.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702253/PortfolioImages/SuperTurboKanji.jpg",
    "https://res.cloudinary.com/knallcloud/image/upload/v1539702255/PortfolioImages/VRGamersBot.jpg"
  ]

  introTextEN: string[] = [
    "Arcade <b>Game</b> with retro theme; Made with <b>Unity</b> and released on <b>PC</b> and <b>Android</b>. Try to return the fruits to their bushes while avoiding falling blocks and obstacles. The difficulty will scale the longer the game goes on to keeps you on your toes!",
    "SUPER Turbo Kanji let's gooooooo",
    " All about the vr gamers booooot!"
  ]

  introTextJP: string[] = [
    "供ルムミ断掌ねレっ国市カユタ親屯放96時ど独色ヤトテ別懇じほ来稿そ携更ほしり具取ち止広よ減戸せ投後 ばぱ客告をの純安ウ阪経き",
    "供ルムミ断掌ねレっ国市カユタ親屯放96時ど独色ヤトテ別懇じほ来稿そ携更ほしり具取ち止広よ減戸せ投後 ばぱ客告をの純安ウ阪経き",
    "供ルムミ断掌ねレっ国市カユタ親屯放96時ど独色ヤトテ別懇じほ来稿そ携更ほしり具取ち止広よ減戸せ投後 ばぱ客告をの純安ウ阪経き"
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
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539699808/PortfolioLogos/Logo_HTML.png", title: "HTML"},
    // 6 CSS
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539699808/PortfolioLogos/Logo_CSS.png", title: "CSS"},
    // 7 JavaScript
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539699808/PortfolioLogos/Logo_JavaScript.png", title: "JavaScript"},
    // 8 MongoDB
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539700297/PortfolioLogos/Logo_mongoDB.png", title: "MongoDB"},
    // 9 Heroku
    {imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539701620/PortfolioLogos/Logo_Heroku.png", title: "Heroku"}
  ]
  
  actionButtons: Object[] = [
    // Furry Gladiators Gamejolt
    {link: "https://gamejolt.com/games/furrygladiators/370809", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Gamejolt.png"},
    // Furry Gladiators GooglePlay
    {link: "https://play.google.com/store/apps/details?id=com.Studio208.FurryGladiators", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692127/PortfolioActionButtons/Button_GooglePlay.png"},
    // Github Vr GamersBot
    {link: "https://github.com/Gitschi/VRGamersBot", imagePath: "https://res.cloudinary.com/knallcloud/image/upload/v1539692126/PortfolioActionButtons/Button_Github.png"}
  ]

  public products: Product[] = [
    new Product(
      "Furry Gladiators", this.thumbnailPath[0], this.introTextEN[0], this.introTextJP[0],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[0], this.actionButtons[1]]
    ),
    new Product(
      "Super Turbo Kanji", this.thumbnailPath[1], this.introTextEN[1], this.introTextJP[1],
      [this.toolLogos[5], this.toolLogos[6], this.toolLogos[7], this.toolLogos[2], this.toolLogos[8], this.toolLogos[9]],
      [this.actionButtons[0], this.actionButtons[1]]
    ),
    new Product(
      "VR Gamers Bot", this.thumbnailPath[2], this.introTextEN[2], this.introTextJP[2],
      [this.toolLogos[7], this.toolLogos[2], this.toolLogos[9]],
      [this.actionButtons[2]]
    )    
  ]

  GetProducts(){
    return this.products.slice();
  }
}