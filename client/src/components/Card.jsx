import React from "react";
import axios from "axios";


class Card extends React.Component  {
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/players")

        .then(res=>{
            console.log(res.data)
          this.setState({
              users:res.data

          })})
        }
        render(){
            return(
                <div className = "Main-cont">
                    {this.state.users.map(user=>(

                  <div className = "DivCont" key={user.id}>
                    <h1>{user.name}</h1>
                    <h2> Searches: {user.searches}</h2>
                    <p>{user.country}</p>
                    <div className ="image"></div>
                  </div>

                    ))
                    }

                </div>
            )

        }
    }
export default Card;
