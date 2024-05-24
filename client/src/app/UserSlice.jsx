import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    wishlist: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.wishlist = [];
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
  },
});

export const { login, logout, addToWishlist, removeFromWishlist } =
  UserSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectWishlist = (state) => state.user.wishlist;
export default UserSlice.reducer;
