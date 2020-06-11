import React from "react";
import auth from "./Auth";

export function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <div>
        <h3>Protected Route</h3>
        <p>( route which is private )</p>
        <p>
          Protected route means, when user logged in then he/she can access some
          private route and visit on those route. whenever user loggout or
          authentication failed then he will not able access those route
          anymore.
        </p>
        <hr />
      </div>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/shop");
          });
        }}
      >
        Login
      </button>
    </div>
  );
}
