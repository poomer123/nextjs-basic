import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
    const [date, setDate] = useState(new Date())

    useEffect( () => {
        setTimer()
        return () => clearInterval(setTimer())
    }, [])

    function setTimer() {
        setInterval( setDate( new Date() ), 1000 )
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-12 col-md-4">
                    <h1 className="text-info">
                        <img style={ {height: '50px'} } src="/static/images/logo.png" alt="Logo"/> ข่าวแจ่มแมว
                    </h1>
                </div>
                <div className="col-12 col-12 col-md-4 col-lg-7 text-right">
                    <ul className="list-inline pt-3">
                        <li className="list-inline-item title"><Link href="/"><a>หน้าแรก</a></Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link href="/about"><a>เกี่ยวกับเรา</a></Link></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-1 text-right">
                    <h5 className="text-muted pt-3">{date.toLocaleTimeString()}</h5>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Header