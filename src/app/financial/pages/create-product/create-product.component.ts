import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  private readonly fb = inject(FormBuilder);

  public productForm: FormGroup = this.fb.group({
    id: [],
    name: [],
    description: [],
    logo: [],
    liberationDate: [],
    revisionDate: []
  });

  save(){
    
  }

}
