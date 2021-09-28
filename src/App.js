import logo from './logo.svg';
import './App.css';
import ClockFunction from './components/ClockFunction';
import ClockClass from './components/ClockClass';
import ClockUsingState from './components/ClockUsingState';
import ClockUsingLifecycleMethods from './components/ClockUsingLifecycleMethods';
function App() {
  return (
    <div>
   <ClockFunction date={new Date()} />
   <ClockClass date={new Date()}/>
   <ClockUsingState />
   <ClockUsingLifecycleMethods />
   </div>
  );
}

export default App;
