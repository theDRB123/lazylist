const OptionBar = () => {
  let condition = 1;
  
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
      <div className="OptionBarButton1">Save</div>
      <div className="OptionBarButton2">Cancel</div>
    </div>
  )
  }
}

export default OptionBar