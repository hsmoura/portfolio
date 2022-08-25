import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length!==0 && email.length!==0 && message.length!==0){
      emailjs
      .sendForm(
        "service_oxnv54a",
        "template_s1tdv9e",
        formRef.current,
        "Cxy2X2bUu78ZXPGac"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      setName('');
      setSubject('');
      setEmail('');
      setMessage('');
    }
    
  };

  return (
    <div className = "contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor:"#FFF"}} type="text" placeholder="Name*" name="user_name" value={name} onChange={handleNameChange}/>
            <input style={{backgroundColor:"#FFF"}} type="text" placeholder="Subject" name="user_subject" value={subject} onChange={handleSubjectChange}/>
            <input style={{backgroundColor:"#FFF"}} type="text" placeholder="Email*" name="user_email" value={email} onChange={handleEmailChange}/>
            <textarea style={{backgroundColor:"#FFF"}} rows="5" placeholder="Message*" name="message" value={message} onChange={handleMessageChange}/>
            <p>(*mandatory field)</p>
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
    </div>
  )
}
