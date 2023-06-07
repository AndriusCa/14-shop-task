
export class Shop {
  constructor(shopName, currency) {
    this.shopName = shopName;
    this.currency = currency;
  }


  greeting() {
    console.log( `Sveiki atvykę į ${this.shopName} !`);
  }
}
