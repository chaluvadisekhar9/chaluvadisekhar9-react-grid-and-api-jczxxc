import React, { Component } from 'react'

export default class NextLaunches extends Component {
constructor(props){
    super(props);
    this.state = {
        newLanunches : []
    }
}
componentDidMount(){
   fetch("https://api.spacexdata.com/v4/launches/upcoming").then((response)=>response.json())
   .then((newLanunches)=>
   {
    this.setState({newLanunches:newLanunches})
   }
   )
   .catch((err)=>console.log(err))
}
  render() {
    const {newLanunches} = this.state;
    return (
      <div className='nextLaunches'>
        <table className="centerTable">
            <thead>
                <tr>
                    <th>Mission</th>
                    <th>Date(UTC)</th>
                    <th>Launchpad</th>
                    <th>Favorites</th>
                    <th>Share</th>
                </tr>
            </thead>
            <tbody>
                {newLanunches.map((launch,id)=>{
                    return(
                        <tr key={id}>
                        <td>{launch.name}</td>
                        <td>{launch.date_utc}</td>
                        <td>{launch.launchpad}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                    )
                })}
                
            </tbody>

        </table>
      </div>
    )
  }
}
