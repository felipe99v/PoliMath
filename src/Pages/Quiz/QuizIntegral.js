import React from "react";
import Quiz from "react-quiz-component";
import { quiz } from "../../Preguntas/Integral";

class QuizIntegral extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="Page-header d-flex justify-content-center">
          <Quiz
            quiz={quiz}
            shuffle={true}
            showInstantFeedback={true}
            continueTillCorrect={true}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default QuizIntegral;
