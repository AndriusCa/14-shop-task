console.clear();

import { Shop } from "./Js/Shop.js";
import { Item } from "./Js/Shop.js";

const candyShop = new Shop("CandyShop", "eur", 0 );
candyShop.greeting()

//console.log(candyShop);
//console.log(candyShop.currency);
//console.log(candyShop.inventor);

console.log('----------------------')

const goods = new Item(1, 'candyPack');

//console.log(goods);
//console.log(goods.goodsId);
//console.log(goods.goodsName);
//console.log(goods.goodsBuyPrice);
//console.log(goods.goodsSalePrice);
//console.log(goods.goodsQuantity);
//console.log(goods.goodsSoldQuantity);
console.log(goods.restock(45));
console.log(goods);
console.log(goods.goodsInShop())
