import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

function Footer() {
  return (
    <>
      <div className=" footer_outer_container">
        <div className=" footer_inner_container">
          <div className="footer_icons">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className=" footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service_code">
            <p>Service Code</p>
          </div>
          <div className="copy-write">I&copy; 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
