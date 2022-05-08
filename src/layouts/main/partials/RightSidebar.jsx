const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <div className="sidebar-chat" data-plugin="chat-sidebar">
        <div className="sidebar-chat-info">
          <h6>Chat List</h6>
          <form className="mr-t-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for friends ..."
              />
              <i className="ik ik-search"></i>
            </div>
          </form>
        </div>
        <div className="chat-list">
          <div className="list-group row">
            <a
              href="javascript:void(0)"
              className="list-group-item"
              data-chat-user="Gene Newman"
            >
              <figure className="user--online">
                <img src="img/users/1.jpg" className="rounded-circle" alt="" />
              </figure>
              <span>
                <span className="name">Gene Newman</span>{" "}
                <span className="username">@gene_newman</span>{" "}
              </span>
            </a>
            <a
              href="javascript:void(0)"
              className="list-group-item"
              data-chat-user="Billy Black"
            >
              <figure className="user--online">
                <img src="img/users/2.jpg" className="rounded-circle" alt="" />
              </figure>
              <span>
                <span className="name">Billy Black</span>{" "}
                <span className="username">@billyblack</span>{" "}
              </span>
            </a>
            <a
              href="javascript:void(0)"
              className="list-group-item"
              data-chat-user="Herbert Diaz"
            >
              <figure className="user--online">
                <img src="img/users/3.jpg" className="rounded-circle" alt="" />
              </figure>
              <span>
                <span className="name">Herbert Diaz</span>{" "}
                <span className="username">@herbert</span>{" "}
              </span>
            </a>
            <a
              href="javascript:void(0)"
              className="list-group-item"
              data-chat-user="Sylvia Harvey"
            >
              <figure className="user--busy">
                <img src="img/users/4.jpg" className="rounded-circle" alt="" />
              </figure>
              <span>
                <span className="name">Sylvia Harvey</span>{" "}
                <span className="username">@sylvia</span>{" "}
              </span>
            </a>
            <a
              href="javascript:void(0)"
              className="list-group-item active"
              data-chat-user="Marsha Hoffman"
            >
              <figure className="user--busy">
                <img src="img/users/5.jpg" className="rounded-circle" alt="" />
              </figure>
              <span>
                <span className="name">Marsha Hoffman</span>{" "}
                <span className="username">@m_hoffman</span>{" "}
              </span>
            </a>
            <a
              href="javascript:void(0)"
              className="list-group-item"
              data-chat-user="Mason Grant"
            >
              <figure className="user--offline">
                <img src="img/users/1.jpg" className="rounded-circle" alt="" />
              </figure>
              <span>
                <span className="name">Mason Grant</span>{" "}
                <span className="username">@masongrant</span>{" "}
              </span>
            </a>
            <a
              href="javascript:void(0)"
              className="list-group-item"
              data-chat-user="Shelly Sullivan"
            >
              <figure className="user--offline">
                <img src="img/users/2.jpg" className="rounded-circle" alt="" />
              </figure>
              <span>
                <span className="name">Shelly Sullivan</span>{" "}
                <span className="username">@shelly</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
