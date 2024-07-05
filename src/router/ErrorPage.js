import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oups!</h1>
            <p>Désolé, une erreur inattendu est survenue.</p>
            <p>
                <i>{error?.statusText}</i>
            </p>
        </div>
    );
}