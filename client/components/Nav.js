import React from 'react';

class Nav extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo"><img src='img/habitrax-logo.svg' /></a>
          <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/">All</a></li>
            <li><a href="/">Personal</a></li>
            <li><a href="/">Education</a></li>
            <li><a href="/">Money</a></li>
          </ul>
          <ul className="side-nav" id="mobile">
          <li><a href="/">Home</a></li>
          <li><a href="/">All</a></li>
          <li><a href="/">Personal</a></li>
          <li><a href="/">Education</a></li>
          <li><a href="/">Money</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Nav;
