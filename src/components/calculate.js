import React from "react";

function Calculate(props) {
  return (
    <div className="form">
      <form className="formFields w-25 p-3 " onClick={props.handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Appliance</span>
          </div>
          <input
            name="appliance"
            type="text"
            aria-label="Appliance"
            className="form-control"
            value={props.data.appliance}
            onChange={props.handleChange}
          />
        </div>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Wattage</span>
          </div>

          <input
            name="watts"
            type="number"
            step="5"
            aria-label="Wattage"
            className="form-control"
            value={props.data.watts}
            onChange={props.handleChange}
          />
        </div>

        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Usage(hrs)</span>
          </div>

          <input
            name="timeHours"
            type="number"
            step="1"
            aria-label="Usage"
            className="form-control"
            value={props.data.timeHours}
            onChange={props.handleChange}
          />
          <button
            type="button"
            className="btn btn-secondary btn-info btn-sm"
            data-toggle="tooltip"
            data-placement="left"
            title="Useage is in hours because it's asking for the total amount of time you will 
            use the appliance over the perion of a month. The best was to calculate is to calculate 
            how long you use the appliance for one day then multiply by the number of days in the month."
          >
            ?
          </button>
        </div>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">How many?</span>
          </div>
          <input
            name="noOfAppliances"
            type="number"
            step="1"
            aria-label="Appliance"
            className="form-control"
            min="1"
            value={props.data.noOfAppliances}
            onChange={props.handleChange}
          />
        </div>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Unit Rate</span>
          </div>
          <input
            name="cost"
            type="number"
            step="0.001"
            aria-label="Unit Rate"
            className="form-control"
            min="10"
            value={props.data.cost}
            onChange={props.handleChange}
          />
          <button
            type="button"
            className="btn btn-secondary btn-info btn-sm"
            data-toggle="tooltip"
            data-placement="left"
            title="Your unit rate can be found one of your most recent utility bills."
          >
            ?
          </button>
        </div>

        <br />
        <br />
        <button
          type="button"
          className="btn btn-success btn-lg btn-block rounded-pill"
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg btn-block rounded-pill"
          onClick={props.handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Calculate;
