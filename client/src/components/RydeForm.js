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
        <input type="text" placeholder="Date To Depart" ref={props.departDate} />
        <input type="text" placeholder="Time To Depart" ref={props.departTime} />
        <input type="submit" value="Post Your Ryde" />
      </form>
    </div>
  )
}

export default RydeForm;
