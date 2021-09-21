import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import "../styles/main-layout.scss";

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    const [expanded, setExpanded] = useState(false);
    const onBurgerClick = () => {
        setExpanded(!expanded);
    }
    return (
        <Fragment>
            <div className={"navbar is-dark"}>
                <div className={"navbar-brand"}>
                    <div className={"navbar-item"}>
                        <Link to={"/"} className={"has-text-white-ter"}>Christian J Brown</Link>
                    </div>
                    <a role="button" className={`navbar-burger ${expanded && "is-active"}`}
                       aria-label="menu" aria-expanded="false" onClick={onBurgerClick}
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>
                <div className={`navbar-menu ${expanded && "is-active"}`}>
                    <div className={"navbar-end"}>
                        <Link to={"/resume"} className={"navbar-item"} onClick={onBurgerClick}>Résumé</Link>
                        <Link to={"/about"} className={"navbar-item"} onClick={onBurgerClick}>About</Link>
                        <Link to={"/contact"} className={"navbar-item"} onClick={onBurgerClick}>Contact</Link>
                    </div>
                </div>
            </div>
            <section className={"hero is-fullheight-with-navbar is-primary"}>
                <div className={"hero-body"}>
                    {children}
                </div>
            </section>
        </Fragment>
    )
};