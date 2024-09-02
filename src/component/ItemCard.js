
export default function ItemCard({item, amount, cover}){
    return(
        <div className = "item-card">
            <h1>{item}</h1>
            <h2>Amount: {amount}</h2>
        </div>
    )
}