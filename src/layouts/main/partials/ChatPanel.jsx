const ChatPanel = () => {
  return (
    <div className="chat-panel" hidden>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <a href="javascript:void(0);">
            <i className="ik ik-message-square text-success"></i>
          </a>
          <span className="user-name">John Doe</span>
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="card-body">
          <div className="widget-chat-activity flex-1">
            <div className="messages">
              <div className="message media reply">
                <figure className="user--online">
                  <a href="#">
                    <img
                      src="img/users/3.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </figure>
                <div className="message-body media-body">
                  <p>Epic Cheeseburgers come in all kind of styles.</p>
                </div>
              </div>
              <div className="message media">
                <figure className="user--online">
                  <a href="#">
                    <img
                      src="img/users/1.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </figure>
                <div className="message-body media-body">
                  <p>Cheeseburgers make your knees weak.</p>
                </div>
              </div>
              <div className="message media reply">
                <figure className="user--offline">
                  <a href="#">
                    <img
                      src="img/users/5.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </figure>
                <div className="message-body media-body">
                  <p>Cheeseburgers will never let you down.</p>
                  <p>They'll also never run around or desert you.</p>
                </div>
              </div>
              <div className="message media">
                <figure className="user--online">
                  <a href="#">
                    <img
                      src="img/users/1.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </figure>
                <div className="message-body media-body">
                  <p>A great cheeseburger is a gastronomical event.</p>
                </div>
              </div>
              <div className="message media reply">
                <figure className="user--busy">
                  <a href="#">
                    <img
                      src="img/users/5.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </figure>
                <div className="message-body media-body">
                  <p>
                    There's a cheesy incarnation waiting for you no matter what
                    you palete preferences are.
                  </p>
                </div>
              </div>
              <div className="message media">
                <figure className="user--online">
                  <a href="#">
                    <img
                      src="img/users/1.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </figure>
                <div className="message-body media-body">
                  <p>If you are a vegan, we are sorry for you loss.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action="javascript:void(0)" className="card-footer" method="post">
          <div className="d-flex justify-content-end">
            <textarea
              className="border-0 flex-1"
              rows={1}
              placeholder="Type your message here"
            ></textarea>
            <button className="btn btn-icon" type="submit">
              <i className="ik ik-arrow-right text-success"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPanel;
