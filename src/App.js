
import { useState } from 'react';
import Title from './Title'
import ItemListContainer from './content/ItemList/ItemListContainer'
import ViewPanel from './content/ViewPanel/ViewPanelContainer'
function App() {
  //data
  const [Items , setItems] = useState([ 
    {
      id: 1 ,
      itemName: "item",
      itemCost: 20,
      itemDescription: "itemDes",
      itemCategory: "category1" 
    }
  ])

  const [categories , setCategories] = useState( [ "category1" , "category2" , "category3"])
  //functions
  return (
    <>
      <Title/>
      <ItemListContainer />
      <ViewPanel />
    </>
  );
}

export default App;
