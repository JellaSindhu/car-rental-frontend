const Home=()=>{
    return(
        <>
        <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/slider-image-1-1920x600.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Find your car today!</h5>
        <h4>Book the best car for you</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/slider-image-2.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Find the best variant</h5>
        <h4>A lot of variants available</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/slider-image-1-1920x6002.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Best Services</h5>
        <h4>Full Functional Feedback System</h4>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>


  <div className="latest-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Offers</h2>
            <a href="offers.html">view more <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="images/car-5.jpg" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>WEDDING CAR RENTAL SERVICES</h4></a>
              <h6><small>from</small> $120 <small>per weekend</small></h6>
              <h4>Everybody needs to make an amazing section at their wedding. Also, for this, there could be no improved solution than utilizing the Wedding Car Hire Services. It has turned into an intriguing pattern among the present age to benefit these services as the companies enable the wedding couple to show up in style in an luxurious car driven by an personal chauffeur.</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="images/car-6.jpg" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>BRIDAL CAR RENTAL SERVICES </h4></a>
              <h6><small>from</small> $150 <small>per weekend</small></h6>
              <h4>Our bridal cars are kept to the best quality; they are checked, cleaned and arranged the day preceding your wedding. With our bridal car employ service, we will furnish you with a dependable, amicable and professional service. Every one of the vehicles displayed on our site are claimed without help from anyone else. These are the cars that show up on your wedding day.</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="images/car-3.jpg" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>CAR RENTAL SERVICES</h4></a>
              <h6><small>from</small> $150 <small>per weekend</small></h6>
              <h4>when you own something, you need to use it till you achieve the value for its expense. Additionally, you can't stand to purchase another car each other year regardless of whether you captivate for one as you have used a major piece of your investment funds on it. With car rental services, you can drive an alternate model each end of the week where you can choose the car.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Home;