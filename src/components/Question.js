import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
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
