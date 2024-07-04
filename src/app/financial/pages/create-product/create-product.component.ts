import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  private readonly fb = inject(FormBuilder);

  public productForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    logo: ['', Validators.required],
    liberationDate: [],
    revisionDate: []
  });

  isValidField(field: string): boolean | null {
    return this.productForm.controls[field].errors && this.productForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.productForm.controls[field]) return null;

    const errors = this.productForm.controls[field].errors || {};

    for(const key of Object.keys(errors)) {
      switch(key) {
        case 'required': return `Field ${field} is required!`;
      }
    }
    return null;
  }

  save(){
    
  }

  reset() {
    this.productForm.reset();
  }

}
