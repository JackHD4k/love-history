function BoxImg(props) {
  return (
    <div className="boximg">
      <p>Esto es una imagen</p>
      <img className="img-box" src={props.img} alt="" />
    </div>
  );
}

export default BoxImg;
