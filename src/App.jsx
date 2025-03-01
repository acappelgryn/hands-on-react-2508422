import React, { useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';

function App() {
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    const data = await response.json();
    setCast(addPagination(data));
  }

  const addPagination = (cast) => {
    return cast.map((member, index) => {
      let prevIndex = null;
      let nextIndex = null;
      if (index === 0) {
        prevIndex = cast.length - 1;
        nextIndex = index + 1;
      } else if (index + 1 >= cast.length) {
        prevIndex = index - 1;
        nextIndex = 0;
      } else {
        prevIndex = index - 1;
        nextIndex = index + 1;
      }
      return { ...member, prevIndex: prevIndex, nextIndex: nextIndex };
    })
  }

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <>
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the Stargazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
          {memberInfo && <Modals member={memberInfo} cast={cast} changeMember={setMemberInfo} />}
        </hgroup>
      </div>
    </>
  )
}
export default App
