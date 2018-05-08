import { AddressService } from './../../address.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    addresses: any;

    constructor(private http: HttpClient, private service: AddressService) {}

    ngOnInit() {
        this.getAddresses();
    }

    getAddresses() {
        this.service.getAddresses().subscribe(res => {
            this.addresses = res;
        });
    }

    deleteAddress(id: number) {
        this.service.deleteAddress(id).subscribe(res => {
            console.log('Deleted');
        });
    }
}
