import { createSlice } from "@reduxjs/toolkit";

let nextItemId = JSON.parse(localStorage.getItem("nextItemId")) || 1;

const initialState = {
  user: null,
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.wishlist = [];
      localStorage.removeItem("wishlist");
      localStorage.removeItem("nextItemId");
      nextItemId = 1;
    },
    addToWishlist: (state, action) => {
      const newItem = {
        id: nextItemId++,
        ...action.payload,
      };
      state.wishlist.push(newItem);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      localStorage.setItem("nextItemId", JSON.stringify(nextItemId));
    },
    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== itemIdToRemove
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { login, logout, addToWishlist, removeFromWishlist } =
  UserSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectWishlist = (state) => state.user.wishlist;
export default UserSlice.reducer;
