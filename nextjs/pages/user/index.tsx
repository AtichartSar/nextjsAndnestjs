import { userSelector } from '@/store/slices/userSlice';
import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector(userSelector);
  return (
    <div>
      <h1>Hello {user.username}</h1>
    </div>
  );
}

export default User;
