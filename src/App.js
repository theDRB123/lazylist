import { useState } from 'react';
import { Route } from 'react-router-dom/dist/umd/react-router-dom.development';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Title from './Title'
import ItemListContainer from './content/ItemList/ItemListContainer'
import ViewPanel from './content/ViewPanel/ViewPanelContainer'


function App() {

  const navigate = useNavigate();
  

  //data
  const [Items, setItems] = useState([
    // {
    //   id: 1,
    //   itemCheck: true ,
    //   itemName: "item",
    //   itemCost: 20,
    //   itemDescription: "itemDes",
    //   itemCategoryIndex: 1,
    //   itemLink: "ItemLink1"
    // } ,
    // {
    //   id:2,
    //   itemCheck: false ,
    //   itemName: "item2" ,
    //   itemCost: 30,
    //   itemDescription: "itemDes2" ,
    //   itemCategoryIndex: -1,
    //   itemLink: "ItemLink2"
    // },
    // {
    //   id:3,
    //   itemCheck: false ,
    //   itemName: "item2" ,
    //   itemCost: 30,
    //   itemDescription: "itemDes2" ,
    //   itemCategoryIndex: 2,
    //   itemLink: "ItemLink2"
    // }
  ])

  const [Categories, setCategories] = useState(["category1", "category2", "category3"])


  //adding new Item

  const handle_itemView = (id) => {
    navigate(`/${id}`)
  }

  const handle_newItemButton = () => {
    navigate('/NewItemView')
    //go to the newItem page
  }

  // handle_newItemCancel = () => {
  //   // the item is not added and we move back to the previous page
  // }

  // handle_addNewCategory = () => {
  //   //we add a new category to the categoryList
  // }
  // //Edit Item
  // handle_editItemButton = () => {
  //   //go into the editing mode
  // }

  // handle_editItemSave = () => {
  //   //the item is changed
  // }

  // handle_editItemCancel = () => {
  //   //cancel
  // }

  // handle_editCategory = () => {
  //   //the category is edited as the text is changed
  // }

  // //cost view
  // handle_costViewButton = () => {

  // }


  return (
    <div className='Container'>
      <Title />
      <div className='ContentContainer'>
        <ItemListContainer Items={Items} handle_newItemButton={handle_newItemButton} handle_itemView={handle_itemView}/>
        <ViewPanel Items={Items} setItems={setItems} Categories={Categories} setCategories = {setCategories}/>
      </div>
    </div>
  );
}

export default App;
