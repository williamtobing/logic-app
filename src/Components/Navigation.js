// import React, { useRef } from "react";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = ({ menus }) => {
  // const wrapper = useRef();
  const navigationMenus = menus.map((menu) => {
    const onClickLink = (e) => {
      e.preventDefault();
      window.history.pushState({}, "", menu.href);

      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);
    };

    return (
      <Nav.Link onClick={onClickLink} key={menu.name} href={`${menu.href}`}>
        {menu.name}
      </Nav.Link>
    );
  });
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Logic App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* <Navbar.Collapse id="responsive-navbar-nav" ref={wrapper}> */}
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">{navigationMenus}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
