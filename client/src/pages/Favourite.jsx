import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav } from "../Index";
import { selectWishlist, removeFromWishlist } from "../app/UserSlice";
import "../css/Pages.scss";

const Favourite = () => {
  const wishlist = useSelector(selectWishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  return (
    <>
      <Nav />
      <div className="WishListPage">
        <h1>Wishlist</h1>
        <div className="wishlist-container">
          {wishlist.length === 0 ? (
            <p>No items in wishlist</p>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.title} />
                <button onClick={() => handleRemoveFromWishlist(item.id)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Favourite;
