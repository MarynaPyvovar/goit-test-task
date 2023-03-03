import { createSlice } from '@reduxjs/toolkit';
const { usersList } = require('db.json');

export const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [...usersList] },
  reducers: {
    toggleFollowing(state, { payload }) {
      state.users.map(user => {
        if (user.id === payload) {
          user.isFollowed = !user.isFollowed;
          user.isFollowed ? (user.followers += 1) : (user.followers -= 1);
        }
        return user;
      });
    },
  },
});

// Actions
export const { toggleFollowing } = usersSlice.actions;

// Selector
export const getUsers = state => state.users;
