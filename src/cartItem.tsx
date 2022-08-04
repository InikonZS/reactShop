import IShopItemData from "./IShopItemData"
import style from './cartItem.css';

interface ICartItemProps{
    data: IShopItemData  & {count:number},
    onRemove: ()=>void,
}

export default function CartItem({data, onRemove}: ICartItemProps){
    return (
        <div className={style['wrapper']}>
            <div>{data.title}</div>
            <div>{data.price}</div>
            <div>count {data.count}</div>
            <button onClick={()=>{onRemove()}}>remove</button>
        </div>
    )
}