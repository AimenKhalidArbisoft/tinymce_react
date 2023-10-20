import React from "react";
import { useRef } from "react";
import {Editor} from "@tinymce/tinymce-react";
import styles from "./EditorStyle.scss";

const App = () => {
  const editorRef = useRef();

  function handleOnClick() {
    let content = editorRef.current.getContent()
    console.log(content);
    document.getElementById("content").innerHTML = content;
  }

  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current=editor}
        textareaName="content"
        initialValue="Write content"
        init={{
          content_css: styles,
        }}
      />
      <button
        type="button"
        onClick={handleOnClick}>
        Get content
      </button>
      <p id="content"></p>
     </> 
  );
}

export default App;