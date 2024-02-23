import './button.css';

function Button({value,bgColor,bord,col}) {
    return (
      <button style={{backgroundColor:bgColor,border:bord,color:col}}>{value}</button>
    );
  }
  
  export default Button;