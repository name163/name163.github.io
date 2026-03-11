import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' });
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
                    
                    &nbsp;&nbsp;<button type="submit">/* Send Message */</button>
                </form>

                {'}'}
            </div>
        </section>
    );
}

export default Contact;