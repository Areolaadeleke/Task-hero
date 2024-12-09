function Notification() {
  return (
    <div className="noti">
      <h4>Notification Setting</h4>

      <div className="flex">
        <span className="switch">
          <input type="checkbox" />
          <label></label>
        </span>
        <span>Message</span>
      </div>

      <div className="flex">
        <span className="switch">
          <input type="checkbox" />
          <label></label>
        </span>
        <span>Task Update</span>
      </div>

      <div className="flex">
        <span className="switch">
          <input type="checkbox" />
          <label></label>
        </span>
        <span>Task Deadline</span>
      </div>

      <div className="flex">
        <span className="switch">
          <input type="checkbox" />
          <label></label>
        </span>
        <span>Mentor Help</span>
      </div>

      <div className="noti-btn">
        <button>Save Changes</button>
      </div>
    </div>
  );
}

export default Notification;
