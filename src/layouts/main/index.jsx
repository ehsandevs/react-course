import ChatPanel from "./partials/ChatPanel";
import MainFooter from "./partials/Footer";
import MainHeader from "./partials/Header";
import RightSidebar from "./partials/RightSidebar";
import Sidebar from "./partials/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <MainHeader />

      <div className="page-wrap">
        <Sidebar />
        <div className="main-content">
          <div className="container-fluid">{children}</div>
        </div>

        <RightSidebar />

        <ChatPanel />

        <MainFooter />
      </div>
    </div>
  );
};

export default MainLayout;
