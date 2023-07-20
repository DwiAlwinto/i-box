import Hero from "./Hero";
import Cardproduk from "./Cardproduk";
import Cardibox from "./Cardibox";
import Ipad from "./Ipad"

import produk1 from "./../Asset/01.png";
// import produk2 from "./../Asset/02.png";
import produk3 from "./../Asset/03.png";
import produk4 from "./../Asset/04.png";

import produkibox from "./../Asset/sec2.png"
import produkibox1 from "./../Asset/Phone/ipad4.webp"

import iPad1 from "./../Asset/sec4.png"
import iPad2 from "./../Asset/sec3.png"

import TentangiBox from "./TentangiBox";
import Tentang from "./../Asset/Phone/Banner_iBox_Tentang_Kami_1396x298px_20_Juli_2020_.jpg"



const Maincontent = () => {
  return (
    <div>
          
      <Hero />
        <div div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Store i-Box</h1>
          </div>
        </div>
         
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-12">
              <Cardproduk
                image={produk1}
                produk="iPhone 13 Pro"
                deskripsi="Cara istimewa untuk berinteraksi dengan iPhone Anda. Fitur keselamatan
                            penting yang dirancang untuk menyelamatkan nyawa. Kamera utama 48 MP yang inovatif.
                            Dan layar hingga 2x lebih terang di bawah sinar matahari.◊ Semua didukung oleh
                            chip ponsel pintar paling maksimal."
              />
            </div>

            <div className="col-lg-4 col-12">
              <Cardproduk
                image={produk3}
                produk="iPhone 14"
                deskripsi="Inilah iPhone 14 dan iPhone 14 Plus yang super besar. Dengan Deteksi Tabrakan.
                            Kekuatan baterai lebih lama dari sebelumnya. Dan foto berpencahayaan rendah
                            yang lebih spektakuler. Semua dalam lima warna yang memukau."
              />
            </div>

            <div className="col-lg-4 col-12">
              <Cardproduk
                image={produk4}
                produk="iPhone 14 Pro"
                deskripsi="Layar Super Retina XDR yang mulus dan responsif dengan ProMotion. Pembaruan besar
                            pada sistem kamera untuk berbagai kemungkinan baru yang dramatis. Istimewa
                            kokohnya. Chip A15 Bionic ultra cepat. Dan terobosan kekuatan baterai. Ayo jadi Pro."
              />
            </div>
          </div>

          <div className="row">
          <div className="col-12 text-center my-5 ">
            <h1>iBox adalah Apple Premium </h1>
          </div>
          <div className="col-12  my-3">
                <Cardibox title="iPad Pro Generasi 6" image={produkibox}/>
          </div>
          <div className="col-12  my-3">
                <Cardibox title="iPad Pro Generasi 6" image={produkibox1}/>
          </div>
       

        </div>

        <div className="row">
            <div className="col-12 text-center">
                <h1>iPad New</h1>
            </div>

            <div className="col-lg-6 my-3">
                <Ipad image={iPad1}/>
            </div>
            
            <div className="col-lg-6 my-3">
                <Ipad image={iPad2}/>
            </div>
            
        </div>

      </div>
      <div className="row">
            <div className="">
                <TentangiBox image={Tentang}/>
            </div>
        </div>  
    </div>
  );
};

export default Maincontent;
