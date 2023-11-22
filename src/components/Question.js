import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

export default function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];

  return (
    <div className="question">
      <h4>{question.question}</h4>
      <Options
        dispatch={dispatch}
        question={question}
        answer={answer}
      />
    </div>
  );
}
