const Sidebar = () => {
  return (
    <div className="app-sidebar colored">
      <div className="sidebar-header">
        <a className="header-brand" href="index.html">
          <div className="logo-img">
            <img
              src="src/img/brand-white.svg"
              className="header-brand-img"
              alt="lavalite"
            />
          </div>
          <span className="text">ThemeKit</span>
        </a>
        <button type="button" className="nav-toggle">
          <i
            data-toggle="expanded"
            className="ik ik-toggle-right toggle-icon"
          ></i>
        </button>
        <button id="sidebarClose" className="nav-close">
          <i className="ik ik-x"></i>
        </button>
      </div>

      <div className="sidebar-content">
        <div className="nav-container">
          <nav id="main-menu-navigation" className="navigation-main">
            <div className="nav-lavel">Navigation</div>
            <div className="nav-item active">
              <a href="index.html">
                <i className="ik ik-bar-chart-2"></i>
                <span>Dashboard</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="pages/navbar.html">
                <i className="ik ik-menu"></i>
                <span>Navigation</span>{" "}
                <span className="badge badge-success">New</span>
              </a>
            </div>
            <div className="nav-item has-sub">
              <a href="javascript:void(0)">
                <i className="ik ik-layers"></i>
                <span>Widgets</span>{" "}
                <span className="badge badge-danger">150+</span>
              </a>
              <div className="submenu-content">
                <a href="pages/widgets.html" className="menu-item">
                  Basic
                </a>
                <a href="pages/widget-statistic.html" className="menu-item">
                  Statistic
                </a>
                <a href="pages/widget-data.html" className="menu-item">
                  Data
                </a>
                <a href="pages/widget-chart.html" className="menu-item">
                  Chart Widget
                </a>
              </div>
            </div>
            <div className="nav-lavel">UI Element</div>
            <div className="nav-item has-sub">
              <a href="#">
                <i className="ik ik-box"></i>
                <span>Basic</span>
              </a>
              <div className="submenu-content">
                <a href="pages/ui/alerts.html" className="menu-item">
                  Alerts
                </a>
                <a href="pages/ui/badges.html" className="menu-item">
                  Badges
                </a>
                <a href="pages/ui/buttons.html" className="menu-item">
                  Buttons
                </a>
                <a href="pages/ui/navigation.html" className="menu-item">
                  Navigation
                </a>
              </div>
            </div>
            <div className="nav-item has-sub">
              <a href="#">
                <i className="ik ik-gitlab"></i>
                <span>Advance</span>{" "}
                <span className="badge badge-success">New</span>
              </a>
              <div className="submenu-content">
                <a href="pages/ui/modals.html" className="menu-item">
                  Modals
                </a>
                <a href="pages/ui/notifications.html" className="menu-item">
                  Notifications
                </a>
                <a href="pages/ui/carousel.html" className="menu-item">
                  Slider
                </a>
                <a href="pages/ui/range-slider.html" className="menu-item">
                  Range Slider
                </a>
                <a href="pages/ui/rating.html" className="menu-item">
                  Rating
                </a>
              </div>
            </div>
            <div className="nav-item has-sub">
              <a href="#">
                <i className="ik ik-package"></i>
                <span>Extra</span>
              </a>
              <div className="submenu-content">
                <a href="pages/ui/session-timeout.html" className="menu-item">
                  Session Timeout
                </a>
              </div>
            </div>
            <div className="nav-item">
              <a href="pages/ui/icons.html">
                <i className="ik ik-command"></i>
                <span>Icons</span>
              </a>
            </div>
            <div className="nav-lavel">Forms</div>
            <div className="nav-item has-sub">
              <a href="#">
                <i className="ik ik-edit"></i>
                <span>Forms</span>
              </a>
              <div className="submenu-content">
                <a href="pages/form-components.html" className="menu-item">
                  Components
                </a>
                <a href="pages/form-addon.html" className="menu-item">
                  Add-On
                </a>
                <a href="pages/form-advance.html" className="menu-item">
                  Advance
                </a>
              </div>
            </div>
            <div className="nav-item">
              <a href="pages/form-picker.html">
                <i className="ik ik-terminal"></i>
                <span>Form Picker</span>{" "}
                <span className="badge badge-success">New</span>
              </a>
            </div>

            <div className="nav-lavel">Tables</div>
            <div className="nav-item">
              <a href="pages/table-bootstrap.html">
                <i className="ik ik-credit-card"></i>
                <span>Bootstrap Table</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="pages/table-datatable.html">
                <i className="ik ik-inbox"></i>
                <span>Data Table</span>
              </a>
            </div>

            <div className="nav-lavel">Charts</div>
            <div className="nav-item has-sub">
              <a href="#">
                <i className="ik ik-pie-chart"></i>
                <span>Charts</span>{" "}
                <span className="badge badge-success">New</span>
              </a>
              <div className="submenu-content">
                <a
                  href="pages/charts-chartist.html"
                  className="menu-item active"
                >
                  Chartist
                </a>
                <a href="pages/charts-flot.html" className="menu-item">
                  Flot
                </a>
                <a href="pages/charts-knob.html" className="menu-item">
                  Knob
                </a>
                <a href="pages/charts-amcharts.html" className="menu-item">
                  Amcharts
                </a>
              </div>
            </div>

            <div className="nav-lavel">Apps</div>
            <div className="nav-item">
              <a href="pages/calendar.html">
                <i className="ik ik-calendar"></i>
                <span>Calendar</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="pages/taskboard.html">
                <i className="ik ik-server"></i>
                <span>Taskboard</span>
              </a>
            </div>

            <div className="nav-lavel">Pages</div>

            <div className="nav-item has-sub">
              <a href="#">
                <i className="ik ik-lock"></i>
                <span>Authentication</span>
              </a>
              <div className="submenu-content">
                <a href="pages/login.html" className="menu-item">
                  Login
                </a>
                <a href="pages/register.html" className="menu-item">
                  Register
                </a>
                <a href="pages/forgot-password.html" className="menu-item">
                  Forgot Password
                </a>
              </div>
            </div>
            <div className="nav-item has-sub">
              <a href="#">
                <i className="ik ik-file-text"></i>
                <span>Other</span>
              </a>
              <div className="submenu-content">
                <a href="pages/profile.html" className="menu-item">
                  Profile
                </a>
                <a href="pages/invoice.html" className="menu-item">
                  Invoice
                </a>
              </div>
            </div>
            <div className="nav-item">
              <a href="pages/layouts.html">
                <i className="ik ik-layout"></i>
                <span>Layouts</span>
                <span className="badge badge-success">New</span>
              </a>
            </div>
            <div className="nav-lavel">Other</div>
            <div className="nav-item has-sub">
              <a href="javascript:void(0)">
                <i className="ik ik-list"></i>
                <span>Menu Levels</span>
              </a>
              <div className="submenu-content">
                <a href="javascript:void(0)" className="menu-item">
                  Menu Level 2.1
                </a>
                <div className="nav-item has-sub">
                  <a href="javascript:void(0)" className="menu-item">
                    Menu Level 2.2
                  </a>
                  <div className="submenu-content">
                    <a href="javascript:void(0)" className="menu-item">
                      Menu Level 3.1
                    </a>
                  </div>
                </div>
                <a href="javascript:void(0)" className="menu-item">
                  Menu Level 2.3
                </a>
              </div>
            </div>
            <div className="nav-item">
              <a href="javascript:void(0)" className="disabled">
                <i className="ik ik-slash"></i>
                <span>Disabled Menu</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="javascript:void(0)">
                <i className="ik ik-award"></i>
                <span>Sample Page</span>
              </a>
            </div>
            <div className="nav-lavel">Support</div>
            <div className="nav-item">
              <a href="javascript:void(0)">
                <i className="ik ik-monitor"></i>
                <span>Documentation</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="javascript:void(0)">
                <i className="ik ik-help-circle"></i>
                <span>Submit Issue</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
