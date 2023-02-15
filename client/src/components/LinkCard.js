import React from "react";

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Посилання</h2>

      <p>
        Ваше посилання:{" "}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Звідки:{" "}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        К-сть кліків на посилання: <strong>{link.clicks}</strong>
      </p>
      <p>
        Дата створення:{" "}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};
