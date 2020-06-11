import React from "react";
import auth from "./Auth";

export function Shop(props) {
  return (
    <div>
      <h1>Shop Component</h1>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}
