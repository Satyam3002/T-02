import Link from "next/link";

const UserList = ({ users, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div className="w-full">
      <p className="text-7xl text-center mt-4 font-extrabold">User List</p>

      <ul className="grid grid-cols-1 gap-4 m-8 sm:grid-cols-2 sm:gap-x-8">
        {users.map((user) => (
          <li
            key={user.id}
            className="cursor-pointer border border-black flex flex-col p-8 bg-gradient-to-r from-rose-400 to-orange-300 transform transition duration-300 hover:scale-105"
          >
            <div className="flex space-x-12 items-start">
              <img
                src={user.avatar}
                alt={user.profile.username}
                className="rounded-full w-32 h-32 mb-4 items-start"
              />

              <div className="flex flex-col space-y-4 items-start mt-5 text-xl">
                <p className="font-normal max-w-full overflow-hidden text-ellipsis">
                  {" "}
                  <span className="font-bold">Username:</span>{" "}
                  {user.profile.username}
                </p>
                <p className="max-w-full overflow-hidden text-ellipsis">
                  {" "}
                  <span className="font-bold">Full Name:</span>{" "}
                  {user.profile.firstName} {user.profile.lastName}
                </p>
              </div>
            </div>

            <div className="text-end mt-auto">
              <Link legacyBehavior href={`/users/${user.id}`}>
                <a className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">View Details</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
