import LoginBtn from "./LogBtn";
import {
  MdAdminPanelSettings,
  MdSettings,
  MdOutlineAccountCircle,
  MdHome,
} from "react-icons/md";

import { FaRegAddressCard, FaUsers } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export default function Header(props) {
  var session = props;

  var today = new Date();
  var curHr = today.getHours();
  const [toggleViewMode, setToggleViewMode] = useState(false);
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
        <div className="h-full flex md:items-center ml-3 md:ml-16">
          <a className="" href="/dashboard">
            <img
              src="https://files.moonded.com/portal/nova/nova-emblem-white-outlined.svg"
              className="w-10 inline h-12"
            />
            <p className="uppercase inline ml-2 text-sm md:text-base">
              Member <strong className="font-black">Portal</strong>
              <span className="opacity-30 block md:inline -mt-5 md:-mt-0 ml-12 md:ml-0 text-xs md:text-base">
                V.3.0.0-Moonded
              </span>
            </p>
          </a>

          <div className="absolute right-5 md:right-16 h-12">
            <div className="h-full flex items-center">
              <p className="inline">
                <span className="hidden md:inline">{time},</span>
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
              <div className="block md:hidden">
                <button onClick={() => setToggleViewMode(!toggleViewMode)}>
                  <GiHamburgerMenu className="text-2xl text-blue-400 inline ml-5 -mt-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pointer-events-none">
          <div className="flex justify-end -mt-12 h-screen ">
            <div
              className={`bg-black pt-12 w-${toggleViewMode ? "60" : "0"
                } md:w-60 md:-mr-44 md:hover:-mr-0 transition-all duration-300 pointer-events-auto`}
            >
              <div className="pl-4 mt-2">
                <div className="w-full">
                  <div>
                    <a className="w-full" href="/admin">
                      <div>
                        <MdAdminPanelSettings className="text-4xl inline" />
                        <p className="inline ml-4">Admin</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="w-full" href="/profile/settings">
                      <div>
                        <MdSettings className="text-4xl inline" />
                        <p className="inline ml-4">User Settings</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="w-full" href={userUri}>
                      <div>
                        <MdOutlineAccountCircle className="text-4xl inline" />
                        <p className="inline ml-4">My Account</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="w-full" href="/dashboard">
                      <div>
                        <MdHome className="text-4xl inline" />
                        <p className="inline ml-4">Dashboard</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="w-full" href="/members">
                      <div>
                        <FaRegAddressCard className="text-4xl inline" />
                        <p className="inline ml-4">Members</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="w-full" href="/squadron">
                      <div>
                        <FaUsers className="text-4xl inline" />
                        <p className="inline ml-4">Squadrons</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="w-full" href="/operation">
                      <div>
                        <RiSignalTowerFill className="text-4xl inline" />
                        <p className="inline ml-4">Operations</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <div className="mt-2 bg-blue-600 mr-3 border rounded border-transparent">
                      <LoginBtn className="text-4xl inline w-10" />
                    </div>
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
