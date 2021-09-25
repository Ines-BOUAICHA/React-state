import React from "react";
class List extends component {
  state ={
    Myappstate: 'My State app',
    FullName: "Ines BOUAICHA",
    Bio: "https://www.linkedin.com/in/in%C3%A8s-bouaicha/",
    imgSrc: photo,
    Profession: "Doctor in Organic Chemistry, JS Web Developper",
    show: "false"};
    
    render () {
  
        return(
             <div>
                 <h1> {this.state.Myappstate}</h1>
                 
              </div> 
          )
    }
}
  
  export default List