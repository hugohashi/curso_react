import React, { useState } from 'react';
import "./contactform.css"

const ContactForm = () => {
    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    const sendMessage = (event) => {
        event.preventDefault();

        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "",
            Password : "",
            To : "",
            From : "",
            Subject : "Nova requisição de contacto",
            Body : "Name: " + document.getElementById("name").value + 
            "<br> Telemóvel: " + document.getElementById("phone").value +
            "<br> E-mail: " + document.getElementById("email").value +
            "<br> Mensagem: " + document.getElementById("message").value 
        }).then(
            message => alert(message)
        );
    }

    return(
        <div className="contact_form">
            <form method='post' onSubmit={sendMessage}>
                <h2>Envie Sua Mensagem</h2>
                <input type="text" id="name" placeholder="Nome" onChange={changeHandler}/>
                <input type="phone" id="phone" placeholder="Telemóvel" onChange={changeHandler}/>
                <input type="email" id="email" placeholder="E-mail" onChange={changeHandler}/>
                <textarea id="message" rows={10} placeholder="Mensagem" onChange={changeHandler}/>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </div>
    );
};

export default ContactForm;
