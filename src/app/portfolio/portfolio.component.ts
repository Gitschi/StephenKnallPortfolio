import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  products = this.productService.GetProducts();
  
  constructor(private productService: ProductService, private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.activePage = 1;
  }

}