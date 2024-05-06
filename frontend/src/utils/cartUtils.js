export const addDecimals = (num) => { 
    return (Math.round(num *100)/100).toFixed(2);
}
export const updateCart = (state)=>{
    //calculate items 
    state.itemsPrice = addDecimals(state.cartItems.redux((acc,item) =>acc + item.price * item.qty,0));
    //shipping  cART
    state.shippingPrice = addDecimals(state.itemsPrice >100 ? 0 :10);

//Calculate Tax
state.tax = addDecimals(Number((0.15  * state.itemsPrice).toFixed(2)));
//total Price
state.totalPrice = (
Number(state.itemsPrice) +
Number(state.shippingPrice) +
Number(state.tax)
).toFixed(2);  
localStorage.setItem('cart', JSON.stringify(state));
return state;
}