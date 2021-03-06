const React = require('react');
require('./toTop.css');

function toTop () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
* When the user scrolls 20px down, display scroll to top icon.
* When clicked, send the user to the top.
*/

export default function Scroll () {

    window.onscroll = () => {
        scroll();
    };

    scroll = () => {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.to-top').style.display = 'block';
        } else {
            document.querySelector('.to-top').style.display = 'none';
        }
    }

    return (
        <div className="to-top" onClick={toTop}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </div>
    )
}
