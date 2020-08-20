import React from 'react';
import Navbar2 from './Navbar2' //<Navbar />
import Slider from './Slider'; // <Slider />

function App() {
  console.log(process.env.PORT);
  return (
    <div className="App">
      <Navbar2 />
      
    </div>
  );
}

export default App;


// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });