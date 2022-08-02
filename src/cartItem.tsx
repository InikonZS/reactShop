import IShopItemData from "./IShopItemData"

interface ICartItemProps{
    data: IShopItemData  & {count:number},
    onRemove: ()=>void,
}

export default function CartItem({data, onRemove}: ICartItemProps){
    return (
        <div>
            <div>{data.title}</div>
            <div>{data.price}</div>
            <div>count {data.count}</div>
            <button onClick={()=>{onRemove()}}>remove</button>
        </div>
    )
}