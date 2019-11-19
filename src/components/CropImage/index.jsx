/*

Crop Image 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";

/** ****************************** Import Constants *************************** */
import { profileImageConstants } from "../../constants/common-constants";

class CropImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      allowZoomOut: false,
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      borderRadius: 0,
      width: 150,
      height: 150,
      enableEdit: false
    };
  }

  componentWillMount = () => {
    const { image, handleHeight, handleWidth } = this.props;
    const { width, height } = this.state;
    const _height = handleHeight || height;
    const _width = handleWidth || width;
    this.setState({
      image,
      height: _height,
      width: _width
    });
  };

  componentWillReceiveProps = () => {
    const { image, handleHeight, handleWidth } = this.props;
    const { width, height } = this.state;
    const _height = handleHeight || height;
    const _width = handleWidth || width;
    this.setState({
      image,
      height: _height,
      width: _width
    });
  };

  _handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
  };

  _handleSave = () => {
    const { handleEditImage } = this.props;
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    this.setState({
      enableEdit: false,
      image: img
    });
    handleEditImage(img);
  };

  _handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  _handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
    this.setState({ allowZoomOut });
  };

  _setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  _handlePositionChange = position => {
    this.setState({ position });
  };

  _handleDrop = acceptedFiles => {
    this.setState({ image: acceptedFiles[0], enableEdit: true });
  };

  // _enableEdit = () => {
  //   const { image, handleHeight, handleWidth } = this.props;
  //   const _height = handleHeight || height;
  //   const _width = handleWidth || width;
  //   this.setState({
  //     enableEdit: true,
  //     height: _height,
  //     width: _width
  //   });
  // };

  render() {
    const { width, height, scale, position, rotate, borderRadius } = this.state;
    const { image, allowZoomOut, enableEdit } = this.state;
    const { handleHeight, handleWidth } = this.props;
    return (
      <div>
        <div className={enableEdit ? `d-none` : null}>
          <img
            src={image}
            alt="data"
            height={handleHeight}
            width={handleWidth}
          />
          <Button
            color="primary"
            variant="contained"
            size="small"
            type="button"
            className="blue-bg text-inherit text-white mt-3"
            onClick={() => this._enableEdit()}
            value="Edit"
          >
            <span className="mb-0">
              {profileImageConstants.profileImage.editBtnText}
            </span>
          </Button>
        </div>
        <div className={!enableEdit ? `d-none` : null}>
          <Dropzone
            onDrop={this._handleDrop}
            multiple={false}
            style={{
              width,
              height,
              marginBottom: "0px"
            }}
          >
            <AvatarEditor
              ref={this._setEditorRef}
              scale={parseFloat(scale)}
              width={width}
              height={height}
              border={1}
              position={position}
              onPositionChange={this._handlePositionChange}
              rotate={parseFloat(rotate)}
              borderRadius={width / (100 / borderRadius)}
              image={image}
              className="editor-canvas"
            />
          </Dropzone>   
        </div>
        <div className={!enableEdit ? `d-none` : null}>
          <div className="row edit-options">
            <span className="col-sm-4 zoom-box">
              {profileImageConstants.profileImage.zoomText}
              <input
                name="scale"
                type="range"
                onChange={this._handleScale}
                min={allowZoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
              />
            </span>
            <span className="col-sm-4 allow-scale">
              <input
                className="mr-2"
                name="allowZoomOut"
                type="checkbox"
                onChange={this._handleAllowZoomOut}
                checked={allowZoomOut}
              />
              <span className="allow-scale-text">
                {profileImageConstants.profileImage.scaleText}
              </span>
            </span>
            <span className="col-sm-4 crop-confirm-btn text-right mb-0">              
              <Button
                color="primary"
                variant="contained"
                size="small"
                type="button"
                className="blue-bg text-inherit text-white mt-3"
                onClick={this._handleSave}
                value="Confirm"
              >
                <span className="mb-0">{profileImageConstants.profileImage.saveBtnText}</span>
              </Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

CropImage.propTypes = {
  image: PropTypes.string.isRequired,
  handleHeight: PropTypes.number.isRequired,
  handleWidth: PropTypes.number.isRequired,
  handleEditImage: PropTypes.func.isRequired
};

export default CropImage;
