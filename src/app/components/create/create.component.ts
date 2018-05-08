import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../address.service';
import { FormGroup,  FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Add address';
    angForm: FormGroup;
    constructor(private service: AddressService, private fb: FormBuilder) {
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            country: ['', Validators.required ],
            city: ['', Validators.required ],
            zipCode: ['', Validators.required ],
            street: ['', Validators.required ],
        });
    }
    addAddress(country, city, zipCode, street) {
        this.service.addAddress(country, city, zipCode, street);
    }

  ngOnInit() {
  }

}
