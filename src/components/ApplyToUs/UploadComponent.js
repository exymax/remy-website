import React from 'react';
import PropTypes from 'prop-types';

import clip from '~image/clip.svg';
import loader from '~image/loader.svg';
import fileIcon from '~image/file.svg';
import close from '~image/close.svg';

class UploadComponent extends React.PureComponent {
  static propTypes = {
    file: PropTypes.string.isRequired,
    onChangeFile: PropTypes.func.isRequired,
    onCancelFile: PropTypes.func.isRequired,
  };

  handleCancelFile = (e) => {
    const { onCancelFile} = this.props;

    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    onCancelFile();
  };

  switchLabel = () => {
    const { file } = this.props;

    if (file.length) {
      return (
        <div className="is-uploaded">
          <img src={fileIcon} className="file" />
          <span className="file-name">{file}</span>
          <img
            src={close}
            className="file-cancel"
            onClick={this.handleCancelFile}
          />
        </div>
      );
    } else {
      return (
        <div>
          <img src={clip} className="clip" />
          <span className="attach">Attach your CV</span>
          Max file size – 3Mb
        </div>
      );
    }
  };

  render() {
    const {
      file,
      onChangeFile,
      onCancelFile,
    } = this.props;
    const label = this.switchLabel();
console.log(file);
    return (
      <div className="file-upload">
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          value={file}
          onChange={onChangeFile}
        />
        <label for="file">
          {label}
        </label>
      </div>
    );
  }
}

export default UploadComponent;
