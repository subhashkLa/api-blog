import React from "react";
import Link from "next/link";
export default function SidebarAdmin() {
  return (
    <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
      <div className="list-group">
        <a
          href="#submenu1"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <Link href="/admin">
            <span className="d-flex w-100 justify-content-start align-items-center">
              <span className="fa fa-home fa-fw mr-3"></span>
              <span className="menu-collapsed">Home</span>
              <span className="submenu-icon ml-auto"></span>
            </span>
          </Link>
        </a>

        <a
          href="#submenu1"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <Link href="/admin/donate-items">
            <span className="d-flex w-100 justify-content-start align-items-center">
              <span className="fa fa-home fa-fw mr-3"></span>
              <span className="menu-collapsed">Donate Items</span>
              <span className="submenu-icon ml-auto"></span>
            </span>
          </Link>
        </a>

        <a
          href="#submenu2"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-heart fa-fw mr-3"></span>
            <span className="menu-collapsed">All Orgs</span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>
        <div id="submenu2" className="collapse sidebar-submenu">
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/orgs/charity">
                <a>
                  +<span className="space-between"></span>Charity
                </a>
              </Link>
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/orgs/temple">
                <a>
                  +<span className="space-between"></span>Temples
                </a>
              </Link>
            </span>
          </a>
        </div>

        <a
          href="#submenu3"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-heart fa-fw mr-3"></span>
            <span className="menu-collapsed">All Events</span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>
        <div id="submenu3" className="collapse sidebar-submenu">
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/events/risingfund">
                <a>
                  +<span className="space-between"></span>Rising fund
                </a>
              </Link>
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/events/veganmeals">
                <a>
                  +<span className="space-between"></span>Veganmeals
                </a>
              </Link>
            </span>
          </a>

          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/events/accommodation">
                <a>
                  +<span className="space-between"></span>Accommodation
                </a>
              </Link>
            </span>
          </a>

          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/events/training">
                <a>
                  +<span className="space-between"></span>Training classes
                </a>
              </Link>
            </span>
          </a>

          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/events/activities">
                <a>
                  +<span className="space-between"></span>Activities classes
                </a>
              </Link>
            </span>
          </a>
        </div>

        <a
          href="#submenu4"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-heart fa-fw mr-3"></span>
            <span className="menu-collapsed">All Vegans</span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>
        <div id="submenu4" className="collapse sidebar-submenu">
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/vegan/shop">
                <a>
                  +<span className="space-between"></span>Shop
                </a>
              </Link>
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/vegan/restaurants">
                <a>
                  +<span className="space-between"></span>Restaurants
                </a>
              </Link>
            </span>
          </a>
        </div>

        <a
          href="#submenu5"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-heart fa-fw mr-3"></span>
            <span className="menu-collapsed">All Buddhism</span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>
        <div id="submenu5" className="collapse sidebar-submenu">
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/buddhism/videos">
                <a>
                  +<span className="space-between"></span>Videos
                </a>
              </Link>
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/buddhism/audios">
                <a>
                  +<span className="space-between"></span>Audios
                </a>
              </Link>
            </span>
          </a>

          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              <Link href="/admin/buddhism/books">
                <a>
                  +<span className="space-between"></span>Books
                </a>
              </Link>
            </span>
          </a>
        </div>

        <div className="list-group-item sidebar-separator menu-collapsed bg-white"></div>

        <a
          href="#top"
          data-toggle="sidebar-colapse"
          className="list-group-item list-group-item-action d-flex align-items-center"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span id="collapse-icon" className="fa fa-2x mr-3"></span>
            <span id="collapse-text" className="menu-collapsed">
              Collapse
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
