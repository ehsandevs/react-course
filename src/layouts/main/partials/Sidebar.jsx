import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import navigation from "../../../navigation";

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
            {navigation?.map((nav) => {
              if (nav?.header) {
                return <div className="nav-lavel">{nav?.header}</div>;
              } else if (nav?.children) {
                return (
                  <>
                    <div className="nav-item has-sub">
                      <a href="javascript:void(0)">
                        <i className="ik ik-layers"></i>
                        <span>Widgets</span>
                        <span className="badge badge-danger">150+</span>
                      </a>
                      <div className="submenu-content">
                        <a href="pages/widgets.html" className="menu-item">
                          Basic
                        </a>
                        <a
                          href="pages/widget-statistic.html"
                          className="menu-item"
                        >
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
                  </>
                );
              } else {
                return (
                  <div className="nav-item active">
                    <Link to={nav?.navLink}>
                      {nav?.icon ?? null}

                      <span>{nav?.title}</span>

                      {nav?.badge && (
                        <Badge color={nav?.badgeColor ?? "primary"}>
                          {nav?.badgeTitle}
                        </Badge>
                      )}
                    </Link>
                  </div>
                );
              }
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
