import logo from './logo.svg';
import './App.css';

let name ="fabiha";
function App() {
  return (
    <>
    {/* i can only send one element in return, thus use empty <> to send more components  */}
    {/* if i want to use some variable in my JSX */}
    <h1>hello {name}</h1>  
    <nav>
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
      <li>Contact us </li>
    </nav>
    <div className="container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestiae aliquam repellendus eius nulla. Eligendi ullam similique commodi officiis alias sunt totam. Pariatur sapiente doloribus animi eum accusamus, magnam eligendi velit illo at atque.</p>
    </div>
    
    </>
  );
}

export default App;
