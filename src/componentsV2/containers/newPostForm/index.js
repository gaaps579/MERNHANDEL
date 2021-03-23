import React from "react";
import { useDispatch } from "react-redux";
import "./index.scss";
import Button from "../../UI/button";
import { setPostForm } from "../../../actions";
import { useStateForm } from "../../../hooks";
import { useSavePost } from "./useSavePost";
import posts from "../../../services/posts";

/*
  type parameter:
  is used because this form component
  could be used for creating a new post or updating an existing one
*/

/*
  postData parameter:
  is used when editing, to know the information from the post to update
*/

const NewPostForm = ({
  type,
  postData = { id: "", content: "", file: "" },
}) => {
  // this hook controls the form data
  const { formState, onChange, resetForm } = useStateForm({
    content: postData.content,
    file: postData.file,
  });

  // close form from inside
  const dispatch = useDispatch();
  const handleCloseBtn = () => {
    dispatch(setPostForm(false));
  };

  // hook for save post (new or updated)
  const { savePost } = useSavePost(
    type,
    formState,
    () => {
      resetForm();
      handleCloseBtn();
    },
    () => {},
    postData.id
  );

  return (
    <div className="new-pub-form">
      <textarea
        placeholder="Título del análisis..."
        name="content"
        onChange={onChange}
        value={formState.content}
      />
      <div className="footer-btns">
        <Button
          lbl="Cerrar"
          handleClick={handleCloseBtn}
          style={{ backgroundColor: "grey" }}
        />
        <Button
          lbl="Guardar"
          handleClick={savePost}
          disabled={formState.content.trim() === ""}
        />
      </div>
    </div>
  );
};

export default NewPostForm;
