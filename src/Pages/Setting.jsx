import GeneralSetting from "../Settings/GeneralSetting";
import Notification from "../Settings/Notification";

import { useState } from "react";

function Setting() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="setting">
      <div className="tab-btn">
        <button className="tab1" onClick={() => setActiveTab("tab1")}>
          General
        </button>
        <button className="tab2" onClick={() => setActiveTab("tab2")}>
          Notification
        </button>
      </div>

      <div>
        {activeTab === "tab1" && <GeneralSetting />}
        {activeTab === "tab2" && <Notification />}
      </div>
    </div>
  );
}

export default Setting;
