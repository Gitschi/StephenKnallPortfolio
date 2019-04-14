import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  products = this.productService.GetProducts();
  
  constructor(private productService: ProductService, private languageService: LanguageService, private seoService: SeoService) { }

  ngOnInit() {
    this.languageService.activePage = 1;
    this.seoService.createLinkForCanonicalURL();
  }

  ngOnDestroy(){
    this.seoService.removeCanonicalTags();
  }

  setCategories(event){
    this.products = this.productService.GetProducts();
    let desiredCategory: string = event.srcElement.childNodes[0].data;
    if(desiredCategory !== "All"){
      this.products = this.products.filter(product => product.category === desiredCategory);
    }
  }
}