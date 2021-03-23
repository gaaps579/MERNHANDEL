import React, { Component } from "react";

import Dropzone from "react-dropzone";
import axios from "axios";

class MyDropzone extends Component {
  state = {
    files: [],
    isLoading: false,
    recentAudio: null,
    postVerify: null,
  };

  onDrop = (files) => {
    this.setState({
      files: [],
      isLoading: true,
      recentImage: null,
    });
    this.loadImage(files);
  };

  loadImage = (files) => {
    setTimeout(() => {
      this.setState(
        {
          files,
          isLoading: false,
        },
        () => {
          console.log(this.state.files[0].name);
        }
      );
    }, 1000);
  };

  sendImage = () => {
    //console.log(this.props);
    let formData = new FormData();
    formData.append("audio", this.state.files[0]);
    formData.append("song_title", this.state.files[0].name);
    formData.append("id_analisis", this.props.postVerify._id);
    axios
      .post("http://127.0.0.1:9000/api/songs/", formData, {
        headers: {
          accept: "application/json",
          "content-type": "multipart/form-data",
        },
      })
      .then((resp) => {
        if (resp.data) {
          const newpostData = {
            id: this.props.postVerify._id,
            content: this.props.postVerify.content,
            file: `/home/alan/Proyecto/Mern Auth 3/Proyecto/server/src/analisis${this.props.postVerify._id}.mid`,
          };

          const { token } = JSON.parse(localStorage.getItem("user"));

          try {
            axios({
              url: `http://localhost:3001/posts/${this.props.postVerify._id}`,
              method: "put",
              headers: {
                "Content-type": "application/json",
                authorization: token,
              },
              data: newpostData,
            });

            if (res.status === 400) {
              throw new Error("the request was not successful");
            }
          } catch (err) {
            //return logError(err);
            console.log(err.message);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));
    return (
      <div className="upload-container">
        <Dropzone onDrop={this.onDrop} accept="audio/wav">
          {({ isDragActive, getRootProps, getInputProps }) => (
            <section className="container">
              <div {...getRootProps({ className: "dropzone back" })}>
                <input {...getInputProps()} />
                <i className="far fa-file-audio" style={{ fontSize: 100 }}></i>
                <p className="text-muted">
                  {isDragActive
                    ? "Arrastra un audio "
                    : "Arrastra un archivo en formato wav"}
                </p>
              </div>
              <aside>{files}</aside>

              {this.state.files.length > 0 && (
                <button
                  variant="info"
                  size="lg"
                  className="mt-3"
                  onClick={this.sendImage}
                >
                  Procesar audio
                </button>
              )}
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}
export default MyDropzone;
