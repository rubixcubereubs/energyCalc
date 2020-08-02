import React from "react";

function About() {
  return (
    <div className="fyi">
      <p className="warning">
        WARNING: Tooltips not working on mobile devices so scroll down for
        tooltip info if you require it
      </p>
      <hr className="warning" />
      <h4>About the App</h4>
      <p>
        Ever wondered which appliances in your house use the most electricity?
        This app will allow you to find out. This app can be used to calculate
        the average cost, for electricty, different household appliances use. By
        using a formula the energy companies use to calcuclate energy efficiency
        you can do the same with this calculator.
        <br />
        <br />
        Please bear in mind this is only to be used to get an estimated idea of
        useage as it won't account for Daily Standing Charge (DSC) or VAT.
        <br />
        <br />
      </p>
      <hr className="warning" />
      <p className="warning">
        USAGE: Useage is in hours because it's asking for the total amount of
        time you will use the appliance over the perion of a month. The best way
        to calculate this is to calculate how long you use the appliance for one
        day then multiply by the number of days in the month.
        <br />
        <br />
        UNIT RATE: Your unit rate can be found one of your most recent utility
        bills.
      </p>
    </div>
  );
}

export default About;
