import ShopItem from './shopItem';
import IShopItemData from './IShopItemData';
import ShopItemPopup from './shopItemPopup';
import { useState } from 'react';

interface IShopBoardProps{
    items: Array<IShopItemData>
    onAdd: (itemData: IShopItemData) => void;
}

export default function ShopBoard({items, onAdd}: IShopBoardProps){
    const [activeItem, setActiveItem] = useState<IShopItemData | null>(null);
    return (
        <div>
            {activeItem && <ShopItemPopup data={activeItem} onClose={()=>{
                setActiveItem(null);
            }}/> }
            <div>
                {items.map(itemData => <ShopItem 
                    key={itemData.id} 
                    data = {itemData} 
                    onAdd={()=>{
                        onAdd(itemData)
                    }}
                    onDetails ={()=>{
                        setActiveItem(itemData)
                    }}
                    />
                )}
            </div>
        </div>
    )
}