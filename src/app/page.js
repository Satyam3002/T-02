// app/page.js
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './layout';
import UserList from '../components/UserList';
import { ClipLoader } from 'react-spinners'; 
import { css } from '@emotion/react'; 

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (!loading) {
    return (
        <Layout>
            <div className="w-full">
                <UserList users={users} loading={loading} error={error} />
            </div>
        </Layout>
    );
}

  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
          <ClipLoader color="#4A90E2" loading={true} css={override} size={82} />
          <p className="font-bold text-2xl">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-center text-2xl font-bold text-red-600">Error loading user details.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full">
        <UserList users={users} loading={loading} error={error} />
      </div>
    </Layout>
  );
};

export default Home;
