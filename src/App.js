import React from "react";
import { useRef } from "react";
import {Editor} from "@tinymce/tinymce-react";
import "./App.scss"
import "./MainStyles.scss"
import styles from "./EditorStyle.scss";

const App = () => {
  const editorRef = useRef();

  function handleOnClick() {
    let content = editorRef.current.getContent()
    console.log(styles);
    document.getElementById("content").innerHTML = content;
  }
  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        apiKey="q8b4t0w2rxnpz5btefnt8hxe5q2s03gywjbhgpuwemaxkqkb"
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