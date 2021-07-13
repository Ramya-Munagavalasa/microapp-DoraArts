import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Home",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/notifications",
    title: "Reviews",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/about",
    title: "About Us",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Gallery",
    icon: "icon-camera-18",
    class: ""
  },
  {
    path: "/contact",
    title: "Contact Us",
    icon: "icon-chat-33",
    class: ""
  }
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   icon: "icon-pin",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
