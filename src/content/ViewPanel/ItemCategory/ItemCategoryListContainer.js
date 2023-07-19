import ItemCategoryList from './ItemCategoryList'
import { useState } from 'react';
import { useEffect } from 'react';
// import { Transition } from 'react-transition-group';

const ItemCategoryListContainer = ({ Items, setItems, Categories, setCategories, ChangeItemCategoryIndex, setChangeItemCategoryIndex }) => {
    const [Show, setShow] = useState(false);
    const [Edit, setEdit] = useState(false)
    const [NewList, setNewList] = useState(Categories)

    const toggle_itemlist = async (value) => {
        setShow(value)
    }

    const List = document.querySelector(".ItemCategoryList")
    const Buttons = document.querySelector(".ButtonContainer")
    const CurrentCategory = document.querySelector(".ItemListViewItemCategory")

    let SelectedCategory;
    if (ChangeItemCategoryIndex !== -1) {
        SelectedCategory = Categories[ChangeItemCategoryIndex]
    } else SelectedCategory = "none";


    setTimeout(() => {
        try {
            if (Show) {
                List.style.display = "flex";
                Buttons.style.display = "flex";
                CurrentCategory.style.display = "none"
                setTimeout(() => {
                    List.style.opacity = 1;
                    Buttons.style.opacity = 1;
                    CurrentCategory.style.opacity = 0;
                }, 10);

            } else {
                CurrentCategory.style.display = "flex";
                List.style.display = "none";
                Buttons.style.display = "none"
                setTimeout(() => {
                    List.style.opacity = 0;
                    Buttons.style.opacity = 0;
                    CurrentCategory.style.opacity = 1;
                }, 10);
            }
        } catch { }
        try {
            document.querySelector(".ItemCategoryListContainer").addEventListener('mouseover', () => { if (!Show) { toggle_itemlist(true) } })
        } catch { }
        try {
            document.querySelector(".EditItemDescription").addEventListener('mouseover', () => toggle_itemlist(false))
        } catch { }
        try {
            document.querySelector(".NewItemDescription").addEventListener('mouseover', () => toggle_itemlist(false))
        } catch { }
        try {
            document.querySelector(".NewItemLink").addEventListener('mouseover', () => toggle_itemlist(false))
        } catch { }
        try {
            document.querySelector(".EditItemLink").addEventListener('mouseover', () => toggle_itemlist(false))
        } catch { }
    }, 1);

    const handle_SaveEditedList = () => {
        setCategories(NewList);
    }
    const handle_AddNewList = () => {
        setNewList([...NewList, ""])
        setCategories([...NewList, ""])
        setEdit(true)
    }
    const handle_RemoveCategory = (index) => {
        const tempArr = Items.map((item) => {
            if (item.itemCategoryIndex === index) {
                let temp = item
                temp.itemCategoryIndex = -1
                return (temp)
            } else return (item)
        })
        let tempArr2 = NewList;
        tempArr2.splice(index, 1)
        setItems(tempArr)
        setNewList(tempArr2)
    }



    return (
        <div className="ItemCategoryListContainer" >

            <div className="CategoryLabel">Select Category :-</div>

            <ItemCategoryList Edit={Edit} NewList={NewList} setNewList={setNewList} ChangeItemCategoryIndex={ChangeItemCategoryIndex} setChangeItemCategoryIndex={setChangeItemCategoryIndex} setShow={setShow} handle_RemoveCategory={handle_RemoveCategory} />

            <div className='ButtonContainer'>
                <div className='AddCategoryButton'>
                    <button onClick={() => handle_AddNewList()}>Add</button>
                </div>
                {!Edit ? (
                    <div className='EditCategoryButton'>
                        <button onClick={() => { setEdit(true); }}> Edit</button>
                    </div>) : (
                    <div className='EditCategoryButton'>
                        <button onClick={() => { setEdit(false); handle_SaveEditedList() }} >Save</button>
                    </div>
                )}

            </div>

            <div className='ItemListViewItemCategory' ><span >{SelectedCategory}</span></div>

        </div>
    )
}

export default ItemCategoryListContainer