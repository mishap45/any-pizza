import React from 'react'

type SideBarItemTypes = {
    src: string
    menuItemText: string
}

const SideBarItem:React.FC<SideBarItemTypes> = ({ src, menuItemText }) => {
    return (
        <>
            <img width={30} height={30} src={src} alt={'sideBar item img'} />
            <span style={{marginLeft: 10}}>{ menuItemText }</span>
        </>
    )
};

export default SideBarItem