import React from 'react';
import DataView from './dataview';
import TextFiledTemp from './textfiledfortemp';
import {toconvert,tocelciouss,tofaherant} from '../helper/converter';


class TemperatureView extends React.Component {
    state = {
        temperature: ' ',
        scale:'c',
        temp:' ',
    };
    ontemperaturechnage = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale: scale,
            // temp:e.target.value,       
        });   
    }
    render() {
        const { temperature,scale} = this.state;
        const calcious= scale==='f'? toconvert(temperature,tocelciouss):
        temperature;
        const faherhat= scale==='c'? toconvert(temperature,tofaherant):
        temperature;

        return (
            <div>
                <TextFiledTemp cheak={'c'} temperature={calcious} 
                texthandler={(e) => this.ontemperaturechnage(e,'c')} />
                <br/>
                <TextFiledTemp cheak={'f'} temperature={faherhat} 
                texthandler={(e) => this.ontemperaturechnage(e,'f')} />
                <br/>
                <br/>
                {/* <input type="text" name="temperature" value={temp}
                onChange={(e) => this.ontemperaturechnage(e,scale)}
                />  */}
                <br/>
                <br/>
                <DataView data={parseFloat(temperature)} />

            </div>
        );
    }
}
export default TemperatureView;



// import React from 'react';
// import DataView from './dataview';
// import TextFiledTemp from './textfiledfortemp';
// import { toconvert, tocelciouss, tofaherant } from '../helper/converter';

// class TemperatureView extends React.Component {
//   state = {
//     temperature: '',
//     scale: 'c',
//     temp: '',
//   };

//   ontemperaturechnage = (e, scale) => {
//     this.setState({
//       temperature: e.target.value,
//       scale: scale,
//     //   temp: e.target.value,
//     });
//   };

//   render() {
//     const { temperature, scale } = this.state;
//     const calcious = scale === 'f' ? toconvert(temperature, tocelciouss) : temperature;
//     const faherhat = scale === 'c' ? toconvert(temperature, tofaherant) : temperature;

//     return (
//       <div>
//         <TextFiledTemp
//           cheak={'c'}
//           temperature={calcious}
//           texthandler={(e) => this.ontemperaturechnage(e, 'c')}
//         />
//         <br />
//         <TextFiledTemp
//           cheak={'f'}
//           temperature={faherhat}
//           texthandler={(e) => this.ontemperaturechnage(e, 'f')}
//         />
//         <br />
//         <br />
//         {/* <input type="text" name="temperature" value={temp}
//                 onChange={(e) => this.ontemperaturechnage(e,scale)}
//                 /> */}
//         <br />
//         <br />
//         <DataView data={parseFloat(temperature)} />
//       </div>
//     );
//   }
// }

// export default TemperatureView;