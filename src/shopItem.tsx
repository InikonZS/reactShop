import IShopItemData from "./IShopItemData"
import style from "./shopItem.css";

interface IShopItemProps{
    data: IShopItemData,
    onAdd: ()=>void,
    onDetails: ()=> void
}

export default function ShopItem({data, onAdd, onDetails}: IShopItemProps){
    return (
        <div className={style['wrapper']}>
            <h2 className={style['title']}>{data.title}</h2>
            <div className={style['infoPanel']}>
                <div className={style['imageWrapper']}>
                    <img className={style['image']} src={data.image}/> 
                </div>                
                <p className={style['price']}>price: {data.price}$</p>
            </div>
           
            <div className={style['buttonPanel']}>
                <button className={style['btn']} onClick={()=>{onAdd()}}>to cart</button>
                <button className={style['btn']} onClick={()=>{onDetails()}}>details...</button>
            </div>
           
        </div>
    )
}