import React, { Fragment, useState } from "react";
import useReactRouter from "use-react-router";
import { Link } from "react-router-dom";
import { logout } from "../actions/session";
import {useDispatch} from "react-redux"

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const { location } = useReactRouter();
  const dispatch =useDispatch();

  return (
    <Fragment>
      <div className={`menu-container menu-container${!openMenu && "--close"}`}>
        <Link
          className={`menu-item-name${openMenu ? "--mobile" : ""}`}
          to="/"
          onClick={() => setOpenMenu(false)}
        >
          <p>Todo list</p>
        </Link>
        {location.pathname !== "/login" && (
          <Link
            className="menu-item menu-item--logout"
            to="/login"
            onClick={() => dispatch(logout())}
          >
            <p className="menu-item-p">Logout</p>
          </Link>
        )}
      </div>
      <div className="mobile-layout">
        <Link className="mobile-layout-title" to="/">
          <p>Todo list</p>
        </Link>
        <div
          className="mobile-layout-icon"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <i className={`fa fa-${openMenu ? "times" : "bars"}`} />
        </div>
      </div>
    </Fragment>
  );
}

export default Menu;
