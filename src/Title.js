const title = ({ handle_ViewToggle, View }) => {

  let view = "List View";
  if (View) {
    view = "Cost View"
  }
  return (
    <div className="TitleContainer">
      <div className="Title"><span >The LazyList</span><span className="TitleText">React-based Shopping List</span></div>
      <div className="ViewToggle" onClick={() => handle_ViewToggle()} >{view}</div>
    </div>
  )
}

export default title