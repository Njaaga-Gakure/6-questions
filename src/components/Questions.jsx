import Question from "./Question"
import { useGlobalContext } from "../context/AppProvider"
const Questions = () => {
    const {questions} = useGlobalContext()
    return (
        <section className="questions-container">
            {questions.map(question => {
                return <Question key={question.id} {...question}/>
            })}
        </section>
    )
}

export default Questions