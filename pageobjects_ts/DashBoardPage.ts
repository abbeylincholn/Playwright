import { expect, Page, Locator } from "@playwright/test";
export class DashBoardPage {

    page: Page;
    products: Locator;
    productsText: Locator;
    cart: Locator;
    orders: Locator;  


    constructor(page: Page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
         this.orders = page.locator("button[routerlink*='myorders']");
        this.cart = page.locator("[routerlink*='cart']");           
    }

    async searchProduct_AddCart(productName: string) {
      const titles = await this.productsText.allTextContents();
      console.log(titles);
      const count = await this.products.count();
      for (let i = 0; i < count; ++i) {
        if (await this.products.nth(i).locator("b").textContent() === productName) 
          { // add to cart
          await this.products.nth(i).locator("text= Add To Cart").click();             
          break;
        }
      }
    }

    async navigateToOrders()
{
    await this.orders.click();
}


    async goToCartPage() {
      
      await this.cart.click();
    }
}

module.exports = { DashBoardPage };