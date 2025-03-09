import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const markdownupdate = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.
\`\`\`js
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  const multiLineCode = "This is a valid return value!";
  if (firstLine) {
    return multiLineCode;
  }
}
\`\`\`



You can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and  
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
|-------------|-------------|----------------|
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  const [markdown, setMarkdown] = useState(markdownupdate);

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center text-light m-4">MARKDOWN PREVIEWER</h1>
      <div className="border border-2 w-50 d-flex bg-dark flex-column  mx-auto p-3 rounded"
      >
        <h3 className="text-light border rounded p-2">Editor</h3>
        <textarea
            value={markdown}
            id="editor"
            className="p-2"
            onChange={(e) => setMarkdown(e.target.value)}
            rows="15"
          />
      </div>

     <div className="border border-2 pre d-flex bg-dark flex-column my-4 p-3 rounded">
      <h3 className="text-light border rounded p-2">Preview</h3>
        <div id="preview" 
        className="bg-light p-3 rounded my-2 d-flex flex-column  border"
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>  
    </div> 
      
    </div>
  );
}

export default App;
