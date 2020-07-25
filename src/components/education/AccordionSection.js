import React, { useState, useRef } from "react";
import "../../styles/EduAccordion.scss";

const AccordionSection = (props) => {
  const { url, title, link, desc } = props;
  const details = useRef(null);
  const [unfold, setUnfold] = useState(false);
  const [height, setHeight] = useState("0px");

  const toggleUnfold = () => {
    setUnfold(!unfold);
    setHeight(unfold ? "0px" : `${details.current.scrollHeight}px`);
  };

  // const toggleHeight = () => {
  //   setHeight(unfold ? "0px" : `${details.current.scrollHeight}px`);
  // };

  return (
    <div className="course_section">
      <button className="course_header" onClick={toggleUnfold}>
        <span>
          {title}{" "}
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              Course Project
            </a>
          ) : null}
        </span>
        <img
          className={unfold ? " pic unfold" : "pic"}
          src={require("../../assets/down.png")}
        ></img>
      </button>
      <div ref={details} style={{ maxHeight: `${height}` }} className="details">
        <span>{desc}</span>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Course Page
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default AccordionSection;

//     <div className={unfold ? " edu unfold" : "edu"} onClick={toggleUnfold}>
//       <div className="header">
//         <span>
//           {title}{" "}
//           {url ? (
//             <a href={url} target="_blank" rel="noopener noreferrer">
//               Course Project
//             </a>
//           ) : null}
//         </span>{" "}
//         <img
//           className={unfold ? " pic unfold" : "pic"}
//           src={require("../../assets/down.png")}
//         ></img>
//       </div>

//       <div className="details">
//         <span>{desc}</span>
//         {link ? (
//           <a href={link} target="_blank" rel="noopener noreferrer">
//             Course Page
//           </a>
//         ) : null}
//       </div>
//     </div>
//   );
// };
// export default AccordionSection;

// class AccordionItem extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       active: false,
//     };
//     this.toggle = this.toggle.bind(this);
//   }
//   toggle() {
//     this.setState({
//       active: !this.state.active,
//       className: "active",
//     });
//   }
//   render() {
//     const activeClass = this.state.active ? "active" : "inactive";
//     const question = this.props.details;
//     return (
//       <div className={activeClass} onClick={this.toggle}>
//         <span className="summary">{question.summary}</span>
//         <span className="folding-pannel answer">{question.answer}</span>
//       </div>
//     );
//   }
// }

// class Accordion extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       questions: sampleQuestions,
//     };
//     this.renderQuestion = this.renderQuestion.bind(this);
//   }
//   renderQuestion(key) {
//     return (
//       <AccordionItem
//         key={key}
//         index={key}
//         details={this.state.questions[key]}
//       />
//     );
//   }
//   render() {
//     return (
//       <div>
//         <h1>What is...</h1>
//         <div className="accordion-container">
//           {Object.keys(this.state.questions).map(this.renderQuestion)}{" "}
//         </div>
//       </div>
//     );
//   }
// }
// const sampleQuestions = {
//   question1: { summary: "the capital of Canada?", answer: "Ottawa baby!!" },
//   question2: {
//     summary: "the life span of a bowhead whale?",
//     answer: "Over 200 years!!",
//   },
//   question3: {
//     summary: "the most visited city in the world?",
//     answer: "London, groovy baby!!",
//   },
//   question4: {
//     summary: "the warmest ocean?",
//     answer: "Indian Ocean, it's a hottie!",
//   },
//   question5: {
//     summary: "the one thing ron swanson hates more than lying?",
//     answer: "Skim milk, which is water that's lying about being milk",
//   },
// };
// ReactDOM.render(<Accordion />, document.getElementById("accordion"));
// class AccordionItem extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       active: false,
//     };
//     this.toggle = this.toggle.bind(this);
//   }
//   toggle() {
//     this.setState({
//       active: !this.state.active,
//       className: "active",
//     });
//   }
//   render() {
//     const activeClass = this.state.active ? "active" : "inactive";
//     const question = this.props.details;
//     return (
//       <div className={activeClass} onClick={this.toggle}>
//         <span className="summary">{question.summary}</span>
//         <span className="folding-pannel answer">{question.answer}</span>
//       </div>
//     );
//   }
// }

// class Accordion extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       questions: sampleQuestions,
//     };
//     this.renderQuestion = this.renderQuestion.bind(this);
//   }
//   renderQuestion(key) {
//     return (
//       <AccordionItem
//         key={key}
//         index={key}
//         details={this.state.questions[key]}
//       />
//     );
//   }
//   render() {
//     return (
//       <div>
//         <h1>What is...</h1>
//         <div className="accordion-container">
//           {Object.keys(this.state.questions).map(this.renderQuestion)}{" "}
//         </div>
//       </div>
//     );
//   }
// }
// const sampleQuestions = {
//   question1: { summary: "the capital of Canada?", answer: "Ottawa baby!!" },
//   question2: {
//     summary: "the life span of a bowhead whale?",
//     answer: "Over 200 years!!",
//   },
//   question3: {
//     summary: "the most visited city in the world?",
//     answer: "London, groovy baby!!",
//   },
//   question4: {
//     summary: "the warmest ocean?",
//     answer: "Indian Ocean, it's a hottie!",
//   },
//   question5: {
//     summary: "the one thing ron swanson hates more than lying?",
//     answer: "Skim milk, which is water that's lying about being milk",
//   },
// };
// ReactDOM.render(<Accordion />, document.getElementById("accordion"));
