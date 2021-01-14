import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
})
export class FactureComponent implements OnInit {
  caddie: any;
  prixTotal: any;

  // reference div id = reportContent
  @ViewChild('reportContent') reportContent: ElementRef;

  constructor(private serviceProduit: ProductService) {}

  ngOnInit(): void {
    this.serviceProduit.getCaddieProduct('1').subscribe((res: any) => {
      this.caddie = res.products;
      this.prixTotal = 0;
      this.caddie.map((res: any) => {
        this.prixTotal += res.qteDemander * res.prix;
      });
    });
  }

  public captureScreen() {
    const data = this.reportContent.nativeElement;
    html2canvas(data).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('ticket.pdf');
    });
  }
}
