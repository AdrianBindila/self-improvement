function WaterGlass(props) {
  return (
    <>
      <div className="row">
        {[...Array(8)].map((e, i) => {
          if (i < props.no)
            return <img key={i} src="assets/full-glass.svg" className="col-md-3 p-lg-5" />;
          else
            return <img key={i}
              src="assets/empty-glass.svg"
              className="col-md-3 p-lg-5"
            />;
        })}
      </div>
    </>
  );
}
export default WaterGlass;
