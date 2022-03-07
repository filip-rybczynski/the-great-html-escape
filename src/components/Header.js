import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>The Great HTML Escape</h1>
        <h2>The generator no-one needed... and no-one wanted</h2>
      </>
    );
  }
}

export default Header;
