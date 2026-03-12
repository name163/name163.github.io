import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
    const [captchaToken, setCaptchaToken] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaToken) {
            console.log("CAPTCHA not completed");
            alert("Please complete the CAPTCHA first.");
            return;
        }

        const API_URL = "https://mns8l774t4.execute-api.ap-southeast-2.amazonaws.com/prod/contact";
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name, email: formData.email, message: formData.message, captchaToken: captchaToken
            })
        });

        if (response.ok) {
            console.log("Message sent: ", formData);
            alert("Message sent successfully!");
        }
    };

    return (
        <section id="contact" className="page active">
            <div className="css-form">
                <span className="keyword">.contact-form</span> {'{'} <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-line">
                        &nbsp;&nbsp;<label>name:</label>
                        <input type="text"
                        name="name"
                        placeholder="'Enter Name';"
                        autocomplete="off"
                        required
                        value={formData.name}
                        onChange={handleChange}></input>
                    </div>

                    <div className="form-line">
                        &nbsp;&nbsp;<label>email:</label>
                        <input type="email"
                        name="email"
                        placeholder="'Enter Email';"
                        autocomplete="off"
                        required
                        value={formData.email}
                        onChange={handleChange}></input>
                    </div>

                    <div className="form-line">
                        &nbsp;&nbsp;<label>message:</label>
                        <textarea name="message"
                        placeholder="'Enter Message';"
                        autocomplete="off"
                        required
                        value={formData.message}
                        onChange={handleChange}></textarea>
                    </div>
                    
                    <ReCAPTCHA
                        sitekey="6LcU3YcsAAAAAAJd_HNAJTryybfyg8n56EIVk7G2"
                        onChange={handleCaptchaChange}
                        theme="dark"
                    />
                    
                    &nbsp;&nbsp;<button type="submit">/* Send Message */</button>
                </form>

                {'}'}
            </div>
        </section>
    );
}

export default Contact;