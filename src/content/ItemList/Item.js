const Item = ({ item , handle_itemView }) => {
  return (
 
      <div className="Item" onClick={(e) => { handle_itemView(item.id) }}>
        <div className="CheckBox"></div>
        <div className="ItemListItemName"><span>{item.itemName}</span></div>
        <div className="ItemListItemDescription">{item.itemDescription}</div>
        <div className="ItemListItemCost">{item.itemCost}</div>
      </div>
   
  )
}

export default Item