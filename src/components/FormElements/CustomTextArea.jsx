/*
   CustomTextArea

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const EditorModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    matchVisual: false
  }
};

const EditorFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

class CustomTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hanldeChange = description => {
    const { handleTextChange } = this.props;
    if (description) {
      handleTextChange(description);
    }
  };

  render() {
    const { description } = this.props;
    return (
      <ReactQuill
        value={description}
        onChange={e => this.hanldeChange(e)}
        modules={EditorModules}
        formats={EditorFormats}
      />
    );
  }
}

CustomTextArea.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired
};

export default CustomTextArea;
