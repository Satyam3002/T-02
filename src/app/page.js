
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './layout';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Layout>
      <div className="flex flex-col w-full sm:flex-row h-screen">
        <div className="sm:w-1/2 h-full overflow-y-auto">
          {loading ? (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <ClipLoader color="#4A90E2" loading={true} css={override} size={82} />
              <p className="font-bold text-2xl">Loading...</p>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-center text-2xl font-bold text-red-600">{error}</p>
            </div>
          ) : users.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-center text-2xl font-bold text-gray-600">No data to show</p>
            </div>
          ) : (
            <UserList users={users} onUserSelect={handleUserSelect} />
          )}
        </div>
        <div className="sm:w-1/2 h-full overflow-y-auto  p-4">
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
