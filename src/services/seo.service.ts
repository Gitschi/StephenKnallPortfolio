import { Injectable, Inject } from "../../node_modules/@angular/core";
import { DOCUMENT } from "../../node_modules/@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})

export class SeoService{
  constructor(@Inject(DOCUMENT) private doc) {}

  // Sets canonical link for SEO optimization
  createLinkForCanonicalURL() {
     let link: HTMLLinkElement = this.doc.createElement('link');
     link.setAttribute('rel', 'canonical');
     this.doc.head.appendChild(link);
     link.setAttribute('href', "www.stephenknall.com/" + this.doc.URL.substr(this.doc.URL.lastIndexOf('/') + 1));
     link.setAttribute('id', "canonicalTag");
  } 

  // Removes the latest set canonical tag on page change
  removeCanonicalTags(){
    this.doc.getElementById("canonicalTag").remove();
  }
  
}