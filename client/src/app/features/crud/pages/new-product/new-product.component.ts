import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewproductService } from './newproduct.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  selectedFile: any;
  previewUrl: any;
  imagen: boolean = false;
  FormObject: any = {
    nombre: new FormControl('', [Validators.required]),
    id_categoria: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
}
  form: FormGroup = new FormGroup(this.FormObject);
  constructor(private service: NewproductService) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject);
  }
  onFileSelected(e: any) {
    console.log(e);
    const reader = new FileReader();
    const { files } = e.target;
    if (files && files.length) {
      this.selectedFile = files[0];
      console.log(this.selectedFile);
      reader.onload = (e) => {
        this.previewUrl = reader.result;
        console.log(this.previewUrl);
        this.imagen = true;
      };
      reader.readAsDataURL(this.selectedFile)
    }
  }
  async upload() {
    const { nombre, id_categoria, precio, stock } = this.form.value;
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('id_categoria', id_categoria);
    fd.append('precio', precio);
    fd.append('stock', stock);
    fd.append('imagen', this.selectedFile);
    await this.service.create(fd);
  }
}
