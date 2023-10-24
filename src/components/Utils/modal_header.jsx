import "../../Styles/_header.scss";
import React from "react";
import logo2 from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";

function NavLink(props) {
  const location = useLocation();
  let link;
  if (props.url === location.pathname) {
    link = (
      <>
        <h4
          className="underline"
          onClick={() => {
            window.location.href = props.url;
          }}
        >
          <i className="fa fa-angle-right"></i> {props.txt}
        </h4>
        {props.txt === "Portals" && <DropDown />}
      </>
    );
  } else {
    link = (
      <>
        <h4
          onClick={() => {
            window.location.href = props.url;
          }}
        >
          <i className="fa fa-angle-right"></i> {props.txt}
        </h4>
        {props.txt === "Portals" && <DropDown />}
      </>
    );
  }
  return link;
}

export default function ModalHeader(props) {
  return (
    <div className="modalheader">
      <div className="container">
        <div className="itemsLogo">
          <div
            onClick={() => {
              window.location.href = "/";
            }}
            className="logo"
          >
            <img src={logo2} alt="Oakar Services Ltd Logo" />
            <h2>KiriAMIS</h2>
          </div>
        </div>

        <h3>Menus</h3>
        <div className="nav">
          <NavLink txt="Home" url="/" active={props.active} />
          <NavLink txt="Portals" url="/portal" active={props.active} />

          <NavLink
            txt="Stakeholders"
            url="/stakeholders"
            active={props.active}
          />
          <NavLink txt="Resource Center" url="/arc" active={props.active} />
          <NavLink txt="News" url="/news" active={props.active} />
          <NavLink
            txt="Testimonials"
            url="/testimonials"
            active={props.active}
          />
          <NavLink txt="Contact Us" url="/contact" active={props.active} />
        </div>
        <i
          onClick={() => {
            props.setClicked(false);
          }}
          className="fa fa-times"
        ></i>
      </div>
    </div>
  );
}

function DropDown(props) {
  return (
    <div className="dropdown-content">
      <p onClick={() => window.open("https://admin-kirinyaga.dat.co.ke/")}>
        <i className="fa fa-link"></i> Staff Portal
      </p>
      <p onClick={() => window.open("https://farmers-kirinyaga.dat.co.ke/")}>
        <i className="fa fa-link"></i> Farmers Portal
      </p>
      <p onClick={() => window.open("https://arc-kirinyaga.dat.co.ke/")}>
        <i className="fa fa-link"></i> Agricultural Resource Center
      </p>
    </div>
  );
}
