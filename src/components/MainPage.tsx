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
                serfdom 🙅🏻‍♂️ kingdom 🤌🏼👑 here are your keys 🔑
            </section>
            {/* Services Section */}
            <div style={servicesContainerStyle}>
                <Service 
                    title="AI Generated Profile Pictures" 
                    description="Custom models and full setting controls vastly outperform the trending apps." 
                    links=' <a href="https://www.shruggingface.com/blog/self-portraits-with-stable-diffusion-and-lora" style="color: #61dafb; text-decoration: none;">how?</a>, 
                            <a href="https://www.kix.in/2023/04/07/sd-lora-finetuning/" style="color: #61dafb; text-decoration: none;">come again?</a>,
                            <a href="https://www.profilepicture.ai/" style="color: #61dafb; text-decoration: none;">profilepicture.ai</a>'
                    checkoutLinks={[{ url: "https://buy.stripe.com/5kAbKngvgaM56o88wA", text: "Subscribe" }]} 
                    photoSrc="/images/service1.png"
                />
                <Service 
                    title="Websites" 
                    description="Custom modular sites, portfolios, and resumes market you and your projects perfectly." 
                    links=' <a href="https://hwp.lol" style="color: #61dafb; text-decoration: none;">this site</a>,
                            <a href="https://www.haydenprice.com/" style="color: #61dafb; text-decoration: none;">my personal site</a>,
                            <a href="https://github.com/education/codespaces-project-template-js/blob/main/__images__/js-portfolio-site.gif" style="color: #61dafb; text-decoration: none;">portfolio example</a>,
                            <a href="https://github.com/hpwn/hpwn/blob/main/Resume.pdf" style="color: #61dafb; text-decoration: none;">my resume</a>, 
                            <a href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs" style="color: #61dafb; text-decoration: none;">resume inspiration</a>, 
                            <a href="https://www.wix.com" style="color: #61dafb; text-decoration: none;">Wix</a>, 
                            <a href="https://www.squarespace.com" style="color: #61dafb; text-decoration: none;">Squarespace</a>'
                    checkoutLinks={[
                        { url: "https://buy.stripe.com/dR69Cf5QCbQ95k4aEJ", text: "Website" },
                        { url: "https://buy.stripe.com/28oeWzfrc5rL3bWfZ4", text: "Resume" },
                        { url: "https://buy.stripe.com/dR6g0D5QC5rL6o84gn", text: "Starter Pack" }
                    ]} 
                    photoSrc="/images/service2.png"
                />
                <Service 
                    title="Graphics & Editing" 
                    description="Individually crafted assets + image & video editing to scale." 
                    links='<a href="https://www.artbreeder.com/" style="color: #61dafb; text-decoration: none;">Artbreeder</a>, <a href="https://runwayml.com" style="color: #61dafb; text-decoration: none;">Runway ML</a>,
                            <a href="https://skylum.com/luminar-ai" style="color: #61dafb; text-decoration: none;">Luminar AI</a>,
                            <a href="https://www.midjourney.com/home" style="color: #61dafb; text-decoration: none;">Midjourney</a>,
                            <a href="https://openai.com/dall-e-3" style="color: #61dafb; text-decoration: none;">Dall-E</a>'
                    checkoutLinks={[
                        { url: "https://buy.stripe.com/dR615Jcf0g6ph2M288", text: "x1" },
                        { url: "https://buy.stripe.com/dR6eWzen89I1cMw289", text: "x5" },
                        { url: "https://buy.stripe.com/dR64hVbaW8DX3bW4gi", text: "x20 graphics" }
                    ]} 
                    photoSrc="/images/service3.png"
                />
                <Service 
                    title="Support the Stream" 
                    description="Support the stream and enjoy subscriber benefits just like on Twitch! Free with Amazon Prime 👑😯" 
                    links='<a href="https://twitch.tv/hp_az" style="color: #943fff; text-decoration: none;">Stream & VODs</a>'
                    checkoutLinks={[
                        { url: "https://buy.stripe.com/eVa6q3cf0f2lcMw5ks", text: "Stream Sub" },
                        { url: "https://donate.stripe.com/14kbKn92OdYh6o8147", text: "Donate" }
                    ]} 
                    photoSrc="/images/service4.png"
                    showExamplesLabel={false}  // Hides "Examples:" label
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
