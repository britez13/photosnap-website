import PlanStyle from "../styles/Plan.styled";

const Plan = () => {
  return (
    <PlanStyle>
      <div className="first-wrapper">
        <h3>Monthly</h3>
        <label className='toggle' htmlFor='toggle'>
          <input type='checkbox' id='toggle' />
          <div></div>
        </label>
        <h3>Yearly</h3>
      </div>
    </PlanStyle>
  );
};

export default Plan;
