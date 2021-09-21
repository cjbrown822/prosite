import {FC, Fragment} from "react";

interface LandingPageProps {

}

export const LandingPage: FC<LandingPageProps> = ({children}) => {
    return (
        <Fragment>
            <section className={"section"}>
                <p className={"title is-family-sans-serif"}>Christian J Brown</p>
                <p className={"subtitle"}>Welcome</p>
            </section>
            {children}
        </Fragment>
    )
};