import Login from './Login';
import Register from './Register';
import Navbar from './NAvbar';

function App(){
  return (
    <div>
      <h1>Root Component</h1>
      <Navbar/>
      <Login/>
      <Register/>
    </div>
  );
}
export default App;