import React from "react";
import { Layout } from "./Layout";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <div>
      <Layout>
        <div class="container-fluid ">
          <div class="row min-vh-100">
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
                      <a
                        class="nav-link d-flex align-items-center gap-2 active"
                        aria-current="page"
                        href="#"
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>

                  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
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
                  </ul>

                  <hr class="my-3" />

                  <ul class="nav flex-column mb-auto">
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
                  </ul>
                </div>
              </div>
            </div>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
              </div>

              <h2>Section title</h2>
              <div class="table-responsive small">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>random</td>
                      <td>data</td>
                      <td>placeholder</td>
                      <td>text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </div>
  );
};
