import { Route, useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development.js'
import CostViewContainer from './CostView/CostViewContainer'
import ItemViewContainer from './ItemView/ItemViewContainer'
import EditViewContainer from './EditItemView/EditItemViewContainer'
import NewItemViewContainer from './NewItemView/NewItemViewContainer'

const ViewPanelContainer = () => {
    return (
        <>
            <div className='ViewPanelContainer'>
                <Routes>
                    <Route path='/*' element={<ItemViewContainer />} />
                    <Route exact path='/EditView' element={<EditViewContainer />} />
                    <Route exact path='/NewItemView' element={<NewItemViewContainer />} />
                    <Route exact path='/CostView' element={<CostViewContainer />} />
                </Routes>
            </div>
        </>
    )
}

export default ViewPanelContainer