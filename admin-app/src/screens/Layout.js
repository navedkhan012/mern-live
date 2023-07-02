import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Layout
 **/

export const Layout = (props) => {
  return (
    <>
      {props.sidebar ? (
        <div class="container-fluid ">
          <div class="row min-vh-100">
            {/* sidebar here */}
            <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <div
                class="offcanvas-lg offcanvas-end bg-body-tertiary"
                tabindex="-1"
                id="sidebarMenu"
                aria-labelledby="sidebarMenuLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="sidebarMenuLabel">
                    Company name
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#sidebarMenu"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <NavLink
                        className="nav-link d-flex align-items-center gap-2 "
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        className="nav-link d-flex align-items-center gap-2 "
                        to="/products"
                      >
                        Products
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        className="nav-link d-flex align-items-center gap-2 "
                        to="/orders"
                      >
                        Orders
                      </NavLink>
                    </li>
                  </ul>

                  {/* <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                     <span>Saved reports</span>
                     <a
                       class="link-secondary"
                       href="#"
                       aria-label="Add a new report"
                     ></a>
                   </h6>
                   <ul class="nav flex-column mb-auto">
                     <li class="nav-item">
                       <a
                         class="nav-link d-flex align-items-center gap-2"
                         href="#"
                       >
                         Current month
                       </a>
                     </li>
                     <li class="nav-item">
                       <a
                         class="nav-link d-flex align-items-center gap-2"
                         href="#"
                       >
                         Last quarter
                       </a>
                     </li>
                   </ul> */}

                  <hr class="my-3" />

                  {/* <ul class="nav flex-column mb-auto">
                     <li class="nav-item">
                       <a
                         class="nav-link d-flex align-items-center gap-2"
                         href="#"
                       >
                         Settings
                       </a>
                     </li>
                     <li class="nav-item">
                       <a
                         class="nav-link d-flex align-items-center gap-2"
                         href="#"
                       >
                         Sign out
                       </a>
                     </li>
                   </ul> */}
                </div>
              </div>
            </div>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {props.children}
            </main>
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  );
};
