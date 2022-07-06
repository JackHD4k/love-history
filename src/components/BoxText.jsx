function BoxText(props) {
  return (
    <div className="boxtext">
      <h1 className="box-title">{props.title}</h1>
      <p>{props.date}</p>
    </div>
  );
}

export default BoxText;
