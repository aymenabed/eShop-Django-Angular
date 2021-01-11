import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../services/product.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
   caddie: any;
  private sum: any;
  prixTotal: any;
  @ViewChild('reportContent') reportContent: ElementRef;


  constructor(private serviceProduit:ProductService) { }

  ngOnInit(): void {
  this.serviceProduit.getCaddieProduct("1").subscribe((res:any)=>{
    this.caddie=res.products;
  this.prixTotal=  this.caddie.reduce((a,b)=>{total:
  console.log
 return( b.qteDemander*b.prix )+  (a.qteDemander*a.prix)


  })
console.log(this.caddie)
  })
  }

  s() {

  }


  public makePdf() {

    this.generatePDF()
  }

    generatePDF() {
      var data = document.getElementById('reportContent');
      html2canvas(data).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('newPDF.pdf');
      });
    }

  public captureScreen() {
    const data = this.reportContent.nativeElement
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('ticket.pdf');
    });
  }






}
