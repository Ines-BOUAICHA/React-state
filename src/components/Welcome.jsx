import React from "react";
class Welcome extends React.Component {
  state = {
    Person: {
      FullName: "Ines BOUAICHA",
      Bio: "Doctor in Organic Chemistry",
      Profession: "Web Developper FullStack JS Student",
      count :0
    },
    show: true
  };
   
  handleClick = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show
    });
  };
  
 
   componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count+ 1,
        };
      });
    }, 100);
    
  }


 render() {
   return ( <div>
     {this.state.show && (
          <section>
            <h1>FullName:{this.state.Person.FullName}</h1>
            <h1>Bio:{this.state.Person.Bio}</h1>
            <h1>Profession:{this.state.Person.Profession}</h1>
            
          </section>
        )}
   <button onClick={this.handleClick}> ClickMe</button>
   <h1>The component has been rendered for {this.state.count} seconds</h1>
   </div>
   );
     }
}
export default Welcome;