import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) return <p className="flex flex-col justify-center text-center text-4xl mt-8 font-semibold text-gray">Select a user to see details</p>;

  return (
    <div className="flex h-full font-sans text-center flex-col gap-y-6 p-2">
      {/* Show heading only on screens larger than sm (small) */}
      <div className="sm:hidden">
        <p className="text-4xl text-center mt-2 font-extrabold">User Detail</p>
      </div>


      {/* Show heading on screens larger than sm (small) */}
      <div className="hidden sm:block">
        <p className="text-4xl text-center mt-2 font-extrabold">User Detail</p>
      </div>
      
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-gradient-to-r from-rose-400 to-orange-300 shadow-lg rounded-lg p-8 max-w-md w-full transform transition duration-300 hover:shadow-2xl hover:scale-105">
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt={user.profile.username}
              className="w-64 h-64 mb-6 object-cover rounded-full border-4 border-gray-200"
            />
            <h2 className="text-2xl text-center font-bold mb-3 text-black">{user.profile.firstName} {user.profile.lastName}</h2>
            <p className="text-black font-normal text-xl text-center mb-3">
              <span className="font-semibold text-black">Email: </span>{user.profile.email}
            </p>
            <p className="text-black font-normal text-xl text-center mb-3">
              <span className="font-semibold text-black">Bio: </span>{user.Bio}
            </p>
            <p className="text-black font-normal text-xl text-center">
              <span className="font-semibold text-black">Job Title: </span>{user.jobTitle}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserDetails;
