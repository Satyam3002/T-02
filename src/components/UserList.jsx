const UserList = ({ users, onUserSelect }) => {
    return (
      <div className="w-full">
        <p className="text-4xl text-center my-4 font-extrabold">User List</p>
        <ul className="flex flex-col space-y-4 p-7">
          {users.map((user) => (
            <li
              key={user.id}
              className="cursor-pointer flex items-center p-4 border border-black bg-gray-100 rounded-2xl transition duration-300 hover:bg-gray-300 transform hover:scale-105"
              onClick={() => onUserSelect(user)}
            >
              <img
                src={user.avatar}
                alt={user.profile.username}
                className="rounded-full w-16 h-16 mr-4"
              />
              <div className="flex flex-col">
                <p className="text-xl font-bold sm:text-lg md:text-xl">
                  {user.profile.username}
                </p>
                <p className="text-lg sm:text-base md:text-lg">
                  {user.profile.firstName} {user.profile.lastName}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;
  