import React from 'react';

const RydeForm = props => {

  return (
    <div className="gray-container">
      <form onSubmit={props.onPostARydeSubmit}>
        <div className="row">
          <div className="col s12 m5">
            <input type="text" placeholder="Ryde Name" ref={props.rydeName} />
          </div>
          <div className="col s12 m3">
            <input type="number" placeholder="Trip Cost (per person)" ref={props.cost} />
          </div>
          <div className="col s12 m4">
            <input type="text" placeholder="Trip Cost Breakdown (optional)" ref={props.costBreakdown} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m5">
            <input type="text" placeholder="Starting Street" ref={props.startStreet} />
          </div>
          <div className="col s12 m3">
            <input type="text" placeholder="Starting City" ref={props.startCity} />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Starting State" ref={props.startState} />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Starting ZipCode" ref={props.startZip} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m5">
            <input type="text" placeholder="Ending Street" ref={props.endStreet} />
          </div>
          <div className="col s12 m3">
            <input type="text" placeholder="Ending City" ref={props.endCity} />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Ending State" ref={props.endState} />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Ending ZipCode" ref={props.endZip} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div className="switch">
              <label>
                One Way
                <input type="checkbox" ref={props.twoWay} onChange={props.onTwoWayChange} />
                <span className="lever"></span>
                Two Way
              </label>
            </div>

            <input type="date" className="datepicker" placeholder="Date To Depart" ref={props.departDate} />
            <input type="text" className="timepicker" placeholder="Time To Depart" ref={props.departTime} />

            <div className={props.twoWayShowHide}>
              <input type="text" className="datepicker" placeholder="Return Date To Depart" ref={props.returnDepartDate} />
              <input type="text" className="timepicker" placeholder="Return Time To Depart" ref={props.returnDepartTime} />
            </div>




          </div>
          <div className="col s12 m4">
            <input type="text" placeholder="Car Type" className="car-type-input" ref={props.carType} />
            <div className="input-field col s12">
              <select ref={props.seats}>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">1 Seat</option>
                <option value="2">2 Seats</option>
                <option value="3">3 Seats</option>
                <option value="4">4 Seats</option>
                <option value="5">5 Seats</option>
                <option value="6">6 Seats</option>
                <option value="7">7 Seats</option>
                <option value="8">8 Seats</option>
                <option value="9">9 Seats</option>
                <option value="10">10 Seats</option>
                <option value="11">11 Seats</option>
                <option value="12">12 Seats</option>
              </select>
              <label>How Many Seats Available?</label>
            </div>
          </div>
          <div className="col s12 m4">
            <p>
              <input type="checkbox" ref={props.smoking} id="smoking" />
              <label htmlFor="smoking">Smoking</label>
            </p>
            <p>
              <input type="checkbox" ref={props.pets} id="tripPets" />
              <label htmlFor="tripPets">Pets</label>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 push-m2">
            <div className="extra-option">
              <div className="switch">
                <label>
                  One Time Trip
                  <input type="checkbox" ref={props.reoccurring} onChange={props.onReoccurringChange} />
                  <span className="lever"></span>
                  Reoccurring Trip
                </label>
              </div>

              <div id="sun-sat" className={props.reoccurringShowHide}>
                <p>
                  <input type="checkbox" ref={props.reoccurringSun} id="sunday" />
                  <label htmlFor="sunday">Sun</label>
                </p>
                <p>
                  <input type="checkbox" ref={props.reoccurringMon} id="monday" />
                  <label htmlFor="monday">Mon</label>
                </p>
                <p>
                  <input type="checkbox" ref={props.reoccurringTues} id="tuesday" />
                  <label htmlFor="tuesday">Tues</label>
                </p>
                <p>
                  <input type="checkbox" ref={props.reoccurringWed} id="wednesday" />
                  <label htmlFor="wednesday">Wed</label>
                </p>
                <p>
                  <input type="checkbox" ref={props.reoccurringThurs} id="thursday" />
                  <label htmlFor="thursday">Thurs</label>
                </p>
                <p>
                  <input type="checkbox" ref={props.reoccurringFri} id="friday" />
                  <label htmlFor="friday">Fri</label>
                </p>
                <p>
                  <input type="checkbox" ref={props.reoccurringSat} id="saturday" />
                  <label htmlFor="saturday">Sat</label>
                </p>
              </div>
            </div>
          </div>
        </div>


        <input type="submit" value="Post Your Ryde" className="rydeBtn btn" />
      </form>
    </div>
  )
}

export default RydeForm;
