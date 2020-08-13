import React from "react";
import "../../styles/componentStyles/Modal.scss";
import projectData from "../../data/ProjectData";

function ModalContent(props) {
  const index = props.index;
  const item = projectData[index];

  console.log(index);

  //   const {

  //     bigpic,
  //     description,
  //     features,
  //     tools,
  //     github,
  //     url,
  //     libraries,
  //     id,
  //   } = props.item;

  console.log(item);
  //   console.log(props.item.libraries);

  return (
    <div>
      {/* <h3>{item.title}</h3> */}
      {/* <div className="links">
        {" "}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        )}
      </div> */}
      {/* <p>{item.description}</p> */}
      {/* <section>
        {features && (
          <div>
            <p>Features:</p>
            <ul>
              {features.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
        )}
        {tools && (
          <div>
            <p>Tools:</p>
            <ul>
              {tools.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
        )}
        {libraries && (
          <div>
            <p>Libraries:</p>
            <ul>
              {libraries.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
        )}
      </section> */}
      {/* <img className="bottom-pic" src={bigpic} alt={`${title}`}></img> */}
    </div>
  );
}

export default ModalContent;
