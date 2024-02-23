import Button from './button'
import './leftComp.css';

function Left() {
    return (
      <div className="Left">
          <div class="text">
          <p class="small-text">404 Page</p>
          <h1>Page not found</h1>
          <p class="para">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>
       </div>
        <div class="buttons">
         <Button 
           value={"Go Back"}
        />
         <Button 
           value={"Take Me Home"} 
           bgColor='#25C4F4'
           bord='none'
           col='white'
         />
        </div>

      </div>
    );
  }
  
  export default Left;