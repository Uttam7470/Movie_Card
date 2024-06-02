import "./App.css";
import data from "./Data";

function App() {
  return (

      <div id="main">
        <h1>Movie Cards</h1>
        {data.map((movie, index) => {
          return (
            <div id="card" key={index}>
  
              <div id="image">
                <img src={movie.image}></img>
              </div>
              <div id="content">
                <h2>{movie.title}</h2>
                <p>
                  {movie.year} , <b>{movie.director}</b>
                </p>
                {/* <p>, </p> */}
                <div className="flex">
                  <p className="para">{movie.duration} </p>
                  <p>, {movie.type}</p>
                </div>

                <p>{movie.summary}</p>
              </div>
             
            </div>
            
          );
          
        })}
      </div>

  );
}

export default App;
