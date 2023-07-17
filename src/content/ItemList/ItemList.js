import Item from "./Item"
const ItemList = ({Items , handle_itemView}) => {
  return (
    <>
    <ul className="ItemList">
      {/* <li>{Items.map((Item) => (<Item key={Item.id} Item=/>))}</li> */}
      {/* <Item Item={Items[0]}/> */}
      <li>{Items.map( (item) => (<Item key={item.id} item={item} handle_itemView={handle_itemView}/>))}</li>
    </ul>
    </>
  )
}

export default ItemList