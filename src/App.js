import { useState } from 'react';
import { Route } from 'react-router-dom/dist/umd/react-router-dom.development';
import Title from './Title'
import ItemListContainer from './content/ItemList/ItemListContainer'
import ViewPanel from './content/ViewPanel/ViewPanelContainer'


function App() {
  //data
  const [Items, setItems] = useState([
    {
      id: 1,
      itemName: "item",
      itemCost: 20,
      itemDescription: "itemDes",
      itemCategory: "category1"
    }
  ])

  const [categories, setCategories] = useState(["category1", "category2", "category3"])
  //functions

  // //adding new Item
  // handle_newItemButton = () => {
  //   //go to the newItem page
  // }

  // handle_newItemSave = () => {
  //   //when clicked the item is added to the list and we move back to the previous page
  // }

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
      <ItemListContainer />
      <ViewPanel />
      </div>
    </div>
  );
}

export default App;
