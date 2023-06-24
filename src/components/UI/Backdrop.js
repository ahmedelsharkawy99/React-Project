import classes from "./ErrorModal.module.css";
const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick} />
);

export default Backdrop;
