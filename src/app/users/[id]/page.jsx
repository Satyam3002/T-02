'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../layout';
import UserDetails from '../../../components/UserDetails';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners'; 

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const UserDetailPage = ({ params }) => {
  const { id } = params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); 
    if (id) {
      axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
        .then(response => {
          setUser(response.data);
          setLoading(false); 
        })
        .catch(error => {
          setError(error);
          setLoading(false); 
        });
    }
  }, [id]);

  if (loading) return (
    <Layout>
      <div className="flex flex-col gap-4 justify-center w-full items-center min-h-screen">
            <ClipLoader color="#4A90E2" loading={loading} css={override} size={82} />
            <p className= " font-bold text-2xl">Loading... </p>
      </div>
    </Layout>
  );

  if (error) return (
    <Layout>
      <div className="flex justify-center  items-center w-full min-h-screen">
        <p className="text-center text-2xl font-bold text-red-600">Error loading user details.</p>
      </div>
    </Layout>
  );

  return (
    <Layout>
        
      <div className=" bg-custom-bg bg-custom-pattern bg-10 items-center w-full min-h-screen">
        <UserDetails user={user} />
      </div>
    </Layout>
  );
};

export default UserDetailPage;
