import React from "react";
const Username = ({ setUsername }) => {
  return (
    <div className="username-box-component">
      <label>Username</label>
      <input name="username" onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
};
export default Username;
