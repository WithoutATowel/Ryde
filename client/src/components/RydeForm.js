import React from 'react';
import {Input} from 'react-materialize'


const RydeForm = props => {
  const hideSwitchOnEdit = props.isEditPage ? 'switch hide' : 'switch show'
  const submitPostEdit = props.isEditPage ? 'Edit Your Ryde' : 'Post Your Ryde'
  const showReoccurringOnEdit = props.isEditPage || props.reoccurringShowHide === 'show' ? 'show' : 'hide'

  const isCheckedMon = props.reoccurringMon ? 'checked' : ''
  const oneSeat = true  ? 'active selected' : 'fdf'
  console.log(props.seats)
  console.log(isCheckedMon)
  console.log('this string ', props.reoccurringSun)

  return (
    <div className="gray-container">
      <form onSubmit={props.onPostARydeSubmit}>
        <div className="row">
          <div className="col s12 m5">
            <input type="text" placeholder="Ryde Name" onChange={props.onInputChange} name="rydeName" value={props.rydeName} required />
          </div>
          <div className="col s12 m3">
            <input type="number" placeholder="Trip Cost (per person)" onChange={props.onInputChange} name="cost" value={props.cost} required />
          </div>
          <div className="col s12 m4">
            <input type="text" placeholder="Trip Cost Breakdown (optional)" onChange={props.onInputChange} name="costBreakdown" value={props.costBreakdown} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m5">
            <input type="text" placeholder="Starting Street" onChange={props.onInputChange} name="startStreet" value={props.startStreet} />
          </div>
          <div className="col s12 m3">
            <input type="text" placeholder="Starting City" onChange={props.onInputChange} name="startCity" value={props.startCity} required />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Starting State" onChange={props.onInputChange} name="startState" value={props.startState} required />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Starting ZipCode" onChange={props.onInputChange} name="startZip" value={props.startZip} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m5">
            <input type="text" placeholder="Ending Street" onChange={props.onInputChange} name="endStreet" value={props.endStreet} />
          </div>
          <div className="col s12 m3">
            <input type="text" placeholder="Ending City" onChange={props.onInputChange} name="endCity" value={props.endCity} required />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Ending State" onChange={props.onInputChange} name="endState" value={props.endState} required />
          </div>

          <div className="col s12 m2">
            <input type="text" placeholder="Ending ZipCode" onChange={props.onInputChange} name="endZip" value={props.endZip} />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div className={hideSwitchOnEdit}>
              <label>
                One Way
                <input type="checkbox" onChange={props.onTwoWayChange} />
                <span className="lever"></span>
                Two Way
              </label>
            </div>

            <Input type="date" className="datepicker" options={{format: 'yyyy-mm-dd'}} placeholder="Date To Depart" onChange={props.onInputChange} name="departDate" value={props.departDate} required />
            <Input type="time" className="timepicker" options={{twelvehour: false}} placeholder="Time To Depart" onChange={props.onInputChange} name="departTime" value={props.departTime} required />

            <div className={props.twoWayShowHide}>
              <Input type="date" className="datepicker" options={{format: 'yyyy-mm-dd'}} placeholder="Return Date To Depart" onChange={props.onInputChange} name="returnDepartDate" value={props.returnDepartDate} />
              <Input type="time" className="timepicker" options={{twelvehour: false}} placeholder="Return Time To Depart" onChange={props.onInputChange} name="returnDepartTime" value={props.returnDepartTime} />
            </div>




          </div>
          <div className="col s12 m4">
            <input type="text" placeholder="Car Type" className="car-type-input" name="carType" onChange={props.onInputChange} value={props.carType} required />
            <div className="input-field col s12">
              <Input type='select' label="How Many Seats Available?" name='seats' onChange={props.onInputChange} defaultValue={props.seats} required>
                <option value="" disabled >Choose your option</option>
                <option value="1" className={oneSeat}>1 Seat</option>
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
              </Input>
            </div>
          </div>
          <div className="col s12 m4">
            <p>
              <input type="checkbox" value={props.smoking} onChange={props.onInputChange} name="smoking" id="smoking" />
              <label htmlFor="smoking">Smoking</label>
            </p>
            <p>
              <input type="checkbox" value={props.pets} onChange={props.onInputChange} name="tripPets" id="tripPets" />
              <label htmlFor="tripPets">Pets</label>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 push-m2">
            <div className="extra-option">
              <div className={hideSwitchOnEdit}>
                <label>
                  One Time Trip
                  <input type="checkbox" value={props.reoccurring} onChange={props.onReoccurringChange} />
                  <span className="lever"></span>
                  Reoccurring Trip
                </label>
              </div>

              <div id="sun-sat" className={showReoccurringOnEdit}>
                <p>
                  <input type="checkbox" onChange={props.onInputChange} name="reoccurringSun" defaultChecked={props.reoccurringSun} id="sunday" />
                  <label htmlFor="sunday">Sun</label>
                </p>
                <p>
                  <input type="checkbox" onChange={props.onInputChange} name="reoccurringMon" defaultChecked={props.reoccurringMon} id="monday" />
                  <label htmlFor="monday">Mon</label>
                </p>
                <p>
                  <input type="checkbox" onChange={props.onInputChange} name="reoccurringTues" defaultChecked={props.reoccurringTues} id="tuesday" />
                  <label htmlFor="tuesday">Tues</label>
                </p>
                <p>
                  <input type="checkbox" onChange={props.onInputChange} name="reoccurringWed" defaultChecked={props.reoccurringWed} id="wednesday" />
                  <label htmlFor="wednesday">Wed</label>
                </p>
                <p>
                  <input type="checkbox" onChange={props.onInputChange} name="reoccurringThurs" defaultChecked={props.reoccurringThurs} id="thursday" />
                  <label htmlFor="thursday">Thurs</label>
                </p>
                <p>
                  <input type="checkbox" onChange={props.onInputChange} name="reoccurringFri" defaultChecked={props.reoccurringFri} id="friday" />
                  <label htmlFor="friday">Fri</label>
                </p>
                <p>
                  <input type="checkbox" onChange={props.onInputChange} name="reoccurringSat" value={props.reoccurringSat} id="saturday" />
                  <label htmlFor="saturday">Sat</label>
                </p>
              </div>
            </div>
          </div>
        </div>


        <input type="submit" value={submitPostEdit} className="rydeGreenBtn btn" />
      </form>
    </div>
  )
}

export default RydeForm;
