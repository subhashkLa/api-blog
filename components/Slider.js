export default function Slider() {
  return (
    <div className="banner-section">
      <div className="container-fluid">
        <div className="banner-content">
          <div className="owl-carousel owl-theme main-slider">
            <div className="item">
              <div className="banner-content">
                <h3>Pray For The World</h3>
                <h2>
                  <span>We Pray For Coronavirus</span> pandemic is over
                </h2>
                <h2>and give peace back to people of the world</h2>
              </div>
            </div>
          </div>
          <div className="pray-section">
            <a
              href="#"
              className="praybtn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Click Here to Pray"
            >
              <img alt="#" id="image_two" src="img/nav/104.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
