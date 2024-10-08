import {useEffect, useState} from "react";
import "./CostumePageStyle.css"
import {getQuestionsAnswered, setQuestionsAnswered, setQuizzCompleted} from "../../utils/user";
import LoadingSpinner from "../LoadingSpinner";


const questions = [
    {
        question: "Qui possède l'anneau de pouvoir au début de la trilogie des Seigneurs des anneaux ?",
        choices: ["Gandalf", "Bilbo", "Frodo", "Sauron"]
    },
    {
        question: "Combien de membres composent la communauté de l'anneau ?",
        choices: ["7", "8", "9", "10"]
    },
    {
        question: "Quel est le nom du nain dans la communauté de l'anneau ?",
        choices: ["Gimli", "Legolas", "Merry", "Boromir"]
    },
    {
        question: "Quelles créatures de la forêt Pippin et Merry rencontrent-ils ?",
        choices: ["Orcs", "Uruk-hai", "Rabbits", "Ents"]
    },
    {
        question: "À qui Pippin prête-t-il allégeance ?",
        choices: ["Denethor", "Faramir", "Aragorn", "Gandalf" ]
    }
    ];

export default function QuizzPage({setQuizzEnd}) {
    const [loading, setLoading] = useState(true)
    const [questionAnswered, setQuestionAnswered] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        async function fetchQuestionsAnswered() {
            try {
                const noQuestionsAnswered = await getQuestionsAnswered();
                setQuestionAnswered(noQuestionsAnswered);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchQuestionsAnswered().then();
    }, []);

    const handleNextQuestion = async () => {
        if (questionAnswered < questions.length - 1) {
            setQuestionAnswered(questionAnswered + 1);
            setSelectedAnswer(null)
            await setQuestionsAnswered(questionAnswered + 1);
        } else {
            setQuizzEnd(true)
            setQuizzCompleted(true).then()
        }
    }

    const handleAnswerClick = (index) => {
        setSelectedAnswer(index);
    };

    return (
        <div>
            <LoadingSpinner loading={loading}/>
            <div className="CenterContainer">
                <div className="QuizzHeader">
                    Bonjour chère GelGifois.
                </div>

                <div className="QuizzDialog" style={{"marginTop": 5}}>
                    Avant de te joindre aux rangs de notre armée, réponds à 5 questions
                    qui vont nous aider à connaitre ton futur rôle dans la bataille...
                </div>

                <div className="QuizzDialog" style={{"marginTop": "8%", textAlign: "center"}}>

                    <p>{questions[questionAnswered].question}</p>

                    <div className="ChoicesContainer">
                        {questions[questionAnswered].choices.map((choice, index) => (
                            <button key={index} className={`ChoiceButton ${selectedAnswer === index ? "Active" : ""}`}
                                    onClick={() => handleAnswerClick(index)}>
                                {choice}
                            </button>
                        ))}
                    </div>
                    <div style={{position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)", width: "70%"}}>
                        <button onClick={handleNextQuestion} className="ChangeQuestionButton" disabled={selectedAnswer === null}
                        >
                            {questionAnswered === questions.length - 1 ?
                                "Fin du quiz" :
                                "Question suivante"
                            }
                        </button>
                        <p className="NbQuestionRep">{`${questionAnswered} question répondue sur 5`}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
