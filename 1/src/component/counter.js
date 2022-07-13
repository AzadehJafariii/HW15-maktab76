import {useState , Component} from 'react';


export default class Counter extends Component {
    constructor (){
        super();
            this.state = {
                count:0 ,
            }}
        render(){
            const {count} = this.state;
            return(
                <div className='container'>
                    <div id='minusBtn'> <button className='btn'  onClick={()=> this.setState({count:this.state.count-1})}>
                    -
                    </button></div>     
                    <p className='counter'>Counter:{count}</p>
                    <div id='addBtn'><button className='btn'  onClick={()=> this.setState({count:this.state.count+1})}>
                    +
                    </button></div>
                </div>
            )     
    }
}


// const Counter = ()=>{
//     const [ count , setCount] = useState(0);
//     return (
//         <div className='container'>
//                 <div id='minusBtn'> <button className='btn'  onClick={()=>setCount(count-1)}>
//                      -
//                     </button></div>    
//                     <p className='counter'>Counter:{count}</p>
//                     <div id='addBtn'><button className='btn'  onClick={()=>setCount(count+1)}>
//                     +
//                    </button></div>
//         </div>
//     )
// }
// export default Counter;


