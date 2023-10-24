import React from "react";

const Client = ({ details, onDelete }) => (
  <li>
    {details.nom}{details.image} <button onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Client;
