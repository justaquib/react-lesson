import Counter from "../lesson/Counter"

function Content() {
  return (
    <div className="App-content">
      <header className="App-content-header">
        <h1 className="App-content-title">Counter</h1>
      </header>
      <section className="App-content-body" aria-label="Counter lesson">
        <Counter />
      </section>
    </div>
  )
}

export default Content