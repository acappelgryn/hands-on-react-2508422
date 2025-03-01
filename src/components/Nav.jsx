export default ({ cast, onChoice }) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details className="dropdown">
            <summary aria-haspopup="listbox">cast</summary>
            <ul dir="ltl">
              {cast.map(member => (
                <li key={member.id}>
                  <a onClick={() => { onChoice(member) }} data-discover="true" style={{cursor: "pointer"}}>
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <a href="#">
          <img
            style={{ height: "50px" }}
            src="images/logo_bug_stargazers.svg"
            alt="StarGazers Logo"
          />
        </a>
      </ul>
    </nav>
  )
}
