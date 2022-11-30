export default function Body(props) {
  var session = props;
  //   console.log("User", props.users[0]);

  var User = props.users[0];
  //   console.log("User Rank", User.rank);
  //   console.log("Props.Rank", props.rank);
  console.log(User)
  var Rank;
  for (var i in props.rank) {
    if (props.rank[i].id == User.member_type) {
      Rank = props.rank[i].id;
      //   console.log("Rank", Rank);
    }
  }

  return (
    <>
      <div className="w-[calc(100%-34px)] md:w-[calc(100%-95px)] ml-4 mt-4">
        <iframe name="hiddenFrame" className="hidden"></iframe>
        <h6 className="text-4xl underline mb-5">User Settings</h6>
        <form action="/api/user/settings" method="post" target="hiddenFrame">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 grid-rows-4 md:grid-rows-2 ">

            <div className="border p-2">
              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className='flex justify-start items-center' htmlFor="member_type">Member Type:</label>
                <select
                  defaultValue={Rank}
                  id="member_type"
                  name="member_type"
                  className="bg-body_primary"
                >
                  {props.rank.map((rank) => (
                    <option key={rank.id} className="bg-transparent" value={rank.id}>
                      {rank.html_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className='flex justify-start items-center' htmlFor="pilot_license">Pilot License:</label>
                <select
                  id="pilot_license"
                  name="pilot_license"
                  className="bg-body_primary"
                  defaultValue={User.pilot_license}
                >
                  <option className="bg-transparent" value="NPL-1">
                    NPL-1
                  </option>
                  <option className="bg-transparent" value="NPL-2">
                    NPL-2
                  </option>
                  <option className="bg-transparent" value="NPL-3">
                    NPL-3
                  </option>
                  <option className="bg-transparent" value="NPL-4">
                    NPL-4
                  </option>
                  <option className="bg-transparent" value="NPL-5">
                    NPL-5
                  </option>
                </select>
              </div>
              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className='flex justify-start items-center' htmlFor="medals">Medals Count:</label>
                <input
                  type="number"
                  id="medals"
                  placeholder={User.medals}
                  defaultValue={User.medals}
                  max="400"
                  min="0"
                  className="bg-body_primary"
                  name="medals"
                />
              </div>

              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className='flex justify-start items-center' htmlFor="Rank">Rank:</label>
                <input
                  type="number"
                  id="Rank"
                  min="0"
                  placeholder={User.rank}
                  defaultValue={User.rank}
                  className="bg-body_primary"
                  name="rank"
                />
              </div>

              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className='flex justify-start items-center' htmlFor="archivements">Archivements Count:</label>
                <input
                  type="number"
                  id="archivements"
                  placeholder={User.archivements}
                  defaultValue={User.archivements}
                  max="400"
                  min="0"
                  className="bg-body_primary"
                  name="archivements"
                />
              </div>

              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className='flex justify-start items-center' htmlFor="location">Location:</label>
                <input
                  type="string"
                  id="location"
                  placeholder={User.location}
                  defaultValue={User.location}
                  className="bg-body_primary border border-blue-400"
                  name="location"
                />
              </div>
            </div>

            <div className="border p-2">

              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className="flex justify-start items-center" htmlFor="showNick">Show Nickname</label>
                <input type="checkbox" name="showNick" id="showNick" className="relative top-4" />
              </div>

              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className='flex justify-start items-center' htmlFor="nickName">Nickname</label>
                <input
                  type="string"
                  id="nickName"
                  placeholder="Nickname"
                  defaultValue="Nickname"
                  className="bg-body_primary border border-blue-400"
                  name="nickname"
                />
              </div>
            </div>
            <div className="border p-2">
            <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className="flex justify-start items-center" htmlFor="showNick">Defence</label>
                <input type="checkbox" name="defence" id="showNick" className="relative top-4" value="true" defaultChecked={User.branch[0].defence ? true : false}/>
              </div>
              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className="flex justify-start items-center" htmlFor="showNick">Core</label>
                <input type="checkbox" name="core" id="showNick" className="relative top-4" value="true" defaultChecked={User.branch[0].core ? true : false}/>
              </div>
              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className="flex justify-start items-center" htmlFor="showNick">Fronttier</label>
                <input type="checkbox" name="fronttier" id="showNick" className="relative top-4" value="true" defaultChecked={User.branch[0].fronttiers ? true : false}/>
              </div>
              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className="flex justify-start items-center" htmlFor="showNick">Relief</label>
                <input type="checkbox" name="relief" id="showNick" className="relative top-4" value="true" defaultChecked={User.branch[0].relief ? true : false}/>
              </div>
              <div className="h-10 grid grid-cols-2 grid-rows-1">
                <label className="flex justify-start items-center" htmlFor="showNick">Skyline</label>
                <input type="checkbox" name="skyline" id="showNick" className="relative top-4" value="true" defaultChecked={User.branch[0].skyline ? true : false}/>
              </div>
            </div>
            <div >
              <div className="bg-blue-600 mt-4 rounded-md w-20 col-span-2">
                <button type="submit" className="w-20 h-8">
                  Submit
                </button>
              </div>
            </div>

          </div>

        </form>
      </div>
    </>
  );
}
