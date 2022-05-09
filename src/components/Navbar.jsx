import { useState, useEffect } from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import ICON from '../assets/cryptocurrency.png'

const { Title } = Typography

function Navbar() {

    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {

        const handleResize = () => {
            setScreenSize(window.innerWidth)
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)

    }, []);

    useEffect(() => {

        if(screenSize < 768) setActiveMenu(false)
        else setActiveMenu(true)

    }, [screenSize])
    
    const styleIcon = {
        paddingLeft: '10px'
    }

    const items = [
        {
            label: <><HomeOutlined /><Link to='/' style={styleIcon}>Home</Link></>,
        },
        {
            label: <><FundOutlined/><Link to='/cryptocurrencies' style={styleIcon}>Cryptocurrencies</Link></>,
        },
        {
            label: <><BulbOutlined/><Link to='/news' style={styleIcon}>News</Link></>,
        },
    ]


  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={ICON} size='large'/>
            <Title level={2} className='logo'>
                <Link to='/'>Cryptoverse</Link>
            </Title>
            <Button className='menu-control-container'
                onClick={() => setActiveMenu(!activeMenu)}
            >
                <MenuOutlined />
            </Button>
        </div>
        {activeMenu && (
            <Menu items={items} theme='dark'/>
        )}

    </div>
  )
}

export default Navbar