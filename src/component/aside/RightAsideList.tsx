import AsideListItem from "./AsideListItem"

function AsideList() {
  return (
    <aside className="App-aside-left">
      <div className="App-aside-header">
        <h1 className="App-aside-title">Lessons</h1>
      </div>
      <div className="App-aside-scroll">
        <AsideListItem title="Counter" link="/counter" />
      </div>
    </aside>
  )
}

export default AsideList