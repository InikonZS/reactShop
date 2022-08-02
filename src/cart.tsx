import CartItem from './cartItem';
import IShopItemData from './IShopItemData';

interface ICartProps{
    items: Array<IShopItemData & {count:number}>,
    onRemoveItem: (item:IShopItemData)=>void
}

function countItems(items: Array<IShopItemData>): Array<IShopItemData & {count:number}>{
    const map: Record<number, number> = {}
    const idToObject: Record<number, IShopItemData> = {}
    items.forEach(it=>{
        const val = map[it.id] || 0;
        map[it.id] = val + 1;
        idToObject[it.id] = it;
    });

    const result: Array<IShopItemData & {count:number}> = [];
    Object.keys(map).forEach(it=>{
        result.push({...idToObject[+it], count: map[+it]});
    });
    return result;
}

export default function Cart({items, onRemoveItem}:ICartProps){
    return (
        <div>
            <div>
                {items.map(itemData=>{
                    return <CartItem key={itemData.id} data={itemData} onRemove={()=>{
                        onRemoveItem(itemData);
                    }}/>
                })}
            </div>
            <div>
                total: {((items.reduce((ac, it)=> ac + it.price*100 * it.count, 0))/100).toFixed(2)}
            </div>
        </div>
        
    )
}