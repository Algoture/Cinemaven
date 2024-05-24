import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav } from "../Index";
import { selectWishlist, removeFromWishlist } from "../app/UserSlice";
import "../css/Pages.scss";

const Favourite = () => {
  const wishlist = useSelector(selectWishlist);
  const dispatch = useDispatch();
  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };
  return (
    <>
      <Nav />
      <div className="WishListPage">
        <h1>Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          <div className="wishlist-container">
            {wishlist.map((item, index) => (
              <div key={index} className="wishlist-item">
                <img src={item.image} alt={item.title} />
                <button onClick={() => handleRemoveFromWishlist(item)

                }>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favourite;
