import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <NavLink
            exact
            activeClassName="nav-link selected"
            className="nav-link"
            to="/"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </NavLink>
          <div className="sb-sidenav-menu-heading">Interface</div>
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-user-friends"></i>
            </div>
            Users
            <div className="sb-sidenav-collapse-arrow">
              <i className="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            className="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              <NavLink
                activeClassName="nav-link selected"
                className="nav-link"
                to="/add-user"
              >
                Add new
              </NavLink>
              <NavLink
                activeClassName="nav-link selected"
                className="nav-link"
                to="/all-users"
              >
                All users
              </NavLink>
            </nav>
          </div>
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-book-open"></i>
            </div>
            Pages
            <div className="sb-sidenav-collapse-arrow">
              <i className="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            className="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-parent="#sidenavAccordion"
          >
            <nav
              className="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#pagesCollapseAuth"
                aria-expanded="false"
                aria-controls="pagesCollapseAuth"
              >
                Authentication
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                className="collapse"
                id="pagesCollapseAuth"
                aria-labelledby="headingOne"
                data-parent="#sidenavAccordionPages"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <NavLink
                    activeClassName="nav-link selected"
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    activeClassName="nav-link selected"
                    className="nav-link"
                    to="/register"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    activeClassName="nav-link selected"
                    className="nav-link"
                    to="/forgot-password"
                  >
                    Forgot Password
                  </NavLink>
                </nav>
              </div>
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#pagesCollapseError"
                aria-expanded="false"
                aria-controls="pagesCollapseError"
              >
                Error
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                className="collapse"
                id="pagesCollapseError"
                aria-labelledby="headingOne"
                data-parent="#sidenavAccordionPages"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <NavLink
                    activeClassName="nav-link selected"
                    className="nav-link"
                    to="/access-denied"
                  >
                    401 Page
                  </NavLink>
                  <NavLink
                    activeClassName="nav-link selected"
                    className="nav-link"
                    to="/page-not-found"
                  >
                    404 Page
                  </NavLink>
                  <NavLink
                    activeClassName="nav-link selected"
                    className="nav-link"
                    to="/internal-server-error"
                  >
                    500 Page
                  </NavLink>
                </nav>
              </div>
            </nav>
          </div>
          <div className="sb-sidenav-menu-heading">Addons</div>
          <NavLink
            activeClassName="nav-link selected"
            className="nav-link"
            to="/charts"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-chart-area"></i>
            </div>
            Charts
          </NavLink>
          <NavLink
            activeClassName="nav-link selected"
            className="nav-link"
            to="/tables"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-table"></i>
            </div>
            Tables
          </NavLink>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  );
};

export default SideNav;
