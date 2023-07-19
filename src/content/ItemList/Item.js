const Item = ({ item , handle_itemView , handle_Check}) => {
  return (
      
      <div className="Item" onClick={(e) => { handle_itemView(item.id) } } style={(item.itemCheck) ? { textDecoration: 'line-through', color: 'var(--black)' , backgroundColor: 'var(--pink)'} : null} >
        <div className="CheckBox" onClick={() => handle_Check(item.id)} style={(item.itemCheck) ? { backgroundColor: 'var(--black)' } : null} ></div>
        <div className="ItemListItemName" ><span>{item.itemName}</span></div>
        <div className="ItemListItemDescription">{item.itemDescription}</div>
        <div className="ItemListItemCost">{item.itemCost}</div>
      </div>
   
  )
}

export default Item