import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"

const OptionBar = ({handle_NewItemSave , handle_NewItemCancel , handle_EditItemSave , handle_EditItemCancel , id , condition}) => {
  
  const navigate = useNavigate()

  const handle_Edit = () => {
    navigate(`/EditView/${id}`)
  }


  if (condition == 1) {
    return (
      <div className="OptionBar">
        <div className="OptionBarButton1">
          <button type="submit" onClick={() => handle_Edit()}>Edit Item</button>
        </div>
        <div className="OptionBarButton2">
          <button type="submit">Delete Item</button>
        </div>
      </div>
    )
  } else {
    if (condition == 2) {
      return (
        <div className="OptionBar">
          <div className="OptionBarButton1">
            <button  type="submit" onClick={() => handle_NewItemSave()}>
              Save
            </button>
          </div>
          <div className="OptionBarButton2" onClick={() => handle_NewItemCancel()}>
            <button >
              cancel
            </button>
          </div>
  
        </div>
      )
    }else return (
      <div className="OptionBar">
        <div className="OptionBarButton1">
          <button  type="submit" onClick={() => handle_EditItemSave()}>
            Save
          </button>
        </div>
        <div className="OptionBarButton2" onClick={() => handle_EditItemCancel()}>
          <button >
            cancel
          </button>
        </div>

      </div>
    )
    
   
  }
}

export default OptionBar