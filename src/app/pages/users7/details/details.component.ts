import { Component } from '@angular/core';
import { User7Service } from '../user7.service';
import { FindAllProducts } from '../list/interfaces/findAllProducts.interface';
import { firstValueFrom } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  productDetail!: FindAllProducts;
  productFormGroup!: FormGroup;

  constructor(
    private readonly user7Service: User7Service,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'Details', active: true },
    ];

    const currentProductId = this.route.snapshot.params['id'];
    this.createFormGroup();
    this.getData(currentProductId);
  }

  createFormGroup() {
    this.productFormGroup = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  async getData(id: number) {
    const data = firstValueFrom(this.user7Service.finOneProduct(id));
    this.productDetail = await data;
    console.debug('productDetail', this.productDetail);

    this.productFormGroup.patchValue({
      id: this.productDetail.id,
      title: this.productDetail.title,
      price: this.productDetail.price,
      description: this.productDetail.description,
      categoryId: this.productDetail.category,
      image: this.productDetail.image,
    });

    console.debug(this.productFormGroup.value);
  }

  saveProduct() {
    console.log(this.productFormGroup.value);
    let timerInterval: any;
    Swal.fire({
      title: 'Order inserted successfully!',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }
}
