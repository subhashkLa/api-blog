import React from "react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
      <div className="list-group">
        <Link href="/">
          <a
            href="/"
            data-toggle="collapse"
            aria-expanded="false"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <span className="d-flex w-100 justify-content-start align-items-center">
              <span className="fa fa-home fa-fw mr-3"></span>
              <span className="menu-collapsed">Home</span>
              <span className="submenu-icon ml-auto"></span>
            </span>
          </a>
        </Link>
        <a
          href="#submenu2"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-heart fa-fw mr-3"></span>
            <span className="menu-collapsed">Donate Items</span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>
        <div id="submenu2" className="collapse sidebar-submenu">
          <a
            href="/org/donate-items/add"
            className="list-group-item list-group-item-action"
          >
            <Link href="/org/donate-items/add">
              <span className="menu-collapsed">
                +<span className="space-between"></span>Add Items
              </span>
            </Link>
          </a>
          <a
            href="/org/donate-items"
            className="list-group-item list-group-item-action"
          >
            <Link href="/org/donate-items">
              <span className="menu-collapsed">
                +<span className="space-between"></span>Donated Items
              </span>
            </Link>
          </a>
        </div>

        <a
          href="#submenu3"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-fire fa-fw mr-3"></span>
            <span className="menu-collapsed">Organization</span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>

        <div id="submenu3" className="collapse sidebar-submenu">
          <a href="#" className="list-group-item list-group-item-action">
            <span className="menu-collapsed">
              +<span className="space-between"></span>Profile
            </span>
          </a>
          <a
            href="/org/events"
            className="list-group-item list-group-item-action"
          >
            <Link href="/org/events">
              <span className="menu-collapsed">
                +<span className="space-between"></span>Event
              </span>
            </Link>
          </a>

          <a
            href="/org/events/add"
            className="list-group-item list-group-item-action"
          >
            <Link href="/org/events/add">
              <span className="menu-collapsed">
                +<span className="space-between"></span>Create Event
              </span>
            </Link>
          </a>
          <a
            href="/org/vegans"
            className="list-group-item list-group-item-action"
          >
            <Link href="/org/vegans">
              <span className="menu-collapsed">
                +<span className="space-between"></span>Vegan Dishes
              </span>
            </Link>
          </a>

          <a
            href="/org/vegans/add"
            className="list-group-item list-group-item-action"
          >
            <Link href="/org/vegans/add">
              <span className="menu-collapsed">
                +<span className="space-between"></span>Create Vegan Dishes
              </span>
            </Link>
          </a>
        </div>
        <a
          href="#submenu4"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-star fa-fw mr-3"></span>
            <span className="menu-collapsed">Favourites</span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>

        <div id="submenu4" className="collapse sidebar-submenu">
          <a
            href="/org/favorite/temple"
            className="list-group-item list-group-item-action"
          >
            <span className="menu-collapsed">
              +<span className="space-between"></span>
              <Link href="/org/favorite/temple">Buddhist Temples</Link>
            </span>
          </a>
          <a
            href="/org/favorite/charity"
            className="list-group-item list-group-item-action"
          >
            <span className="menu-collapsed">
              +<span className="space-between"></span>
              <Link href="/org/favorite/charity">Charities</Link>
            </span>
          </a>
          <a
            href="/org/favorite/buddism"
            className="list-group-item list-group-item-action"
          >
            <span className="menu-collapsed">
              +<span className="space-between"></span>
              <Link href="/org/favorite/buddism">Buddhism</Link>
            </span>
          </a>
          <a
            href="/org/favorite/vegan"
            className="list-group-item list-group-item-action"
          >
            <span className="menu-collapsed">
              +<span className="space-between"></span>
              <Link href="/org/favorite/vegan">Vegan Shops</Link>
            </span>
          </a>
          <a
            href="/org/favorite/event"
            className="list-group-item list-group-item-action"
          >
            <span className="menu-collapsed">
              +<span className="space-between"></span>
              <Link href="/org/favorite/event">Event</Link>
            </span>
          </a>
        </div>

        <a
          href="#submenu11"
          data-toggle="collapse"
          aria-expanded="false"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-cogs fa-fw mr-3"></span>
            <span className="menu-collapsed" onclick="myFunction_three()">
              Setting
            </span>
            <span className="submenu-icon ml-auto"></span>
          </div>
        </a>

        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="fa fa-calendar fa-fw mr-3"></span>
            <span className="menu-collapsed">Find More</span>
          </div>
        </a>

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
