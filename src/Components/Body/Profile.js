import {
  profileAboutMe,
  profileInformation,
  profileSearch,
} from "../../Data/data";

export function Profile(params) {
  const about = profileAboutMe.map((i) => (
    <div >
      <div className="mb-5 ">{i.includes}</div>
      <div>{i.about}</div>
    </div>
  ));

  const profile = (
    <div className="ml-10">
      <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3 ">
        <div className="font-semibold w-1/4 mr-6">{profileSearch.date}</div>
        <div className="text-lg font-normal w-3/4 ">
          {profileInformation.date}
        </div>
      </div>
      <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3">
        <div className="font-semibold w-1/4 mr-6">{profileSearch.place}</div>

        <div className="text-lg font-normal w-3/4 ">
          {profileInformation.adress}
        </div>
      </div>
      <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3">
        <div className="font-semibold w-1/4 mr-6">
          {profileSearch.educationStatus}
        </div>{" "}
        <div className="text-lg font-normal w-3/4 ">
          {profileInformation.education}
        </div>
      </div>
      <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3">
        <div className="font-semibold w-1/4 mr-6">{profileSearch.choseRol}</div>{" "}
        <div className="text-lg font-normal w-3/4 ">
          {profileInformation.chose}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-9/12 m-auto mb-20">
      <h1 className="text-center pt-20 font-medium text-4xl mb-9">Profile</h1>
      <div className="">
        <div className="  lg:flex  ">
          <div className=" lg:w-3/5 flex-1 profile-item">
            <div className="pt-9 mb-9 info font-normal text-2xl ml-10">
              Basic Information
            </div>
            {profile}
          </div>
          <div className=" lg:w-2/5  lg:ml-16 sm:ml-0 mt-20    ">
            <div className="relative ">
              <h1 className="mb-5 text-2xl font-normal">About Me</h1>
              <div className="about"></div>
              {about}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
