import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart: IProduct[] =[]


    constructor() { }

    ngOnInit(): void {
    }

}
