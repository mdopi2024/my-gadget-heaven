import { rule } from "postcss"
import toast from "react-hot-toast";

// get data from docal storage 
const getCardToStorage = ()=>{
    const all = localStorage.getItem('card')
    if(all){
        const allParse = JSON.parse(all)
        return allParse;
    }
    return []
}
const setCard = item=>{
    const favorite = getCardToStorage()
    const isExist = favorite.find(card =>card.id === item.id)
    if(isExist) return toast.error('Its alreay exist');
    favorite.push(item)
    localStorage.setItem('card',JSON.stringify(favorite))
    toast.success('Its successfully added')
}



// for wish list 

const getWishList =()=>{
    const all = localStorage.getItem('wishlist')
    if(all){
        const allParse = JSON.parse(all)
        return allParse
    } return []
}
const addWishlist = (item)=>{
    const wishList= getWishList()
    const isExist = wishList.find(wish =>wish.id === item.id) 
    if(isExist)return toast.error('Its alreay exist');
    wishList.push(item);
    localStorage.setItem('wishlist',JSON.stringify(wishList))
    toast.success('Its successfully added')
}
export {setCard,addWishlist,getCardToStorage,getWishList}