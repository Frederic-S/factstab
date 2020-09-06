import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud"></span>
          <h1>
            Hi, I'm <strong>Fred</strong>
          </h1>
          <p>
            I am a Web Developer, and have few things to show
            <br />
            lobortis feugiat sapien sed etiam volutpat accumsan.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
