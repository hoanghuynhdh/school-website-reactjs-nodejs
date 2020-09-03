import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="container">
          <div className="row">
            <div className="col-4">
                <h3>Liên Hệ</h3>
                <p>Địa chỉ: 12: Trịnh Định Thảo, Hòa Thạnh, Tân Phú, TP.HCM</p>
                <p>Phone: (028) 39734983 - (028) 38605003</p>
                <p>Hotline: 0938861080</p>
            </div>
            <div className="col-4">
                <div className="fb-page" data-href="https://www.facebook.com/itc.edu.vn/" data-tabs="timeline" data-width={400} data-height={300} data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/itc.edu.vn/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/itc.edu.vn/">Cao Đẳng Công Nghệ Thông Tin - TP.HCM</a></blockquote></div>
            </div>
            <div className="col-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.477507676078!2d106.63214551535636!3d10.774692562170667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea144839ef1%3A0x798819bdcd0522b0!2sInformation%20Technology%20College%20HoChiMinh%20City!5e0!3m2!1sen!2s!4v1597067948638!5m2!1sen!2s" width={400} height={300} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" title="itc" tabIndex={0} />
            </div>              
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
