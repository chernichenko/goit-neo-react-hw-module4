import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <ClipLoader size={48} color="#3f51b5" />
  </div>
);

export default Loader;