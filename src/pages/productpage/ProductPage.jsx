import "./ProductPage.scss"
import Navbar from '../../components/homePage/Navbar'
import footer from "../../assets/img/footer.JPG"
import Product from "../../components/product/Product"
import Comment from "../../components/product/Comment"
import NewItemExpect from "../../components/homePage/NewItemExpect"


const Hompage = () => {
  let url = "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"

  return (
    <div className='productpage'>

        <div className="nav-comp">
            <div className="load"><Navbar/></div>
        </div>

        <div className="productpage-detail">
          <div className="productpage-detail-title">I Dream in Another Language</div>
          <div className="productpage-detail-container">
            <div className="component-container">
              <Product/>
            </div>
            <div className="video">
              <video width="530px" height="310px" controls>
                <source src={url} type="video/mp4"/>
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
        </div>

        <div className="productpage-discover">
          <div className="menu-item">
            <div className="menu-item-top">Discover</div>
            <div className="menu-item-down">
              <span>COMMENTS</span>
              <span>REVIEWS</span>
              <span>PHOTOS</span>
            </div>
          </div>
          <div className="productpage-container">
            <div className="item-container">
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
            </div>
            <div className="also-like">
              <div className="also-like-item">
                <NewItemExpect/>
              </div>
              <div className="also-like-item">
                <NewItemExpect/>
              </div>
              <div className="also-like-item">
                <NewItemExpect/>
              </div>
              <div className="also-like-item">
                <NewItemExpect/>
              </div>
              <div className="also-like-item">
                <NewItemExpect/>
              </div>
              <div className="also-like-item">
                <NewItemExpect/>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-img">
          <img src={footer} alt="footer-img" />
        </div>

    </div>
  )
}

export default Hompage
