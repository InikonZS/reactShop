import IShopItemData from "./IShopItemData"

interface IShopItemProps{
    data: IShopItemData,
    onClose: ()=>void;
}

export default function ShopItem({data, onClose}: IShopItemProps){
    return (
        <div>
            <button onClick={()=>onClose()}>close</button>
            <h2>{data.title}</h2>
            <p>price: {data.price}$</p>
            <img src={data.image} width={100}/>
        </div>
    )
}