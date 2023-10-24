import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import HeaderModal from "./modal_header";

function NavLink(props) {
  return (
    <div
      onMouseLeave={() => {
        if (props.txt == "Portals") {
          props.setIsOpen(false);
        }
      }}
      className="outer"
    >
      <div
        className="navlink"
        onMouseOver={() => {
          if (props.txt == "Portals") {
            props.setIsOpen(true);
          }
        }}
      >
        {props.active === props.txt ? (
          <a
            data-aos="zoom-in"
            className="active"
            href={props.txt == "Portals" ? "#" : props.url}
          >
            {props.txt}
            {props.txt == "Portals" && <i className="fa ">&#xf107;</i>}
          </a>
        ) : (
          <a data-aos="zoom-in" href={props.txt == "Portals" ? "#" : props.url}>
            {props.txt}
            {props.txt == "Portals" && <i className="fa">&#xf107;</i>}
          </a>
        )}
      </div>
      {props.isOpen && <DropDown />}
    </div>
  );
}

function DropDown(props) {
  return (
    <div className="dropdown-content">
      <p onClick={() => window.open("https://admin-kirinyaga.dat.co.ke/")}>
        Staff Portal
      </p>
      <p onClick={() => window.open("https://farmers-kirinyaga.dat.co.ke/")}>
        Farmers Portal
      </p>
      <p onClick={() => window.open("https://arc-kirinyaga.dat.co.ke/")}>
        Agricultural Resource Center
      </p>  
    </div>
  );
}

export default function Header(props) {
  const [clicked, setClicked] = useState(false);
  const hd = useRef();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeCss, false);
  }, []);

  function changeCss() {
    if (this.scrollY > 0) {
      hd.current.style.position = "fixed";
    } else {
      hd.current.style.position = "relative";
    }
  }

  return (
    <>
      <div ref={hd} className="header">
        <div className="contacts">
          <div className="container">
            <div>
              <img
                onClick={() => {
                  window.location.href = "/";
                }}
                src={logo}
                alt=""
              />
              <h1>Kiri AMIS</h1>
            </div>
            <a href="tel:+254700000000">
              <i className="fa ">&#xf095;</i> 0700 000 000
            </a>
            <a href="mailto:info@kiriamis.co.ke">
              <i className="fa ">&#xf1fa;</i> info@kiriamis.co.ke
            </a>
          </div>
        </div>
        <div className="hcontainer">
          <div className="wrapper">
            <NavLink txt="Home" url="/" active={props.active} />
            <NavLink
              txt="Portals"
              url="/portal"
              active={props.active}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
            <NavLink
              txt="Stakeholders"
              url="/stakeholders"
              active={props.active}
            />
              <NavLink
              txt="Projects"
              url="/projects"
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
          <div className="mob">
            <i
              onClick={() => {
                setClicked(true);
              }}
              className="fa"
            >
              &#xf0c9;
            </i>
          </div>
        </div>
      </div>
      {clicked && <HeaderModal logo={logo} setClicked={setClicked} />}
    </>
  );
}
