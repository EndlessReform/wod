import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
  Thanks to IBM for making this template
  </>
);

const links = {
  firstCol: [
    { href: 'https://carbondesignsystem.com/', linkText: 'Theme: IBM Carbon' },
    { href: 'https://github.com/EndlessReform/wod', linkText: 'Source code' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
