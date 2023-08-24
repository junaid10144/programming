import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
// export class AboutComponent implements OnInit {

//   constructor(private activatedRoute: ActivatedRoute) {

//   }


//   ngOnInit(): void {
//     console.log(this.activatedRoute)
//     this.param = this.activatedRoute.snapshot.params['username']
//     this.queryParam = this.activatedRoute.snapshot.queryParams['course']
//   }

//   param: any;
//   queryParam: any;



// }

export class AboutComponent implements OnInit {
  constructor(
    private service: ProductService
  ) {

  }

  // ngOnInit(): void {
  //   this.service.getAllProductsWithLimit()
  //     .subscribe({ // subscribe isi liye kr rhy qk ye observable return kr rha
  //       next: (data) => {
  //         console.log(data);
  //       }
  //     });
  // }

  ngOnInit(): void {
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image.jpg'
    }
    this.service.createProduct(product).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
          console.error('An error occurred' + error.error.message)
        } else {
          // server side error
          console.error(`Server returned status code ${error.status}, error message: ${error.message}`)
        }

      }
    })
  }
}