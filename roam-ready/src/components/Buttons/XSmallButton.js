import { Link } from 'react-router-dom';

function XSmallButton({ href, buttonText, backgroundColor }) {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        textDecoration: 'none',
        borderRadius: '0.5vw',
        padding: '0.2vw',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        display: 'inline-block'
      };
    
      const linkStyle = {
        textDecoration: 'none',
      };

    return (
      <div style = {buttonStyle}>
        <Link to = {href} rel="noopener noreferrer" style = { linkStyle } >
          <div className="textSizeXS textColor-Secondary">{buttonText}</div>
        </Link>
      </div>
    );
  }
  
  export default XSmallButton;
  