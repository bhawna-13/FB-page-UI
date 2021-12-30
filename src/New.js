import { Component } from "react";
import './App.css';
import styles from './fb.css';
class New extends Component{

render()
{
   return (<div><body />
   <div className="fb-header"> </div>
   <div className="head">
       <div><h3>facebook</h3></div>
       <div id="form1" class="fb-header">Email or Phone<br />
       <input placeholder="Email" type="mail" /><br /><div id="form2" className="fb-header" >Password<br /><input placeholder="Password" type="password" /><br />Forgot Password?</div></div></div>
   <input type="submit" class="sub" />
   <div className="fb-body" />
       <div id="in" className="fb-body">Create an account</div>
       <div id="img" className="fb-body"><img src="https://sociable.co/wp-content/uploads/2011/12/Facebook-world.jpg" alt
           /></div>
       <div id="form3" className="fb-body">
           <input placeholder="FirstName"type="text" id="tf" />
           <input placeholder="LastName" type="text" id="tf" /><br/>
           <input placeholder="Email" type="text" id="mb" /><br/>
           <input placeholder="Re-Enter Email" type="text" id="mb" /><br/>
           <input placeholder="Password" type="password" id="mb" /><br/>
           <input type="date" id="tf" /><br />
           <input type="radio" id="rb" />Male
           <input type="radio" id="rb" />Female<br />
           <input type="submit" className="But" />
           <br />
       </div>
   <div />
<body /></div >
);

}
}

export default New;