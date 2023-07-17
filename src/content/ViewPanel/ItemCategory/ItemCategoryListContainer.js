import ItemCategoryList from './ItemCategoryList'
import { useState } from 'react';
// import { Transition } from 'react-transition-group';

const ItemCategoryListContainer = () => {
    const [Show, setShow] = useState(false);
    const [Edit , setEdit] = useState(false)
    const toggle_itemlist = (value) => {
        // document.getElementById("huka").classList.toggle("Show")
        setShow(value);
    }

    setTimeout(() => {
        try{
            document.querySelector(".ItemCategoryListContainer").addEventListener('mouseover', () => toggle_itemlist(1))
        }catch{}
        try{
        document.querySelector(".EditItemDescription").addEventListener('mouseover', () => toggle_itemlist(2))
        }catch{}
        try{
        document.querySelector(".NewItemDescription").addEventListener('mouseover', () => toggle_itemlist(2))
        }catch{}
    }, 100);


    return (
        <div className="ItemCategoryListContainer" id='huka' >

            <div className="CategoryLabel">Select Category :-</div>


            {Show == true ? (
                <>
                    <ItemCategoryList Edit={Edit} />

                    <div className='ButtonContainer'>
                        <div className='AddCategoryButton'>
                            <button >Add</button>
                        </div>
                        <div className='EditCategoryButton'>
                            <button onClick={() => {setEdit(true)}}> Edit</button>
                        </div>
                    </div>
                </>
            ) : (<div className='ItemListViewItemCategory' ><span>ItemCategory</span></div>)}

        </div>
    )
}

export default ItemCategoryListContainer