import { useDispatch } from "react-redux";
import { setPostForm } from "../../../actions";

export const useEditPost = (id, content, file) => {
  //console.log(content);
  const dispatch = useDispatch();

  const handleEditPost = () => {
    const postData = {
      id,
      content,
      file,
    };
    console.log(postData);
    dispatch(setPostForm(true, "edit", postData));
  };

  return { handleEditPost };
};
