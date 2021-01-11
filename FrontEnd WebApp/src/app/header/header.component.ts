import {Component, OnInit} from '@angular/core';
import {MessageService} from '../services/shared/shared.service';
import {ProductService} from '../services/product.service';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  products: any = [];
  groupProduct:any = [];

  constructor(private  sharedService: MessageService,private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getCaddieProduct("1").subscribe((res:any)=>{

      console.log(res)
      res.products.map(item=>{
        this.displayData(item)

      })
    })


    this.sharedService.getMessage().subscribe(res => {

this.displayData(res)

  })}

displayData(res){
console.log(res)
  res={...res,total:res.prix*res.qteDemander}

  let data = this.groupProduct.filter(item => item.id === res.id);
  console.log(data);

  if (data.length > 0) {

    let index = this.groupProduct.findIndex(item => item.id === res.id);

    if (index > -1) {
      console.log('total')
      console.log(this.groupProduct[index].total)
      this.groupProduct[index].qteDemander += parseFloat(res.qteDemander);
      this.groupProduct[index].total += parseFloat(res.prix);
    }
  }
  else {

    this.groupProduct.push(res);
  }


  console.log(this.groupProduct);

}
}
