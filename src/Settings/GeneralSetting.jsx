function GeneralSetting() {
  return (
    <div className="general">
      <h4>General Setting</h4>

      <div className="select">
        <lable>Language</lable>
        <select>
          <option value="english">English (en)</option>
          <option value="spanish">Spanish (es)</option>
          <option value="hindi">Hindi (hi)</option>
          <option value="German">German (de)</option>
          <option value="japnanse">Japnaese (ja)</option>
        </select>
      </div>

      <div className="select">
        <lable>Time Zone</lable>
        <select>
          <option value="Africa/Lagos">Africa/Lagos (UTC+01:00)</option>
          <option value="asia/dubai">Asia/Dubai (UTC+04:00)</option>
          <option value="Europe/paris">Europe/Paris (UTC+01:00)</option>
          <option value="europe/paris">Europe/London(UTC+00:00)</option>
        </select>
      </div>
    </div>
  );
}

export default GeneralSetting;
