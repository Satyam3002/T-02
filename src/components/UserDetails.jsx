

const UserDetails = ({ user }) => {
    if (!user) return <p className="text-center mt-4 text-gray-600">Select a user to see details</p>;

    return (
        <div className="flex flex-col gap-y-8 "> 

          <div className="">
          <p className="text-7xl font-serif text-center mt-4 font-extrabold">User Detail </p>
          </div>
        
        <div className="flex justify-center  items-center w-full h-full">                  
            <div className="bg-gradient-to-r from-rose-400 to-orange-300  shadow-lg rounded-lg p-8 max-w-md w-full transform transition duration-300 hover:shadow-2xl hover:scale-105">
                <div className="flex flex-col items-center">
                    <img
                        src={user.avatar}
                        alt={user.profile.username}
                        className="w-64 h-64 mb-6 object-cover rounded-full border-4 border-gray-200"
                    />
                    <h2 className="text-2xl text-center font-bold mb-3 text-gray-900">{user.profile.firstName} {user.profile.lastName}</h2>
                    <p className="#18181b font-normal text-xl text-center mb-3">
                        <span className="font-semibold text-black">Email:  </span>{user.profile.email}
                    </p>
                    <p className="#18181b font-normal text-center text-xl mb-3">
                        <span className="font-semibold text-black">Bio:  </span>{user.Bio}
                    </p>
                    <p className="#18181b font-normal text-xl text-center">
                        <span className="font-semibold text-black">Job Title:  </span>{user.jobTitle}
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UserDetails;
