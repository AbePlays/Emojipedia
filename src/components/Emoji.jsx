import React from "react";

function emoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default emoji;
