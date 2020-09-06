import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          {/* <li>
            <a href="#" className="icon alt fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="icon alt fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li> */}
          <li>
            <a
              href="https://www.instagram.com/fredericsoloy/"
              target="_blank"
              className="icon alt fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Frederic-S"
              target="_blank"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fred-soloy/"
              target="_blank"
              className="icon alt fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Facts Tab</li>
          <li>
            Fred Soloy{' '}
            <a href="https://fredsoloy.com" target="_blank">
              {' '}
              My Site
            </a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer
