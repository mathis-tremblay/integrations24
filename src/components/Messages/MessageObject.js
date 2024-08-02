import "./MessagesPageStyle.css"


export default function MessageObject({message}) {
    return (
        <div className="message-wrapper">
            {message.answer ?
                <p className="answer">
                    {message.text}
                </p>
                :
                <p className="message">
                    {message.text}
                </p>
            }
        </div>
    );
}