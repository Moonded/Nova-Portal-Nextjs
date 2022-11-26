export default function Body(props) {
  var Users = props.users;
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-12">
          {Users.map((user) => (
            <div key={user.id} className="">
              <a href={"/profile/" + user.name} className="">
                <div className="bg-blue-900 rounded h-32 bg-center bg-no-repeat bg-contain w-80">
                  <div className="grid grid-cols-[30%_80%]">
                    <div>
                      <div className="flex justify-center items-center h-32">
                        <img
                          src={user.image}
                          className="border rounded-full border-transparent h-16"
                        />
                      </div>
                    </div>
                    <div className="w-full h-32">
                      <div className="flex justify-start items-center h-32">
                        <div className="grid grid-cols-1 grid-row-4 w-30">
                          <div>{user.name}</div>
                          <div className="border -mr-5"/>
                          <div className="text-blue-500 mb-1">Member</div>
                          <div>
                            <img
                              src="https://files.moonded.com/portal/nova/nova-core-emblem-white.svg"
                              className={"-ml-1 h-8 inline -ml-2" + (user.branch[0].core ? " opacity-100" : " opacity-30")}
                            />
                            <img
                              src="https://files.moonded.com/portal/nova/nova-defence-emblem-white.svg"
                              className={"-ml-1 h-8 inline" + (user.branch[0].defence ? " opacity-100" : " opacity-30")}
                            />
                            <img
                              src="https://files.moonded.com/portal/nova/nova-fronttiers-emblem-white.svg"
                              className={"-ml-1 h-8 inline" + (user.branch[0].fronttiers ? " opacity-100" : " opacity-30")}
                            />
                            <img
                              src="https://files.moonded.com/portal/nova/nova-relief-emblem-white.svg"
                              className={"-ml-1 h-8 inline" + (user.branch[0].relief ? " opacity-100" : " opacity-30")}
                            />
                            <img
                              src="https://files.moonded.com/portal/nova/nova-skyline-emblem-white.svg"
                              className={"-ml-1 h-8 inline" + (user.branch[0].skyline ? " opacity-100" : " opacity-30")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
