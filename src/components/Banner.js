import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/Banner.css';

const Banner = () => {
  return (
  <section id="cta" className="cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Baca Berita Terbaru</h3>
            <p> Kembali ke Menu beranda untuk membaca dan melihat berita terbaru seputar asia tenggara!</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Home</a>
          </div>
        </div>
      </div>
    </section>

);
};

export default Banner;
