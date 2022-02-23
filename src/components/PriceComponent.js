import { useState } from 'react';
import './PriceComponent.css';

const PriceComponent = () => {
    let infos = [
        {
            id: 1,
            title: '10K',
            price:8
        },

        {
            id: 2,
            title: '50K',
            price:12
        },

        {
            id: 3,
            title: '100K',
            price:16
        },

        {
            id: 4,
            title: '500K',
            price:24
        },

        {
            id: 5,
            title: '1M',
            price:36
        }
    ]
    
    const [pageView, setPageView] = useState('100K')
    const [price, setPrice] = useState(16)
    const [time, setTime] = useState('month')
    const [value, setValue] = useState(3)
    const [check, setCheck] = useState(false)

    let fillTrackPct = (value - 1) / 4 * 100;

    const fill = {
        background: "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
        + fillTrackPct + "%, hsl(224, 65%, 95%) " + fillTrackPct + "%, hsl(224, 65%, 95%) 100%"
    }

    const changeRange = (e) => {
        setValue(e.target.value)
        if (!check){
            const newInfo = infos.filter(info => info.id == e.target.value)
            setPageView(newInfo[0].title)
            setPrice(newInfo[0].price)
        }

        else {
            let priced = 'price'
            const newInfos = infos.map(info => {
                let y = Object.assign({}, info)
                y[priced] = y[priced] - y[priced] * 0.25
                return y
            })
            const newInfo = newInfos.filter(info => info.id == e.target.value)
            setPrice(newInfo[0].price)
        }
    }

    const toggle = (e) => {
        e.target.checked ? setTime('year') : setTime('month')
        setCheck(!check)
        if (!check) {
            let priced = 'price'
            let newInfos = infos.map(info => {
                let y = Object.assign({}, info)
                y[priced] = y[priced] - y[priced] * 0.25
                return y
            })
            let newInfo = newInfos.filter(info => info.id == e.target.value)
            console.log(newInfo, 'if')
            setPrice(newInfo[0].price)
        } else {
            let newerInfo = infos.filter(info => info.id == e.target.value)
            setPrice(newerInfo[0].price)
        }
    }
   

  return (
    <>
        <h3 id="pageview">{pageView} Pageviews </h3>
        <div className="slider-container">
            <input 
                type="range"
                min={1}
                max={5}
                value={value}
                step={1}
                className="slider-range"
                onInput={changeRange}
                style={fill}
             />
        </div>
        <div className="price">
            <h2 id="price">${price.toFixed(2)} <span> / {time} </span></h2>   
        </div>

        <div className="toggle-container">
            <p>Monthly Billing</p>
            <label className="switch">
                <input type="checkbox" onChange={toggle}  checked={check} value={value} />
                <span className="slider round"></span>
            </label>
            <p>Yearly Billing <span>-25%</span></p>
        </div>
    </>
  )
}

export default PriceComponent