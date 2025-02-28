import { useState, useEffect } from "react";

export default () => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast();
  }, []);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  const castStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
    gap: "1rem",
  }
  const castMembers = cast.map(member =>
    <a key={member.id} data-tooltip={member.name} >
      <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
    </a>
  );

  return (
    <div style={castStyle}>
      { castMembers }
    </div>
  );

}