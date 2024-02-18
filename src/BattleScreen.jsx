import React, { useEffect, useState } from 'react';
import CommandMenu from './CommandMenu'


const BattleScreen = (props) => {
    
    let [count, setCount] = useState(0);
        
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch(event.key){
                case 'ArrowUp':
                    console.log('Up');
                    setCount(prevCount => (prevCount - 1)%4);
                    break;
                    case 'ArrowDown':
                        console.log('Down');
                        setCount(prevCount => (prevCount + 1)%4);
                    break;
                case 'ArrowLeft':
                    console.log('Left');
                    break;
                case 'ArrowRight':
                    console.log('Right');
                    break;
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    
    useEffect(()=>{
        if (count < 0) {
            setCount(3);
        }
        console.log(count)
    }, [count])

    const collections = [
        {
            version: 'Easy',
            statData: [
                { name: 'squall',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'irvine',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'zell',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'bahamut',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1}
            ]
        },
        {
            version: 'Hard',
            statData: [
                { name: 'squall',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'irvine',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'zell',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'bahamut',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1}
            ]
        },
        {
            version: 'Critical',
            statData: [
                { name: 'squall',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'irvine',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'zell',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1},
                { name: 'bahamut',
                     level: 1, str: 1, vit: 1, mag: 1, spr: 1, spd: 1, luck: 1, eva: 1, hit: 1, hp: 1}
            ]
        }
    ]

    const selectedVersion = collections.find(collections =>
        collections.version === props.difficulty);
             

    return(
        <div>
        <div className = "boxContainer">
            <div id="difficulty">
                <h4>Difficulty: {props.difficulty}</h4>
            </div>
        <table>
        <tbody>
            <tr>
                <td><div className = 'box1'></div></td>
                <td></td>
                <td><div className = 'box2'></div></td>
            </tr>
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <td>
                    <div className = 'box3'>
                        <CommandMenu count={count}/>
                        {count}
                    </div>
                </td>
                <td><div className = 'box4'></div></td>
                <td><div className = 'box5'></div></td>
                <td><div className = 'box6'></div></td>
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