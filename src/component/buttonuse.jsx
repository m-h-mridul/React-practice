import React from "react";


class Buttonuse extends React.Component {
    shouldComponentUpdate(nextchnage) {
        const { buttonclick: currentbuttonclick } = this.props;
        const { buttonclick: newbuttonclick } = nextchnage;
        if (currentbuttonclick === newbuttonclick) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        const { buttonclick, peramater } = this.props;
        return (
            <div>
                <button onClick={() => buttonclick(peramater)}>
                    {peramater === 'bn-BD' ?
                        'বাংলা ঘড়ি' : 'Click me Another class'}
                </button>
            </div>
        );
    }

}
export default Buttonuse;