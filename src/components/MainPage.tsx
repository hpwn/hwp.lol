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
                    title="Websites"
                    description="Custom modular sites, portfolios, and resumes market you and your projects perfectly."
                    links=' <a href="https://hwp.lol" style="color: #61dafb; text-decoration: none;">this site</a>,
                            <a href="https://www.haydenprice.com/" style="color: #61dafb; text-decoration: none;">my personal site</a>,
                            <a href="https://www.wix.com" style="color: #61dafb; text-decoration: none;">Wix</a>, 
                            <a href="https://www.squarespace.com" style="color: #61dafb; text-decoration: none;">Squarespace</a>'
                    checkoutLinks={[
                        { url: "https://buy.stripe.com/aEUbKn3Iug6pcMweV3", text: "Essential Maintenance" },
                        { url: "https://buy.stripe.com/eVa5lZcf01bv9Ak5ku", text: "Advanced Concierge" },
                        { url: "https://buy.stripe.com/cN229NfrcaM5cMwdR1", text: "Event Website" },
                        { url: "https://buy.stripe.com/fZebKn1Am7zTh2M6oA", text: "Business Suite" },
                        { url: "https://buy.stripe.com/4gw15Jgvg2fzh2M3cp", text: "Personal Branding" }
                    ]}
                    photoSrc="/images/service1.png"
                />
                <Service
                    title="AI Profile Pics ➕ Graphic & Image Generation"
                    description="Custom models and full setting controls vastly outperform the trending apps. Individually crafted assets + image & video editing to scale."
                    links=' <a href="https://www.shruggingface.com/blog/self-portraits-with-stable-diffusion-and-lora" style="color: #61dafb; text-decoration: none;">how?</a>, 
                            <a href="https://www.kix.in/2023/04/07/sd-lora-finetuning/" style="color: #61dafb; text-decoration: none;">come again?</a>,
                            <a href="https://www.profilepicture.ai/" style="color: #61dafb; text-decoration: none;">profilepicture.ai</a>,
                            <a href="https://www.artbreeder.com/" style="color: #61dafb; text-decoration: none;">Artbreeder</a>, <a href="https://runwayml.com" style="color: #61dafb; text-decoration: none;">Runway ML</a>,
                            <a href="https://skylum.com/luminar-ai" style="color: #61dafb; text-decoration: none;">Luminar AI</a>,
                            <a href="https://www.midjourney.com/home" style="color: #61dafb; text-decoration: none;">Midjourney</a>,
                            <a href="https://openai.com/dall-e-3" style="color: #61dafb; text-decoration: none;">Dall-E</a>'
                    checkoutLinks={[
                        { url: "https://buy.stripe.com/28oeWzgvgcUd27S6oC", text: "Basic Image" },
                        { url: "https://buy.stripe.com/6oE15Jen82fzfYIcN2", text: "Premium Bundle" },
                        { url: "https://buy.stripe.com/8wM15J92O07raEo9AP", text: "Advanced Bundle" },
                        { url: "https://buy.stripe.com/00g15J92O4nHbIsdR7", text: "Custom Profile Pics" }
                    ]}
                    photoSrc="/images/service2.png"
                />
                <Service
                    title="Professional Branding"
                    description="Advance your career with a polished online presence."
                    links=' <a href="https://github.com/education/codespaces-project-template-js/blob/main/__images__/js-portfolio-site.gif" style="color: #61dafb; text-decoration: none;">portfolio example</a>,
                            <a href="https://github.com/hpwn/hpwn/blob/main/Resume.pdf" style="color: #61dafb; text-decoration: none;">my resume</a>, 
                            <a href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs" style="color: #61dafb; text-decoration: none;">resume inspiration</a>'
                    checkoutLinks={[
                        { url: "https://buy.stripe.com/5kA3dR3Iu6vP13O28q", text: "Branding Starter" },
                        { url: "https://buy.stripe.com/14k01Fen8bQ93bW00j", text: "Branding Suite" },
                        { url: "https://buy.stripe.com/9AQdSv5QC9I14g07sM", text: "Business Suite" }
                    ]}
                    photoSrc="/images/service3.png"
                />
                <Service
                    title="Support the Stream"
                    description="Support the stream and enjoy subscriber benefits just like on Twitch! Free with Amazon Prime 👑😯"
                    links='<a href="https://twitch.tv/hp_az" style="color: #943fff; text-decoration: none;">Stream & VODs</a>'
                    checkoutLinks={[
                        { url: "https://buy.stripe.com/eVa6q3cf0f2lcMw5ks", text: "Stream Support" },
                        { url: "https://donate.stripe.com/14kbKn92OdYh6o8147", text: "Donation" }
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
