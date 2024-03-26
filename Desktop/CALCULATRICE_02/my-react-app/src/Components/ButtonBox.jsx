import "../style/ButtonBox.css";
import Button from "./Button";
// import Screen from "./Screen";

 const btnValues =[
        {id:1, title: "AC"},
        {id:2, title: "DE"},
        {id:3, title: "."},  
        {id:4, title: "/"}, 
        {id:5, title: "7"}, 
        {id:6, title: "8"}, 
        {id:7, title: "9"}, 
        {id:8, title: "X"}, 
        {id:9, title: "4"}, 
        {id:10, title: "5"}, 
        {id:11, title: "6"},
        {id:12, title: "-"}, 
        {id:13, title: "2"}, 
        {id:14, title: "1"},
        {id:15, title: "3"},
        {id:16, title: "00"},  
        {id:18, title: "0"}, 
        {id:19, title: "="}, 
    ]

const ButtonBox = () => {
  return <div className="buttonBox"> 
  {/* <Screen/> */}
{
  btnValues.map(item => {
    return <Button key= {item.id} title = {item.title}  />
  })
}
 </div>;
};

export default ButtonBox;