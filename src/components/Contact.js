import React from 'react'
import ContactStyle from './ContactStyle.css'
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    return (
        <div className="contactScreen" id="contact">
        <div className="contact_body">
        <div className="contact_form">
        <div className="form_template">
         <span>&lt;html&gt;</span><br />
         <span>&lt;body&gt;</span><br />
         <span>&lt;h1&gt;</span><br />
         <h1 className="contact_title">contact</h1>
         <span>&lt;h1&#47;&gt;</span><br />
         <span>&lt;p&gt;</span><br />
         <p>I'm intersted in freelance opportunities <br /> However, if you have other request or question, don't hesitate to use the form.</p>
         <span>&lt;p&#47;&gt;</span><br />
         <span>&lt;Section&gt;</span><br />
         <div className="social_platform">
         <span>
         <div className="social_icons-m">
         <MailIcon style={{ fontSize: 25 }} />
         </div>
         </span>
         <div className="social_icons-i">
         <InstagramIcon style={{ fontSize: 25 }} />
         </div>
         <div className="social_icons-t">
         <TwitterIcon style={{ fontSize: 25 }} />
         </div>
         <div className="social_icons-g">
         <GitHubIcon style={{ fontSize: 25 }}/>
         </div>
         <div className="social_icons-l">
         <LinkedInIcon style={{ fontSize: 25 }}/>
         </div>
         </div>
         <span>&lt;Section&#47;&gt;</span><br />
         <span>&lt;body&#47;&gt;</span><br />
         <span>&lt;html&#47;&gt;</span>
        </div>
        <div className="footer">
        Disigned & Developed by|<span className="bulder">Bharath kbpr</span>&copy;2021
        </div>
        
        </div>
      </div>
        </div>
    )
}

export default Contact
