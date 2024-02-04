function Gif(props) {
    
  return (
    <div className="gif-show">
      <img src={props.gif.image_url} alt="" />
    </div>
  );
}

export default Gif;
