function ToDo(props) {
  return (
    <div className={`todo ${props.status}`} onClick={props.onClick}>
      <p>{props.title}</p>
      <i className="fas fa-check"></i>
    </div>
  );
}

export default ToDo;