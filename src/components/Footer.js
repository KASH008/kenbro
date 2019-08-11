import React from 'react'
import {Link} from 'gatsby'

const Footer=()=>{

  return (
    <div>
      <footer>
          © {new Date().getFullYear()}, Developed by <i>kenbro developers</i>
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    
    
    </div>
  )
}

export default Footer