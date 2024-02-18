import React from 'react';
import cursor from './assets/images/ff8-cursor.png'
const CommandMenu = (props) => {
    let count = props.count
    const cursorPosition = () => {
        if(count===0){
            return(
                <table>
                        <tbody>
                            <tr>
                                <td><img src={cursor} alt="cursor" width='100vh'></img></td>
                                <td>Attack</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Magic</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Draw</td>
                            </tr><tr>
                                <td></td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                </table>
            )
        }else if(count===1){
            return(
                <table>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Attack</td>
                            </tr>
                            <tr>
                                <td><img src={cursor} alt="cursor" width='100vh'></img></td>
                                <td>Magic</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Draw</td>
                            </tr><tr>
                                <td></td>
                                <td>Item</td>
                            </tr>
                            </tbody>
                        </table>
            )
        }else if(count===2){
            return(
                <table>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Attack</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Magic</td>
                            </tr>
                            <tr>
                                <td><img src={cursor} alt="cursor" width='100vh'></img></td>
                                <td>Draw</td>
                            </tr><tr>
                                <td></td>
                                <td>Item</td>
                            </tr>
                            </tbody>
                        </table>
            )
        }else if(count===3){
            return(
                <table>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>Attack</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Magic</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Draw</td>
                            </tr><tr>
                                <td><img src={cursor} alt="cursor" width='100vh'></img></td>
                                <td>Item</td>
                            </tr>
                            </tbody>
                        </table>
            )
        }
    }

    return (
        <div>
            {cursorPosition()}
        </div>
        )
}

export default CommandMenu;