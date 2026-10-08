
import './App.css'
import LeftAsideList from './component/aside/LeftAsideList'
import RightAsideList from './component/aside/RightAsideList'
import Content from './component/content/Content'

function App() {

  return (
    <div className="App">
      <RightAsideList />
      <main className="App-main">
        <Content />
      </main>
      <LeftAsideList />
    </div>
  )
}

export default App
