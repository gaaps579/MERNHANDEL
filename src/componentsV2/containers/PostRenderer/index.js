import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Embed from "flat-embed";

import axios from "axios";

import "./index.scss";

import MyDropzone from "../../UI/dropzone";

const PostRenderer = ({ postsList }) => {
  const { publicationId } = useParams();
  let postVerify = undefined;

  postsList.map((post) => {
    //console.log(post);
    if (post._id == publicationId) {
      postVerify = post;
    }
  });

  useEffect(() => {
    const container = document.getElementById("flat-container");
    const embed = new Embed(container);

    postsList.map((post) => {
      //console.log(post);
      if (post._id == publicationId) {
        postVerify = post;
        //console.log("Post Verify:", postVerify);
        if (postVerify.file !== "") {
          try {
            axios
              .get("http://localhost:3001/file/midi", {
                params: { midiPath: postVerify._id },
              })
              .then(function (res) {
                console.log(res);
                embed
                  .loadJSON(res.data.track)
                  .then(function () {
                    console.log("Score loaded");
                  })
                  .catch(function (err) {
                    console.log("Error", err);
                  });
              });
          } catch (err) {
            console.log(err.message);
          }

          /*
          embed
            .loadJSON(midi_data)
            .then(function () {
              console.log("Score loaded");
            })
            .catch(function (err) {
              console.log("Error", err);
            });
            */
        }
      }
    });
  });

  return (
    <>
      <div id="flat-container"></div>
      <div className="upload-container">
        <MyDropzone postVerify={postVerify} />
      </div>
    </>
  );
};

export default PostRenderer;
