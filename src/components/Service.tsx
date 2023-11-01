// src/components/Service.tsx
interface ServiceProps {
  title: string;
  description: string;
  examples: string;
  competitors: string;
  checkoutLink: string;
  photoSrc: string;
}

const Service = ({
  title,
  description,
  examples,
  competitors,
  checkoutLink,
  photoSrc
}: ServiceProps) => {
  // Convert comma-separated strings to arrays
  const examplesArray = examples.split(', ');
  const competitorsArray = competitors.split(', ');

  return (
      <div style={serviceStyle}>
          <img src={photoSrc} alt={`${title} illustration`} style={photoStyle} />
          <div style={textContainerStyle}>
              <h2 style={titleStyle}>{title}</h2>
              <p style={descriptionStyle}>{description}</p>
              <div style={linkContainerStyle}>
                  {examplesArray.map((example, index) => (
                      <a key={index} href="#" style={linkStyle}>{example}</a>
                  ))}
                  {competitorsArray.map((competitor, index) => (
                      <a key={index + examplesArray.length} href="#" style={linkStyle}>{competitor}</a>
                  ))}
              </div>
              <a href={checkoutLink} style={checkoutLinkStyle}>Purchase</a>
          </div>
      </div>
  );
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

const checkoutLinkStyle: React.CSSProperties = {
  color: 'blue',
  textDecoration: 'underline',
};

const linkContainerStyle: React.CSSProperties = {
  margin: '8px 0',
  display: 'flex',
  flexWrap: 'wrap',
};

const linkStyle: React.CSSProperties = {
  color: '#61dafb',  // Adjust the color to match your design
  textDecoration: 'none',
  marginRight: '8px',  // Adds some spacing between links
};

export default Service;
