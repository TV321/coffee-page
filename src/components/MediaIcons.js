import React from 'react';
import '../styles/MediaIcons.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const facebook = <FontAwesomeIcon icon={ faFacebookF } />
const instagram = <FontAwesomeIcon icon={ faInstagram } />
const twitter = <FontAwesomeIcon icon={ faTwitter } />

const MediaIcons = () => {
    return (
        <div className="media-container">
            <div className="media-icon"><a href="https://www.facebook.com" target="_blank">{ facebook }</a></div>
            <div className="media-icon"><a href="https://www.instagram.com" target="_blank">{ instagram }</a></div>
            <div className="media-icon"><a href="https://twitter.com" target="_blank">{ twitter }</a></div>
        </div>
    )
}

export default MediaIcons
