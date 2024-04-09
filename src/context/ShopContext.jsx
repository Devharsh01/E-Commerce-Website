import React, { createContext, useState, useEffect} from "react";
export const ShopContext = createContext();
let port = 4000;

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++)
    {   cart[index] = 0;           }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product,setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //For the first rendering of products on the webpage
    useEffect(()=>{
        fetch(`http://localhost:${port}/allproducts`).then((response)=>response.json())
        .then((data)=>setAll_Product(data));

        if(localStorage.getItem('auth-token')){
            fetch(`http://localhost:${port}/getcart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },  
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])
    
    /* Used to add items into the cart */
    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]:prev[itemID]+1}))
        if(localStorage.getItem('auth-token')){
            fetch(`http://localhost:${port}/addtocart`,{
                method:"POST",
                headers:{
                    Accept:"Application/form-data",
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemID})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }
    
    /* Used to remove items from the cart */
    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]:prev[itemID]-1}))
        if(localStorage.getItem('auth-token')){
            fetch(`http://localhost:${port}/removefromcart`,{
                method:"POST",
                headers:{
                    Accept:"Application/form-data",
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemID})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
            
        }
    }
    
    const getTotalCartAmount = () => {
        console.log(all_product)
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;