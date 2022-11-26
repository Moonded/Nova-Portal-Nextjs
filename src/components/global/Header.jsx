import LoginBtn from "./LogBtn";
import {
  MdAdminPanelSettings,
  MdSettings,
  MdOutlineAccountCircle,
  MdHome,
} from "react-icons/md";

import { FaRegAddressCard, FaUsers } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";
export default function Header(props) {
  var session = props;

  var today = new Date();
  var curHr = today.getHours();
  // var curHr = 18
  var time;
  if (curHr < 12) {
    time = "Good morning";
  } else if (curHr < 18) {
    time = "Good afternoon";
  } else {
    time = "Good evening";
  }
  var userUri = "/profile/" + props.session.user.name;

  return (
    <>
      <div className="h-12 bg-black sticky top-0 z-10">
        <div className="h-full flex items-center ml-16">
          <a href="/dashboard">
            <img
              src="/nova/nova-emblem-white-outlined.svg"
              className="w-10 inline h-12"
            />
            <p className="uppercase font-normal inline ml-2">
              Member <strong className="font-black">Portal</strong>{" "}
              <span className="opacity-30">V.3.0.0-Moonded</span>
            </p>
          </a>
          <div className="mx-16">
            <LoginBtn />
          </div>
          <div className="absolute right-16 h-12">
            <div className="h-full flex items-center">
              <p className="inline">
                {time},
                <a href={userUri}>
                  <strong> {props.session.user.name}</strong>
                </a>
              </p>
              <div className="inline">
                <img
                  className="ml-2 h-8 border rounded-full border-transparent"
                  src={session.session.user.image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pointer-events-none">
          <div className="flex justify-end -mt-12 w-full h-screen ">
            <div className="bg-black w-60 pt-12 -mr-44 hover:-mr-0 transition-all duration-300 pointer-events-auto">
              <div className="pl-4 mt-2">
                <div className="w-full">
                  <div className="w-full">
                    <a className="w-[224px] h-20" href="/admin">
                      <div>
                        <MdAdminPanelSettings className="text-4xl inline" />
                        <p className="inline ml-4">Admin</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full">
                    <a className="w-full" href="/profile/settings">
                      <div>
                        <MdSettings className="text-4xl inline" />
                        <p className="inline ml-4">User Settings</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full">
                    <a className="w-full" href={userUri}>
                      <div>
                        <MdOutlineAccountCircle className="text-4xl inline" />
                        <p className="inline ml-4">My Account</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full">
                    <a className="w-full" href="/dashboard">
                      <div>
                        <MdHome className="text-4xl inline" />
                        <p className="inline ml-4">Dashboard</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full">
                    <a className="w-full" href="/members">
                      <div>
                        <FaRegAddressCard className="text-4xl inline" />
                        <p className="inline ml-4">Members</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full">
                    <a className="w-full" href="/squadron">
                      <div>
                        <FaUsers className="text-4xl inline" />
                        <p className="inline ml-4">Squadrons</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-full">
                    <a className="w-full" href="/operation">
                      <div>
                        <RiSignalTowerFill className="text-4xl inline" />
                        <p className="inline ml-4">Operations</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
