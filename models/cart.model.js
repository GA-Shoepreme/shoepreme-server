//class version
class Cart {
    constructor(oldCart){
    this.items = oldCart.items || {};
    this.totalQty =oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    }

    //method to add new item to the cart
    add (item, id) {
        //checking to see if item is in the old cart
        let storedItem = this.items[id];
        // if item does not exist, it will create a new item in the cart
        if(!storedItem){
            storedItem = this.items[id] = {item: item, qty: 0, price: 0}; 
        }
        storedItem.qty++; //increase qty if item already exist in cart and/or for new item 
        storedItem.price = storedItem.item.retailPrice * storedItem.qty;//adjust price if item already exist in cart and/or for new item
        this.totalQty++;// update total qty
        this.totalPrice += storedItem.item.retailPrice;//update total price
    }

    //method to convert cart items from an object to an array for display purposes
    generateArray () {
        const arr = [];
        for(let id in this.items){
            arr.push(this.item[id]);
        }
        return arr;
    }
}

module.exports = Cart
