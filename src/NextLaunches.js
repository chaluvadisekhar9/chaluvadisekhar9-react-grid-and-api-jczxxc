import React, { Component } from 'react'

export default class NextLaunches extends Component {
constructor(props){
    super(props);
    this.state = {
        newLanunches : []
    }
}
componentDidMount(){
   const fetchData =  fetch("https://api.spacexdata.com/v4/launches/upcoming").then((response)=>response.json())
   .then((newLanunches)=>
   {
    this.setState({newLanunches:newLanunches})
   }
   )
   .catch((err)=>console.log(err))
}
  render() {
    return (
      <div className='nextLaunches'>
        {this.state.newLanunches.map((item,id)=>{
            <li>{item.id}</li>
        })}
      </div>
    )
  }
}
