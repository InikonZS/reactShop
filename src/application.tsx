import Cart from './cart';
import ShopBoard from './shopBoard';
import dataUrl from './data/shopItems.json';
import { useEffect, useState } from 'react';
import IShopItemData from './IShopItemData';
import style from './application.css';



export default function Application(){
    const [shopItems, setShopItems] = useState<Array<IShopItemData>>([]);
    const [cartItems, setCartItems] = useState<Array<IShopItemData & {count:number}>>([]);
    const [isShownCart, setShownCart] = useState(false);
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
            <div className={style['header']}>
                <div>
                    Shop
                </div>
                <div className={style['cartIcon']}> 
                    <button onClick={()=>{
                        setShownCart(true);
                    }}>Cart</button>
                    <span>{((cartItems.reduce((ac, it)=> ac + it.count, 0))).toFixed(0)}</span>
                </div>
            </div>
            {
                isShownCart && <Cart 
                    items={cartItems} 
                    onRemoveItem={itemData=>{
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
                    }} 
                    onClose={()=>{
                        setShownCart(false);
                    }}
                />
            }
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

            <div className={style['footer']}>
                <ul className={style['contacts']}>
                    <li><a href="#">github</a> </li>    
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">emai</a></li>
                </ul>
            </div>
        </>
    )
}