import { ImLocation } from "react-icons/im";

export default function Body(props) {
  var session = props;

  var User = session.users[0];
  var citizenProfile =
    "https://robertsspaceindustries.com/citizens/" + User.name;
  var profile = User.image;

  if (User == "" || User == undefined || User == null) {
    citizenProfile = "https://robertsspaceindustries.com";
    profile = "https://cdn.discordapp.com/embed/avatars/1.png";
  }

  return (
    <>
      <div className="h-min">
        <div className="mx-26 2xl:mx-96 mt-10 h-90">
          <div className="grid grid-cols-[15%_60%_20%] grid-rows-1 h-90">
            <div className="row-span-2 h-full">
              <div className="flex justify-center items-center">
                <div className="w-[145px] h-[145px] border rounded-full border-blue-500 flex justify-center items-center">
                  <img
                    src={profile}
                    className="border rounded-full border-transparent w-[130px]"
                  />
                </div>
              </div>
              <div className="mt-8 bg-blue-600 border border-transparent rounded-md">
                <a
                  className="flex justify-center items-center h-10 w-full"
                  href={citizenProfile}
                >
                  Citizen Profile
                </a>
              </div>
            </div>
            <div className="ml-5">
              <div className="grid grid-cols-1 grid-rows-2">
                <div>
                  <div>
                    <p className="text-5xl">{User.name}</p>
                  </div>
                  <div className="m-2">
                    <ImLocation className="inline" />{" "}
                    <div className="inline">{User.location}</div>
                  </div>
                  <div>
                    <img
                      title="Core"
                      src="https://files.moonded.com/portal/nova/nova-core-emblem-white.svg"
                      className={
                        "mt-2 h-10 -mx-1.5 inline" +
                        (User.branch[0].core ? " opacity-100" : " opacity-30")
                      }
                    />
                    <img
                      title="Defence"
                      src="https://files.moonded.com/portal/nova/nova-defence-emblem-white.svg"
                      className={
                        "mt-2 h-10 -mx-1.5 inline" +
                        (User.branch[0].defence
                          ? " opacity-100"
                          : " opacity-30")
                      }
                    />
                    <img
                      title="Fronttiers"
                      src="https://files.moonded.com/portal/nova/nova-fronttiers-emblem-white.svg"
                      className={
                        "mt-2 h-10 -mx-1.5 inline" +
                        (User.branch[0].fronttiers
                          ? " opacity-100"
                          : " opacity-30")
                      }
                    />
                    <img
                      title="Relief"
                      src="https://files.moonded.com/portal/nova/nova-relief-emblem-white.svg"
                      className={
                        "mt-2 h-10 -mx-1.5 inline" +
                        (User.branch[0].relief ? " opacity-100" : " opacity-30")
                      }
                    />
                    <img
                      title="Skyline"
                      src="https://files.moonded.com/portal/nova/nova-skyline-emblem-white.svg"
                      className={
                        "mt-2 h-10 -mx-1.5 inline" +
                        (User.branch[0].skyline
                          ? " opacity-100"
                          : " opacity-30")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <div className="inline-block mr-72">
                      <p className="text-5xl font-bold">{User.rank}</p>
                      <span className="text-xs italic opacity-60">Rank</span>
                    </div>
                    <div className="inline-block">
                      <p className="text-5xl font-bold">{User.pilot_license}</p>
                      <span className="text-xs italic opacity-60">
                        Pilot License
                      </span>
                    </div>
                  </div>
                  <div className="border w-11/12" />
                  <div className="mt-3">
                    <div className="inline-block mr-40">
                      <p className="text-5xl font-bold">{User.ships_count}</p>
                      <span className="text-xs italic opacity-60">Ships</span>
                    </div>
                    <div className="inline-block mr-40">
                      <p className="text-5xl font-bold">{User.medals}</p>
                      <span className="text-xs italic opacity-60">Medals</span>
                    </div>
                    <div className="inline-block mr-40">
                      <p className="text-5xl font-bold">{User.archivements}</p>
                      <span className="text-xs italic opacity-60">
                        Archivements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <img src={props.ranks[0].img} />
                <p className="text-blue-400 h-5 text-center">
                  {props.ranks[0].html_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* <img
src="/nova/nova-core-emblem-white.svg"
className={"mt-2 h-10 -mx-1.5 inline" + (User.branch[0].core ? " opacity-100" : " opacity-30")}
/>
<img
src="/nova/nova-defence-emblem-white.svg"
className={"mt-2 h-10 -mx-1.5 inline" + (User.branch[0].defence ? " opacity-100" : " opacity-30")}
/>
<img
src="/nova/nova-fronttiers-emblem-white.svg"
className={"mt-2 h-10 -mx-1.5 inline" + (User.branch[0].fronttiers ? " opacity-100" : " opacity-30")}
/>
<img
src="/nova/nova-relief-emblem-white.svg"
className={"mt-2 h-10 -mx-1.5 inline" + (User.branch[0].relief ? " opacity-100" : " opacity-30")}
/>
<img
src="/nova/nova-skyline-emblem-white.svg"
className={"mt-2 h-10 -mx-1.5 inline" + (User.branch[0].skyline ? " opacity-100" : " opacity-30")}
/> */
