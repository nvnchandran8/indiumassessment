import React from 'react';
import { Table } from 'reactstrap';

class DisplaySeason extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  static getDerivedStateFromProps(props,state){
    console.log(props,"check")
   if(props.seasonResponse!==state.seasonResponse){
     if(props.seasonResponse.status===200){
       let thead,tbodyrow=[];
       props.seasonResponse.data.forEach((item)=>{
         let theadIterator = Object.keys(item);
         if(!thead){thead = theadIterator.map((headerItem)=>(<th>{headerItem}</th>))}
         let tcontent=[];
         theadIterator.forEach((cellItem)=>{
           if(cellItem==='image_link'){

               tcontent.push(<td><img src={item[cellItem]}/></td>)

           }
           else if(typeof item[cellItem] === 'string' || typeof item[cellItem] === 'number'){
               tcontent.push(<td>{item[cellItem]}</td>)
         }})
         tbodyrow.push(<tr>{tcontent}</tr>)
       })
     return {
       seasonResponse:props.seasonResponse.data,
       thead:thead,
       tbody:tbodyrow
     }
   }}
  }
  componentDidMount(){
    this.props.sendRequest();
  }
  render(){
    console.log(this.state,"checkRender")
    return (
      <div>{
      this.state.seasonResponse ? (
        <Table>
          <thead>
              {this.state.thead}
          </thead>
          <tbody>{
          this.state.tbody}
          </tbody>
        </Table>
      ):'Loading'}
      </div>
    );
  }
}

export default DisplaySeason;
