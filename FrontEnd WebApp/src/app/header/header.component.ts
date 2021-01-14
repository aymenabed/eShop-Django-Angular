import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/shared/shared.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Liste des produits afficher dans header caddie
  groupProduct = [];

  constructor(
    private sharedService: MessageService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getCaddieProduct('1').subscribe((res: any) => {
      res.products.map((item) => {
        this.displayData(item);
      });
    });

    this.sharedService.getMessage().subscribe((res) => {
      this.displayData(res);
    });
  }

  displayData(res) {
    res = { ...res, total: res.prix * res.qteDemander };

    let data = this.groupProduct.filter((item) => item.id === res.id);

    if (data.length > 0) {
      let index = this.groupProduct.findIndex((item) => item.id === res.id);

      if (index > -1) {
        this.groupProduct[index].qteDemander += parseFloat(res.qteDemander);
        this.groupProduct[index].total += parseFloat(res.prix);
      }
    } else {
      this.groupProduct.push(res);
    }
  }
}
