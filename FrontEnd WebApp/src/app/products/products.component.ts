import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { MessageService } from '../services/shared/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private productForm: FormGroup;
  products: any;
  filteredItems: any = [];
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private productService: ProductService,
    private sharedService: MessageService
  ) {
    this.productForm = this.fb.group({
      qteDemander: ['1'],
    });
  }

  ngOnInit(): void {
    this.products = [];
    this.productService.getAllProduct().subscribe((res: any) => {
      this.products = res.products;
      this.assignCopy();
    });
  }
  openSnackBar() {
    this._snackBar.open('produit ajouté dans le caddie avec succès');
  }

  commanderProduits(prod) {
    let product = prod;
    let qtedemander = parseFloat(
      this.productForm.controls['qteDemander'].value
    );
    product.qteDemander = qtedemander + prod.qteDemander;

    product = {
      ...product,
      total: qtedemander * parseFloat(prod.prix),
      caddie: 1,
    };

    let indice = this.products.findIndex((item) => item.id === prod.id);

    product.qte = this.products[indice].qte - qtedemander;
    if (product.qte < 0) {
      Swal.fire({
        title: 'Echéc !',
        text: 'Quantité non disponible',
        icon: 'error',
      });
    } else
      this.productService.addProductToCaddie(product).subscribe((response) => {
        let indice = this.products.findIndex((item) => item.id === prod.id);
        let qteReste = this.products[indice].qte - qtedemander;
        if (qteReste === 0) {
          this.products.splice(indice, 1);
        } else if (qteReste < 0) {
        }

        this.products[indice].qte -= qtedemander;
        this.sharedService.sendMessage(product);
        this.openSnackBar();
      });
  }
  options: string[];
  filteredOptions$: Observable<string[]>;

  onChange(event) {
    let value = event.target.value;
    if (!value) {
      this.assignCopy();
    }
    this.filteredItems = Object.assign([], this.products).filter(
      (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.products);
  }
}
