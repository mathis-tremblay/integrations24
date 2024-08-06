import "./MessagesPageStyle.css"


export default function MessageObject({message, showDate}) {
    return (
        <div>
            {!showDate ? null :
                <p className="date">
                        {message.date.toDate().toLocaleDateString()}
                </p>
            }
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