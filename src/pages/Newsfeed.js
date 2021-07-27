import React from "react";
import { useSession } from "../hooks";

export const Newsfeed = () => {
  const { loading, loggedIn, myAccount } = useSession();

  console.log(loading, loggedIn, myAccount);

  return (
    <div>
      <h1>Newsfeed</h1>
    </div>
  );
};
