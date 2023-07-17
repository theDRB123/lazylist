import { Route, useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development.js'
import CostViewContainer from './CostView/CostViewContainer'
import ItemViewContainer from './ItemView/ItemViewContainer'
import EditViewContainer from './EditItemView/EditItemViewContainer'
import NewItemViewContainer from './NewItemView/NewItemViewContainer'

const ViewPanelContainer = ({Items , setItems}) => {
    return (
        <>
            <div className='ViewPanelContainer'>
                <Routes>
                    <Route path='/*' element={<ItemViewContainer Items={Items} setItems={setItems} />} />
                    <Route path='/:id' element={<ItemViewContainer Items={Items}/>} />
                    <Route exact path='/EditView/:id' element={<EditViewContainer Items={Items} setItems={setItems} />} />
                    <Route exact path='/NewItemView/' element={<NewItemViewContainer Items={Items} setItems={setItems}/>} />
                    <Route exact path='/CostView' element={<CostViewContainer Items={Items}/>} />
                </Routes>
            </div>
        </>
    )
}

export default ViewPanelContainer