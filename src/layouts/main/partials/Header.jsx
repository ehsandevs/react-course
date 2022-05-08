const MainHeader = () => {
  return (
    <header className="header-top" header-theme="light">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="top-menu d-flex align-items-center">
            <button
              type="button"
              className="btn-icon mobile-nav-toggle d-lg-none"
            >
              <span></span>
            </button>
            <div className="header-search">
              <div className="input-group">
                <span className="input-group-addon search-close">
                  <i className="ik ik-x"></i>
                </span>
                <input type="text" className="form-control" />
                <span className="input-group-addon search-btn">
                  <i className="ik ik-search"></i>
                </span>
              </div>
            </div>
            <button type="button" id="navbar-fullscreen" className="nav-link">
              <i className="ik ik-maximize"></i>
            </button>
          </div>
          <div className="top-menu d-flex align-items-center">
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="notiDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ik ik-bell"></i>
                <span className="badge bg-danger">3</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right notification-dropdown"
                aria-labelledby="notiDropdown"
              >
                <h4 className="header">Notifications</h4>
                <div className="notifications-wrap">
                  <a href="#" className="media">
                    <span className="d-flex">
                      <i className="ik ik-check"></i>
                    </span>
                    <span className="media-body">
                      <span className="heading-font-family media-heading">
                        Invitation accepted
                      </span>
                      <span className="media-content">
                        Your have been Invited ...
                      </span>
                    </span>
                  </a>
                  <a href="#" className="media">
                    <span className="d-flex">
                      <img
                        src="img/users/1.jpg"
                        className="rounded-circle"
                        alt=""
                      />
                    </span>
                    <span className="media-body">
                      <span className="heading-font-family media-heading">
                        Steve Smith
                      </span>
                      <span className="media-content">
                        I slowly updated projects
                      </span>
                    </span>
                  </a>
                  <a href="#" className="media">
                    <span className="d-flex">
                      <i className="ik ik-calendar"></i>
                    </span>
                    <span className="media-body">
                      <span className="heading-font-family media-heading">
                        To Do
                      </span>
                      <span className="media-content">
                        Meeting with Nathan on Friday 8 AM ...
                      </span>
                    </span>
                  </a>
                </div>
                <div className="footer">
                  <a href="javascript:void(0);">See all activity</a>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="nav-link ml-10 right-sidebar-toggle"
            >
              <i className="ik ik-message-square"></i>
              <span className="badge bg-success">3</span>
            </button>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="menuDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ik ik-plus"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right menu-grid"
                aria-labelledby="menuDropdown"
              >
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Dashboard"
                >
                  <i className="ik ik-bar-chart-2"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Message"
                >
                  <i className="ik ik-mail"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Accounts"
                >
                  <i className="ik ik-users"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Sales"
                >
                  <i className="ik ik-shopping-cart"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Purchase"
                >
                  <i className="ik ik-briefcase"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Pages"
                >
                  <i className="ik ik-clipboard"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Chats"
                >
                  <i className="ik ik-message-square"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Contacts"
                >
                  <i className="ik ik-map-pin"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Blocks"
                >
                  <i className="ik ik-inbox"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Events"
                >
                  <i className="ik ik-calendar"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Notifications"
                >
                  <i className="ik ik-bell"></i>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="More"
                >
                  <i className="ik ik-more-horizontal"></i>
                </a>
              </div>
            </div>
            <button
              type="button"
              className="nav-link ml-10"
              id="apps_modal_btn"
              data-toggle="modal"
              data-target="#appsModal"
            >
              <i className="ik ik-grid"></i>
            </button>
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img className="avatar" src="img/user.jpg" alt="" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="profile.html">
                  <i className="ik ik-user dropdown-icon"></i> Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ik ik-settings dropdown-icon"></i> Settings
                </a>
                <a className="dropdown-item" href="#">
                  <span className="float-right">
                    <span className="badge badge-primary">6</span>
                  </span>
                  <i className="ik ik-mail dropdown-icon"></i> Inbox
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ik ik-navigation dropdown-icon"></i> Message
                </a>
                <a className="dropdown-item" href="login.html">
                  <i className="ik ik-power dropdown-icon"></i> Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
