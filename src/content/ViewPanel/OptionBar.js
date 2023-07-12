const OptionBar = () => {
  let condition = 2;
  
  if (condition == 1) {
  return (
        <div className="OptionBar">
          <div className="OptionBarButton1">Edit Item</div>
          <div className="OptionBarButton2">Delete Item</div>
        </div>
    )
  } else {
    
  return (
    <div className="OptionBar">
      <div className="OptionBarButton1">
        <button type="submit">
          Save
        </button>
      </div>
      <div className="OptionBarButton2">
        <button >
          cancel
        </button>
      </div>
    </div>
  )
  }
}

export default OptionBar