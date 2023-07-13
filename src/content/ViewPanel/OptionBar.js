const OptionBar = () => {
  let condition = 1;

  if (condition == 1) {
    return (
      <div className="OptionBar">
        <div className="OptionBarButton1">
          <button type="submit">Edit Item</button>
        </div>
        <div className="OptionBarButton2">
          <button type="submit">Delete Item</button>
        </div>
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