import { Injectable } from '@angular/core';
import { IProduct } from '../model/IProduct';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cart: IProduct[]


    constructor() {
        this.cart = [
            { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, qty: 1, img: 'https://fakeimg.pl/200x100', categoryId: 1 },
            { id: 200, name: 'Apple MacBook laptop', price: 2007780, qty: 0, img: 'https://fakeimg.pl/200x100', categoryId: 1 },
            { id: 300, name: 'Lenovo Tab 2', price: 3000, qty: 10, img: 'https://fakeimg.pl/200x100', categoryId: 2 },
            { id: 400, name: 'Samsung Tab', price: 40.5, qty: 2, img: 'https://fakeimg.pl/200x100', categoryId: 2 },
            { id: 500, name: 'Smasung Note 10', price: 50000, qty: 0, img: 'https://fakeimg.pl/200x100', categoryId: 3 },
            { id: 600, name: 'Samsung S22 Utlra', price: 600, qty: 1, img: 'https://fakeimg.pl/200x100', categoryId: 3 },
            { id: 700, name: 'apple S22 Utlra', price: 500, qty: 4, img: 'https://fakeimg.pl/200x100', categoryId: 4 },
            { id: 800, name: 'tochiba Utlra', price: 60000, qty: 14, img: 'https://fakeimg.pl/200x100', categoryId: 4 },
            { id: 900, name: 'ththt Utlra', price: 60, qty: 0, img: 'https://fakeimg.pl/200x100', categoryId: 4 },
        ]
    }
}
