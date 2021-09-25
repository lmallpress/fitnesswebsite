import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <div className="colorlib-footer">
              <p><small>&copy; Marie Allpress <script>document.write(new Date().getFullYear());</script>| All rights reserved | Built with: <a href="https://colorlib.com/wp/templates/">Colorlib</a> </small></p>
            </div>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer