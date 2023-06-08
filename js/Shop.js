
export class Shop {
  constructor(candyShop, currency, inventor) {
    this.shopName = candyShop;
    this.currency = currency;
    this.inventor = inventor;
  }

  greeting() {
    console.log( `Sveiki atvykę į ${this.shopName}!`);
  }
}


export class Item {
  constructor(goodsId, goodsName) {
    this.goodsId = goodsId
    this.goodsName = goodsName
    this.goodsBuyPrice = 2
    this.goodsSalePrice = 3
    this.goodsQuantity = 0
    this.goodsSoldQuantity = 0
  }

  restock(refill) {
    this.goodsQuantity += refill
    return `Likutis papildytas ${refill}vnt`
  }

  goodsInShop() {
    if (this.goodsQuantity === 0) {
      return "Sios prekes nebeturime"
    } else {
      return `${this.goodsQuantity}vnt `
    }
  }
}

