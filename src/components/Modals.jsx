export default ({ member, cast, changeMember }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a
          style={{marginTop: "2px"}}
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={() => {changeMember(null)}}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{ width: '200px' }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
            <hgroup>
              <hgroup style={{position: "relative", minHeight: "60px", marginBottom: "10px"}}>
                <a
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "0%",
                    width: "auto"
                  }}
                  className="outline"
                  href="#"
                  role="button"
                  onClick={() => { changeMember(cast[member.prevIndex]) }}
                >
                  Previous
                </a>
                <a
                  style={{
                    paddingLeft: "37px",
                    paddingRight: "37px",
                    position: "absolute",
                    bottom: 0,
                    left: "70%",
                    width: "auto"
                  }}
                  className="outline"
                  href="#"
                  role="button"
                  onClick={() => { changeMember(cast[member.nextIndex]) }}
                >
                  Next
                </a>
              </hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  )
}
