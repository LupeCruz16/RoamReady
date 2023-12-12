import { Link } from 'react-router-dom';

function SmallButton({ href, buttonText, backgroundColor, onClick }) {
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
      <div style={buttonStyle} onClick={onClick}>
          {href ? (
              <Link to={href} rel="noopener noreferrer" style={linkStyle}>
                  <div className="textSizeS textColor-Secondary">{buttonText}</div>
              </Link>
          ) : (
              <div className="textSizeS textColor-Secondary">{buttonText}</div>
          )}
      </div>
    );
}

export default SmallButton;
