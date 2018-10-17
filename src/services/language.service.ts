import { Injectable } from "../../node_modules/@angular/core";

@Injectable()

export class LanguageService{

  activePage: number;

  // Selected Language true = English, false = Japanese
  displayIsEnglish: boolean = true;

  GetLanguage(){
    return this.displayIsEnglish;
  }

  SwitchToEnglish(){
    if(!this.displayIsEnglish){
      this.displayIsEnglish = true;
    }
  }

  SwitchToJapanese(){
    if(this.displayIsEnglish){
      this.displayIsEnglish = false;
    }
  }
}