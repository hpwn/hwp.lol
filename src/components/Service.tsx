// src/components/Service.tsx
interface ServiceProps {
  title: string;
  description: string;
  links: string;  
  checkoutLinks: { url: string; text: string }[];  // Updated type to an array of objects
  photoSrc: string;
  showExamplesLabel?: boolean;
}

const Service = ({
  title,
  description,
  links,  
  checkoutLinks,
  photoSrc,
  showExamplesLabel = true
}: ServiceProps) => {
  return (
      <div style={serviceStyle}>
          <img src={photoSrc} alt={`${title} illustration`} style={photoStyle} />
          <div style={textContainerStyle}>
              <h2 style={titleStyle}>{title}</h2>
              <p style={descriptionStyle}>{description}</p>
              {links && (
                  <div style={linkContainerStyle}>
                      {showExamplesLabel ? <><div style={examplesLabelStyle}>examples</div><br /></> : null}
                      <span dangerouslySetInnerHTML={{ __html: links }} />
                  </div>
              )}
              <div style={checkoutLinksContainerStyle}>
                ✨
                {checkoutLinks.map((link, index) => (
                  <span key={index}>
                    <a href={link.url} style={checkoutLinkStyle}>{link.text}</a>
                    {index < checkoutLinks.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
          </div>
      </div>
  );
};

const checkoutLinksContainerStyle: React.CSSProperties = {
  marginTop: '10px',  // Add some space above the checkout links
};

const checkoutLinkStyle: React.CSSProperties = {
  color: '#ffc66e',  // Lighter blue color
  textDecoration: 'none',
  //marginRight: '5px',  // Optional: add a small margin to the right of each link if needed
};

const examplesLabelStyle: React.CSSProperties = {
  color: '#555',  // Darker grey color
};

const subscribeLinkStyle: React.CSSProperties = {
  color: '#ffc66e',  // Lighter blue color
  textDecoration: 'none',
};

const serviceStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  maxWidth: '400px',
  width: '100%',
};

const photoStyle: React.CSSProperties = {
  width: '150px',
  height: 'auto',
  marginRight: '16px',
};

const textContainerStyle: React.CSSProperties = {
  flex: 1,
};

const titleStyle: React.CSSProperties = {
  fontSize: '20px',
  margin: '0 0 8px 0',
};

const descriptionStyle: React.CSSProperties = {
  margin: '0 0 16px 0',
};

const linkContainerStyle: React.CSSProperties = {
  margin: '8px 0',
  display: 'flex',
  flexDirection: "column",
};

export default Service;
