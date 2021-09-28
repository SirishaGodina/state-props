function ClockFunction(props){
    return(
    <div>
      <h1>Hello, Sirisha!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
    );
}
export default ClockFunction;