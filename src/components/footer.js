import React from 'react';
import footerStyles from './footer.module.scss';
import { graphql, useStaticQuery} from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return (
        <footer className={footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author}, © 2019</p>
        </footer>
    )
}

export default Footer;