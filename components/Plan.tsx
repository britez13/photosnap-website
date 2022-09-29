import PlanStyle from "../styles/Plan.styled";
import { Description } from "./sharedstyles";

const Plan = () => {
  return (
    <PlanStyle>
      <div className='first-wrapper'>
        <h3>Monthly</h3>
        <label className='toggle' htmlFor='toggle'>
          <input type='checkbox' id='toggle' />
          <div></div>
        </label>
        <h3>Yearly</h3>
      </div>
      <div className='second-wrapper'>
        <div className="item">
          <div>
            <h2>Basic</h2>
            <p>
              Includes basic usages of our platform. Recommended for new and
              aspiring photographers
            </p>
          </div>
          <div className="price">
            <h2>$19.00</h2>
            <p>per month</p>
          </div>
          <a>Pick Plan</a>
        </div>

        <div className="pro">
          <div>
            <h2>Pro</h2>
            <p>
              More advanced features available. Recommended for photography
              veterans and profesionals.
            </p>
          </div>
          <div className="price">
            <h2>$39.00</h2>
            <p>per month</p>
          </div>
          <a>Pick Plan</a>
        </div>
        <div className="item">
          <div>
            <h2>Business</h2>
            <p>
              Additional features available sach as more detailed metrics.
              Recommended for business owners.
            </p>
          </div>
          <div className="price">
            <h2>$99.00</h2>
            <p>per month</p>
          </div>
          <a>Pick Plan</a>
        </div>
        <div></div>
      </div>
    </PlanStyle>
  );
};

export default Plan;
