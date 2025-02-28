function App() {
  const name = "StarGazers"

  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" atl="StarGazers Group" />
          <h1>Meet the <i style={{color:"SteelBlue"}}>{ name }</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        </hgroup>
        <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
      </article>
    </div>
  )
}
export default App
