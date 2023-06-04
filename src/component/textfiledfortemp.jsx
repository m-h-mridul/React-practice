const tempCheak = {
  c: "Celcius",
  f: "Fahrenheit",
};

// eslint-disable-next-line react/prop-types
export default function TextFiledTemp({ cheak, temperature, texthandler }) {
  return (
    <fieldset>
      <legend>Enter the temperature {tempCheak[cheak]}</legend>
      <input
        type="text"
        value={temperature ||""}
        name={cheak}
        onChange={(e) => texthandler(e, cheak)}
      />
    </fieldset>
  );
}

// const tempCheak = {
//     'c': 'Celcius',
//     'f': 'Fahrenheit',
//   };

//   export default function TextFiledTemp({ cheak, temperature, texthandler }) {
//     return (
//       <fieldset>
//         <legend>Enter the temperature {tempCheak[cheak]}</legend>
//         <input
//           type="text"
//           value={temperature||''}
//           name={cheak}
//           onChange={(e) => texthandler(e,cheak)}
//         />
//       </fieldset>
//     );
//   }
