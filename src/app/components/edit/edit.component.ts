import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../../address.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    address: any;
    angForm: FormGroup;
    title = 'Edit address';
    constructor(private route: ActivatedRoute, private router: Router, private service: AddressService, private fb: FormBuilder) {
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

    updateAddress(country, city, zipCode, street) {
        this.route.params.subscribe(params => {
            this.service.updateAddress(params['id'], country, city, zipCode, street);
            this.router.navigate(['index']);
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.address = this.service.getAddress(params['id']).subscribe(res => {
                this.address = res;
            });
        });
    }
}