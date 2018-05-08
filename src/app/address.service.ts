import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';


@Injectable()
export class AddressService {

    result: any;
    constructor(private http: HttpClient) { }
    getCredentials() {
        // TODO: create auth with token
      return {
          withCredentials: true,
          headers: { 'Authorization':  'Basic ' + btoa( 'ruslan:admin')}
      };
    }

    addAddress(country, city, zipCode, street) {
        const uri = 'http://localhost:8000/api/address';
        const obj = {
            country: country,
            city: city,
            zipCode: zipCode,
            street: street
        };
        this.http.post(uri, obj, this.getCredentials())
            .subscribe(res => console.log('Done'));
    }

    getAddresses() {
        const uri = 'http://localhost:8000/api/address/items';
        return this
            .http
            .get(uri, this.getCredentials())
            .pipe(map(res => {
                return res;
            }));
    }

    updateAddress(id: number, country: string, city: string, zipCode: string, street: string) {
        const uri = 'http://localhost:8000/api/address/' + id;

        const obj = {
            country: country,
            city: city,
            zipCode: zipCode,
            street: street
        };
        this
            .http
            .put(uri, obj, this.getCredentials())
            .subscribe(res => console.log('Done'));
    }

    getAddress(id: any) {
        const uri = 'http://localhost:8000/api/address/' + id;
        return this
            .http
            .get(uri, this.getCredentials())
            .pipe(map(res => {
                return res;
            }));
    }

    deleteAddress(id: number) {
        const uri = 'http://localhost:8000/api/address/' + id;

        return this
            .http
            .delete(uri, this.getCredentials())
            .pipe(map(res => {
                return res;
            }));
    }
}
