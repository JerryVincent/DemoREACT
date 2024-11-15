import './App.css';
import mystyle from '../src/mystyle.module.css'
import Example from './Example'
import Random from './Random'
import Sample from './Sample';
import Registration from './Registration';
function App() {
  //space for writing js code
  const styl={color:'green',fontSize:'70px',backgroundColor:'powderblue'}
  const sub="REACT.JS"
  const user='Max'
  const btnclick =()=>{alert('just an alert')}
  const adduser=(uname)=>{alert(`${uname} added successfully`)}
  const getname=(e)=>{
    console.log(e.target.value);
    
  }
  return (
    //html code
    <div className="App">
        <h1 style={styl}>My first React Experience......</h1>
        <div id='para'>
          This is just the beginning... Wait for the time....
        </div>
        <div className={[mystyle.reactStyle,mystyle.st2].join(" ")}>
          Jesus is with us. Our Subject here is {sub}. My username is {user}.
        </div>
        <div>
          <ul>
            <li><Example subject={sub} age={27}/></li>
            <li><Random user={user}/></li>
            {/* function without argument */}
            <button className='btn btn-info' onClick={btnclick}>Click</button>
            <button className='btn btn-dark' onClick={()=>{adduser('jerry')}}>Click</button>
            <li><Sample/></li>
          </ul>
          <div className='d-flex'>
            <input type="text" className='form-control w-50' placeholder='course' onChange={(e)=>getname(e)}/>
          </div>
        </div>
        <Registration/>
    </div>
    
  );
}

export default App;
