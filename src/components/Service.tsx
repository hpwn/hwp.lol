// src/components/Service.tsx
interface ServiceProps {
  title: string;
  description: string;
  links: string;  
  checkoutLink: string;
  photoSrc: string;
  showExamplesLabel?: boolean;  // New prop for conditional rendering
}

const Service = ({
  title,
  description,
  links,  
  checkoutLink,
  photoSrc,
  showExamplesLabel = true  // Default to true
}: ServiceProps) => {
  return (
      <div style={serviceStyle}>
          <img src={photoSrc} alt={`${title} illustration`} style={photoStyle} />
          <div style={textContainerStyle}>
              <h2 style={titleStyle}>{title}</h2>
              <p style={descriptionStyle}>{description}</p>
              {links && (
                  <div style={linkContainerStyle}>
                      {showExamplesLabel ? <><div style={examplesLabelStyle}>examples</div><br /></> : ''}  {/* Include break element */}
                      <span dangerouslySetInnerHTML={{ __html: links }} />
                  </div>
              )}
              <a href={checkoutLink} style={subscribeLinkStyle}>Subscribe</a>  {/* Updated text and style */}
          </div>
      </div>
  );
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
