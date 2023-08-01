import Carousel from 'react-bootstrap/Carousel';
import Gambar1 from "../images/spensa.jpg";
import Gambar2 from "../images/harpendik23.jpg";
import Gambar3 from "../images/paskibra23.jpg";
import Gambar4 from "../images/mpls2023.jpg";
import Gambar5 from "../images/pramuka2023.jpg";
import "../style/main.css"
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Gambar1}
          alt="First slide"
        />
        <Carousel.Caption className="py-auto" >
          <h1 className="d-flex align-items-center justify-content-center" style={{ color: "white", fontSize: 'clamp(20px, 5vw, 150px)' }}>Selamat Datang di SMPN 1 Atambua</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className="d-flex align-items-center justify-content-center" style={{ color: "white", fontSize: 'clamp(20px, 5vw, 150px)' }}>Selamat Datang di SMPN 1 Atambua</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className="d-flex align-items-center justify-content-center" style={{ color: "white", fontSize: 'clamp(20px, 5vw, 150px)' }}>Selamat Datang di SMPN 1 Atambua</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar4}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className="d-flex align-items-center justify-content-center" style={{ color: "white", fontSize: 'clamp(20px, 5vw, 150px)' }}>Selamat Datang di SMPN 1 Atambua</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar5}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className="d-flex align-items-center justify-content-center" style={{ color: "white", fontSize: 'clamp(35px, 5vw, 150px)' }}>Selamat Datang di SMPN 1 Atambua</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
