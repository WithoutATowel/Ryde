import React from 'react';

const RydeForm = props => {

  return (
    <div>
      <form onSubmit={props.onPostARydeSubmit}>
        <input type="text" placeholder="Ryde Name" ref={props.rydeName} />
        <input type="text" placeholder="Starting Street" ref={props.startStreet} />
        <input type="text" placeholder="Starting City" ref={props.startCity} />
        <input type="text" placeholder="Starting State" ref={props.startState} />
        <input type="text" placeholder="Starting ZipCode" ref={props.startZip} />
        <input type="text" placeholder="Ending Street" ref={props.endStreet} />
        <input type="text" placeholder="Ending City" ref={props.endCity} />
        <input type="text" placeholder="Ending State" ref={props.endState} />
        <input type="text" placeholder="Ending ZipCode" ref={props.endZip} />
        <input type="date" className="datepicker" placeholder="Date To Depart" ref={props.departDate} />
        <input type="text" className="timepicker" placeholder="Time To Depart" ref={props.departTime} />
        <div className="switch">
          <label>
            One Way
            <input type="checkbox" ref={props.twoWay} onChange={props.onTwoWayChange} />
            <span class="lever"></span>
            Two Way
          </label>
        </div>
        <div className={props.twoWayShowHide}>
          <input type="text" className="datepicker" placeholder="Return Date To Depart" ref={props.returnDepartDate} />
          <input type="text" className="timepicker" placeholder="Return Time To Depart" ref={props.returnDepartTime} />
        </div>
        <div className="switch">
          <label>
            One Time Trip
            <input type="checkbox" ref={props.reoccurring} onChange={props.onReoccurringChange} />
            <span class="lever"></span>
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
        <input type="number" placeholder="Trip Cost (per person)" ref={props.cost} />
        <input type="text" placeholder="Trip Cost Breakdown (optional)" ref={props.costBreakdown} />
        <p>
          <input type="checkbox" ref={props.smoking} id="smoking" />
          <label htmlFor="smoking">Smoking</label>
        </p>
        <p>
          <input type="checkbox" ref={props.pets} id="tripPets" />
          <label htmlFor="tripPets">Pets</label>
        </p>
        <input type="text" placeholder="Car Type" ref={props.carType} />
         <div class="input-field col s12">
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
        <label>Materialize Select</label>
        </div>
        <input type="submit" value="Post Your Ryde" />
      </form>
    </div>
  )
}

export default RydeForm;
