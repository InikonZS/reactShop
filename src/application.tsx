import Cart from './cart';
import ShopBoard from './shopBoard';
import dataUrl from './data/shopItems.json';
import { useEffect, useState } from 'react';
import IShopItemData from './IShopItemData';



export default function Application(){
    const [shopItems, setShopItems] = useState<Array<IShopItemData>>([]);
    const [cartItems, setCartItems] = useState<Array<IShopItemData & {count:number}>>([]);
    useEffect(()=>{
        fetch(dataUrl).then(res=> res.json()).then(data=>{
            //todo: check data fields
            setShopItems(data);
        })
        /*fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setShopItems(json));*/
    }, [])
    return (
        <>
            <Cart items={cartItems} onRemoveItem={itemData=>{
                setCartItems(last=> {
                    const found = last.findIndex(it=> it.id === itemData.id)
                    if (last[found].count == 1){
                        return last.filter(it=> it.id != itemData.id);
                    } else {
                        const next = [...last];
                        next[found] = {...next[found], count: next[found].count - 1} 
                        return next
                    }
                    //last.filter(it=> it.id != itemData.id)
                });
            }} />
            <ShopBoard items={shopItems} onAdd = {(itemData)=>{
                setCartItems((last)=> {
                    const found = last.findIndex(it=> it.id === itemData.id)
                    if (found==-1){
                        return [...last, {...itemData, count:1}]
                    } else {
                        const next = [...last];
                        next[found] = {...next[found], count: next[found].count + 1} 
                        return next
                    }
                   // [...last, itemData]
                });
            }}/>
        </>
    )
}