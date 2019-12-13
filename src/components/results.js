import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[
                11111,
                222222,
                333333,
                44444,
                5555,
                6666,
                777,
                888,
                999,
                1010,
                111112,
                1212,
                1313,
                1414,
                1515,
                1616,
                1717,
                1818,
            ]
        }
        props.cacheLifecycles.didRecover(this.componentDidRecover)
    }
    componentDidRecover = () => {
      console.log(this.props,9999)
    }
  render() {
    let styleObj = {
        border:"1px solid blue",
        padding:"50px"
    }
    return (
      <div className="ullist">
        <div>
            <h4>Results</h4>
            <div>
                <input type="checkbox"/>
                <input type="text"/>
                <input type="radio"/>
            </div>
            <ul >
                {
                    this.state.list.map((option,index)=>
                    <li key={index} style={styleObj} onClick={(e)=>{
                        console.log(e,option)
                        this.props.history.push(
                            {
                                pathname:"/"+option,
                                query:{
                                    "name":option,
                                    "key":index
                                }
                            }
                            )
                    }}>
                        {option}
                    </li>
                    )
                }
                </ul>
        </div>
        <b onClick={()=>{
            console.log(this.props)
            this.props.history.push("/")
        }}>Back to Home</b>
      </div>
    )
  }
}

export default withRouter(Results);
