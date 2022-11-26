export default function Body(props) {
  // console.log("props", props);
  return (
    <>
      <div className="ml-5 mt-5 h-full w-1/4 border overflow-y-scroll">
        <div className="w-full text-center border">
          User List
        </div>
        {props.users.map((user) => (
          <div key={user.id} className="border grid grid-cols-2 grid-rows-1">
            <div className="border">
              <div className="inline">User: </div>
              <div className="inline">{user.id}</div>
            </div>
            <div className="border">
              <div className="inline">Name: </div>
              <div className="inline">{user.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-3/4">

      </div>
    </>
  );
}
