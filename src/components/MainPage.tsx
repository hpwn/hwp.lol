// src/components/MainPage.tsx
import React from 'react';
import Header from './Header';  
import Service from './Service';

const MainPage = () => {
    return (
        <div>
            <Header />
            {/* Slogan Section */}
            <section style={sloganStyle}>
                serfdom 🙅🏻‍♂️ kingdom 🤌🏼👑 here are your keys:
            </section>
            {/* Services Section */}
            <div style={servicesContainerStyle}>
                <Service 
                    title="AI Generated Profile Pictures" 
                    description="Custom models and full setting controls vastly outperform the trending apps." 
                    examples="ThisPersonDoesNotExist.com, Artbreeder"
                    competitors="Generated.photos, DALLE" 
                    checkoutLink="https://stripe.com/checkout1" 
                    photoSrc="/images/service1.png"
                />
                <Service 
                    title="Websites" 
                    description="Custom modular sites, portfolios, and resumes market you or your projects perfectly." 
                    examples="Wix, Squarespace"
                    competitors="Webflow, WordPress" 
                    checkoutLink="https://stripe.com/checkout2" 
                    photoSrc="/images/service2.png"
                />
                <Service 
                    title="Graphics & Editing" 
                    description="Individually crafted assets and editing to scale." 
                    examples="Luminar AI, Runway ML"
                    competitors="Prisma, DeepArt.io" 
                    checkoutLink="https://stripe.com/checkout3" 
                    photoSrc="/images/service3.png"
                />
                <Service 
                    title="Support the Stream" 
                    description="Support the stream and enjoy subscriber benefits just like on Twitch!" 
                    examples=""
                    competitors="" 
                    checkoutLink="https://stripe.com/checkout4" 
                    photoSrc="/images/service4.png"
                />
            </div>
        </div>
    );
};

// Styles
const sloganStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
    color: 'white',  
};

const servicesContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: '0 16px',
};

export default MainPage;
