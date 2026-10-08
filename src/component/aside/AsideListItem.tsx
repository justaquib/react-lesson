
function AsideListItem({ title, link }: { title: string; link: string }) {
  return (
    <div className="App-aside-item">
      <a className="font-bold w-full py-2" href={link}>{title}</a>
    </div>
  )
}

export default AsideListItem