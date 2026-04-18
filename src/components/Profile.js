import React from "react";

function Profile({ email }) {
  return (
    <div className="card p-3 m-2">
      <h5>Contact</h5>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default Profile;