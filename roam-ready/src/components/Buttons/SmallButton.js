import { Link } from 'react-router-dom';

function SmallButton({ href, buttonText, backgroundColor }) {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        textDecoration: 'none',
        borderRadius: '0.5vw',
        padding: '0.5vw',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        display: 'inline-block'
      };
    
      const linkStyle = {
        textDecoration: 'none',
      };

    return (
      <div style = {buttonStyle}>
        <Link to ={href} rel="noopener noreferrer" style = { linkStyle } >
          <div className="textSizeS textColor-Secondary">{buttonText}</div>
        </Link>
      </div>
    );
  }
  
  export default SmallButton;
  