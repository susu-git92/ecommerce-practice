export const initialState = {
  product: [
    {
      id:"1",
      title:"N55djsofjdsofo",
      price:598,
      rating:4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBqbbmtEvBlKvzCeA5jgJ-N5qWmhvgytBWUg&usqp=CAU",
    },
    {
      id:"2",
      title:"thssffe lean starㄹㄹt potential",
      price:11.9,
      rating:3,
      image:"https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-10.jpg",
    },
    {
      id:"3",
      title:"thssffe lean starㄹㄹt potential",
      price:300,
      rating:5,
      image:"https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-55.jpg",
    },
    {
      id:"4",
      title:"thssffe lean starㄹㄹt potential",
      price:751,
      rating:2,
      image:"https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-24.jpg",
    },
    {
      id:"5",
      title:"thssffe lean starㄹㄹt potential",
      price:156,
      rating:5,
      image:"https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-34.jpg",
    },
  ],
  basket: [], 
 
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

