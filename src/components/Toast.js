import styled from "styled-components";

/* 
  CONDITIONAL RENDERING
  (there are several ways to do it)

  if / else if / else statements + different returns
  or setting a component to a variable

  logical operator (statement && component)
  that renders if the condition before is true

  ternary operator ( statement ? componentIfTrue : componentIfFalse)
  allows you to provide render cases for true and false
  **** THIS IS THE PREFERED METHOD IN MOST CASES ****

  you can also use an object to pass in inline CSS variable styles
  (or just pass in as a prop to styled-components)
*/

/* TASKS 
   - create CSS variable dictionary for each case colors
   - render the appropriate icon for success or error
   - only display the message for error
   - change color based on error
   - change text of heading based on error or failure

   THEN modify the code to support an "running" case
   (blue, orange, yellow, gray, whatever)
   There should be a different icon, different foreground and background colors,
   and the title should say "Job Running!"
*/

// create a dictionary mapping all of our variant types to the CSS Variables
// that will override the colors for each type
const STYLES = {
  error: {
    "--background": "rgb(252 165 165)",
    "--foreground": "rgb(127 29 29)"
  },

  success: {
    "--background": "rgb(74 222 128)",
    "--foreground": "rgb(20 83 45)"
  },

  running: {
    "--background": "rgb(252 165 165)",
    "--foreground": "rgb(217 119 6)"
  }
};

export default function Toast({ type, message }) {
  // change the value of the title that is displayed
  // based on the value of the prop "type"
  let title;
  let icon;
  if (type === "error") {
    title = "Job Failed";
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    );
  } else if (type === "success") {
    title = "Job Succeeded";
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  } else {
    title = "Job running";
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

  return (
    // adding css variable declarations to our wrapper component
    // by using the type prop as a key for our dictionary
    <Wrapper style={STYLES[type]}>
      <div className="row">
        {/* now we render our icon variablem which is set to an svg element */}
        {icon}
        <div>
          <Heading>{type}</Heading>
          {/* {type === "error" && <Message>{message}</Message>} */}

          {type === "error" ? (
            <Message>{message}</Message>
          ) : (
            <Message>Woo!</Message>
          )}

          {/* <Message>{type === "error" ? message : "Woo" } </Message>*/}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* --background: rgb(252 165 165);
  --foreground: rgb(127 29 29); */
  background-color: var(--background);
  color: var(--foreground);
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 300px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding: 15px;
  border-bottom: 5px solid var(--foreground);
  text-align: left;
  .row {
    display: flex;
    gap: 20px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

const Heading = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  text-align: left;
`;

const Message = styled.p`
  margin: 0;
  padding-top: 10px;
  font-size: 0.8rem;
  text-align: left;
`;
