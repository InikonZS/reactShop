import IShopItemData from "./IShopItemData"

interface IShopItemProps{
    data: IShopItemData,
    onAdd: ()=>void,
    onDetails: ()=> void
}

export default function ShopItem({data, onAdd, onDetails}: IShopItemProps){
    return (
        <div>
            <h2>{data.title}</h2>
            <p>price: {data.price}$</p>
            <img src={data.image} width={100}/>
            <button onClick={()=>{onAdd()}}>to cart</button>
            <button onClick={()=>{onDetails()}}>details...</button>
        </div>
    )
}