import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {useHistory} from 'react-router-dom'

import CrownIcon from '../../assets/svg/crown.svg'
import GlobalIcon from '../../assets/svg/global.svg'
import { supportedLanguages } from '../../data/languages';
import { getTranslatedText } from '../../logic/languages/languageOptions';
import { languageData } from '../../slices/languages/languageSlice';
import './Header.scss'

function Header({categoryRef, admRef, homeTop}){
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)
    const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false)
    const languageInfo = useSelector(languageData);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        window.addEventListener('resize', function(e){
            setInnerWidth(e.target.innerWidth)
        })
    }, [])


    function languageExpandHandler(){
        setIsLanguagesExpanded(!isLanguagesExpanded)
    }

    function handleHamburger() {
        setIsHamburgerActive(!isHamburgerActive);
    }

    const scrollView = (ref) => {
        if(history.location.pathname !== "/"){
            history.push("/");
        }

        if(ref && ref.current){
            ref.current.scrollIntoView({
                behavior: "smooth",
                offset: "1000px",
                duration: 3000,
                smooth:true,
                block: "center"
            });
        }
    }


    return(
        <div className="header" id="header">
            <svg onClick={() => {scrollView(homeTop)}} className='header__logo' alt="Web Logo" xmlns="http://www.w3.org/2000/svg" width="282.734" height="121.223" viewBox="0 0 282.734 121.223">
            <g id="Logo" transform="translate(4.725 3.5)">
                <g id="Group_2" data-name="Group 2" transform="translate(0 13.723)">
                <text id="Youth_Deal" data-name="Youth Deal" transform="translate(0 67)" fill="#3e66ff" fontSize="41" fontFamily="Bungee-Regular, Bungee"><tspan x="0" y="0" fill="#000">Youth </tspan><tspan y="0" fill="#3e66ff">Deal</tspan></text>
                </g>
                <path id="Path_4" data-name="Path 4" d="M0,4.593S52.391-22.854,120.791-22.854,273.6,4.593,273.6,4.593" transform="translate(0 22.854)" fill="none" stroke="#01f" strokeLinecap="round" strokeWidth="7" strokeDasharray="25"/>
            </g>
            </svg>
                
            <div onClick={handleHamburger} className={`header__hamburger ${isHamburgerActive ? 'active' : ''}`}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <div className={`header__links ${isHamburgerActive ? 'active' : ''}`}>
                <p className='header__links__link' onClick={() => {history.push("/home");scrollView(homeTop)}}>{languageInfo.text.header.homeLink}</p>
                <p className='header__links__link' href="#" onClick={() => scrollView(categoryRef)}>{languageInfo.text.header.categoryLink}</p>
                <p onClick={() => scrollView(admRef)} className='header__links__link' href="#">{languageInfo.text.header.admLink}</p>
                <p className='header__links__link' id="premium" onClick={() => {history.push("/premium")}}><img src={CrownIcon} alt="Crown Img" id="crown"></img>{languageInfo.text.header.premiumLink}</p>

                {innerWidth <= 1200 &&
                    <div id="header__right">
                        <div className="header__auth-options">
                            <button onClick={() => { history.push("/login"); }} className='header__auth-options__login'>{languageInfo.text.header.loginLink}</button>
                            <button onClick={() => { history.push("/register"); }} className='header__auth-options__register'>{languageInfo.text.header.registerLink}</button>
                        </div>

                        <div className="header__languages">
                            <div className={`header__languages__options ${isLanguagesExpanded ? 'active' : ''}`}>
                                {supportedLanguages.map((lang, i) => (
                                    <ul className="header__languages__options__option" key={i}>
                                        {/* <li onClick={() => getTranslatedText(dispatch, lang.lng)}>{lang.short}</li> */}
                                        <li onClick={() => getTranslatedText(dispatch, lang.lng)}><img src={lang.flag} alt={`${lang.lng} flag`} /> {lang.short}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>}
            </div>
            {innerWidth > 1200 &&
            <div id="header__right">
                <div className="header__auth-options">
                    <button onClick={() => {history.push("/register")}} className='header__auth-options__register'>{languageInfo.text.header.registerLink}</button>
                    <button onClick={() => {history.push("/login")}} className='header__auth-options__login'>{languageInfo.text.header.loginLink}</button>
                </div>

                <div className="header__languages">
                    <div className={`header__languages__options ${isLanguagesExpanded ? 'active' : ''}`}>
                        {supportedLanguages.map((lang, i) => (
                            <ul className="header__languages__options__option" key={i}>
                                {/* <li onClick={() => getTranslatedText(dispatch, lang.lng)}>{lang.short}</li> */}
                                <li onClick={() => getTranslatedText(dispatch, lang.lng)}><img src={lang.flag} alt={`${lang.lng} flag`} /> {lang.short}</li>
                            </ul>
                        ))}
                    </div>
                    <div className="header__languages__language-expander" onClick={languageExpandHandler}>
                        <img src={GlobalIcon} alt="lang" />
                        <i className={`fa fa-caret-down ${isLanguagesExpanded ? 'active' : ''}`} aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default Header;
