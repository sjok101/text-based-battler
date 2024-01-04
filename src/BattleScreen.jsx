import React from 'react';
import hero1 from './assets/images/hero1.jpg'
import hero2 from './assets/images/hero2.jpg'
import hero3 from './assets/images/hero3.jpg'
import boss1 from './assets/images/boss1.webp'
import boss2 from './assets/images/boss2.webp'

const BattleScreen = () => {
    return(
        <div>
        <div className = "boxContainer">
        <table>
        <tbody>
            <tr>
                <td><div className = 'box1'></div></td>
                <td></td>
                <td><div className = 'box2'><img src={boss1} alt="boss 1"/></div></td>
            </tr>
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <td>
                    <div className = 'box3'>
                        <li>Attack</li>
                        <li>Attack</li>
                        <li>Attack</li>
                        <li>Attack</li>
                    </div>
                </td>
                <td><div className = 'box4'><img src={hero1} alt="hero 1"/></div></td>
                <td><div className = 'box5'><img src={hero2} alt="hero 2"/></div></td>
                <td><div className = 'box6'><img src={hero3} alt="hero 3"/></div></td>
            </tr>
            <tr>
                <td></td>
                <td><div className = 'box7'></div></td>
                <td><div className = 'box8'></div></td>
                <td><div className = 'box9'></div></td>
            </tr>
            </tbody>
            </table>

        </div>
        </div>
    )
}

export default BattleScreen;