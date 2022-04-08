import React from "react";
import './description.scss';

export default function Description() {
  return (
    <p className="description">
      In terms of escaping HTML characters, it seems that it's considered best
      practice to{" "}
      <a href="https://www.w3.org/International/questions/qa-escapes#use" rel="external">
      always escape
      </a>{" "}
      <a href="https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html" rel="external">at least the syntax characters</a> - just to be safe. But what if we find ourselves in a scenario where... we want to display the escaped string. Would we need to escape that as well? And how about after that? How long would we need to keep doing this? Well, for as long as we want to follow best practices, basically... see for yourself.
    </p>
  );
}
