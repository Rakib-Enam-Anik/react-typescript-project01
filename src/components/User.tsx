import React from "react";

// string, number, boolean, void, null

type UserProps = {name: string; age: number; isRegistered: boolean };

const User = ({ name, age, isRegistered }: UserProps ) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      {isRegistered ? <p> Register User </p> : <p> Not Registered User </p>}
    </div>
  );
};

export default User;
