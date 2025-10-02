import { expect, type Locator, type Page } from '@playwright/test';

let message1 : string = "Hello, World!";
message1 = "bypass"
console.log(message1);

let age: number = 25;
age = 30;
console.log(age);

let isStudent: boolean = true;
isStudent = false;

let numberArrary: number[] = [1, 2, 3, 4, 5];
numberArrary = [10, 20, 30];

let data : any = "This can be any type";
data = 42;
data = true;

//function
function add (a:number, b:number): number {
    return a + b;
}

add(5, 10);

let user: {name:string, age:number, location:string} = { name: "Alice", age: 28, location: "UK" };
user.location = "USA";


class CartPage {

    page: Page;
    cartProducts: Locator;
    productsText: Locator;
    cart: Locator;
    orders: Locator;
    checkout: Locator;
    
    constructor(page: any) {
        this.page = page;
        this.cartProducts = page.locator("div li").first();
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        //this.checkout = page.locator("text=Checkout");
        this.checkout = page.locator("[type*='button']").nth(1);

    }


    async VerifyProductIsDisplayed(productName) {

        await this.cartProducts.waitFor();
        const bool = await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();
    }

    getProductLocator(productName) {
        return this.page.locator("h3:has-text('" + productName + "')");
    }

    async Checkout() {
        await this.checkout.click();
    }

    
}
module.exports = { CartPage };

