export const initialState = {
  basket: [{
    id: "2",
    title: "New Drawing",
    price: 598,
    rating:4,
    image: "https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-11.jpg",
  }], 
  //[ "그림", "sonny" ] 여기 배열에 하나 들어오면 장바구니 카운트가 1,2 3 .. 올라감 
  user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      // logic for adding item to basket      
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
        //logic for removing item from basket

        //we cloned the basket
        let newBasket = [...state.basket];

        // we check to see if product exists,
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
          );
        
        if (index >= 0 ){
          //item exists in basket, remove it..
          newBasket.splice(index, 1);
          } else {
            console.warn(
              `can't remove product (id: ${action.id}) as its nothing`
            );
          }

        return { 
          ...state, 
          basket: newBasket }; 
    default:
      return state; 
  }
}

export default reducer;

