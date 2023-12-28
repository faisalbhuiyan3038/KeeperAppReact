import React from 'react';

function Footer(){
    var todaysDate = new Date().getFullYear();

    return <footer className='footer'><p>Copyright &copy; {todaysDate}</p></footer>
}

export default Footer;