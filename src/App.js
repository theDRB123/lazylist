import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Title from './Title'
import ItemListContainer from './content/ItemList/ItemListContainer'
import ViewPanel from './content/ViewPanel/ViewPanelContainer'


function App() {

  const navigate = useNavigate();
  

  //data
  const [Items, setItems] = useState(JSON.parse(localStorage.getItem('ListItems'))||[])

  const [Categories, setCategories] = useState(JSON.parse(localStorage.getItem('CategoryList')) ||[])

  const [View , setView] = useState(true)

  useEffect( () => {
    localStorage.setItem('ListItems' , JSON.stringify(Items))
    localStorage.setItem('CategoryList' , JSON.stringify(Categories))
  },[Items ,  Categories ])
  //adding new Item


  const handle_itemView = (id) => {
    setView(true)
    navigate(`/${id}`)
  }

  const handle_newItemButton = () => {
    setView(true)
    navigate('/NewItemView')
    //go to the newItem page
  }

  const handle_ViewToggle = () => {
    let id = Items.length;

    if (View) {
      navigate('/CostView')
      setView(false)
    }else {
      navigate(`/${id}`)
      setView(true)
    }
  }

  const handle_Check = async(id) => {
    const listItems = Items.map((item) => item.id === id ? { ...item, itemCheck: !item.itemCheck } : item);
    setItems(listItems)
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
      <Title View={View} handle_ViewToggle={handle_ViewToggle} />
      <div className='ContentContainer'>
        <ItemListContainer Items={Items} handle_newItemButton={handle_newItemButton} handle_Check={handle_Check} handle_itemView={handle_itemView}/>
        <ViewPanel Items={Items} setItems={setItems} Categories={Categories} setCategories = {setCategories}/>
      </div>
    </div>
  );
}

export default App;
