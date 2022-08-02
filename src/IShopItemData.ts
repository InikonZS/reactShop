/*export default interface IShopItemData{
    name: string;
    price: number;
    count: number;
}*/

export default interface IShopItemData{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}