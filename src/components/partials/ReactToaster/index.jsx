import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToaster = () => {
  return (
    <div>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnHover
        autoClose={2000}
        position="bottom-center"
        style={{ zIndex: 9999999 }}
      />
    </div>
  );
};

export default ReactToaster;
