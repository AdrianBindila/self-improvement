function WaterGlass(props) {
  return (
    <>
      <div className="row">
        {[...Array(8)].map((e, i) => {
          if (i < props.no)
            return <img src="full-glass.svg" className="col-md-3 p-lg-5" />;
          else
            return <img
              src="empty-glass.svg"
              className="col-md-3 p-lg-5"
            />;
        })}
      </div>
    </>
  );
}
export default WaterGlass;
