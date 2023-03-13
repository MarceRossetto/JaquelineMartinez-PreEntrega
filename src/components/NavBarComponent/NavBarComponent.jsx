import React from 'react'
import NavItem from './NavItem'
import styles from "./NavComponent.module.css"
export const NavBarComponent = () => {
  return (
    <nav className={styles.nav}>
      <header>JM ESTHETIC</header>
      <div className={styles.navItems}>
        <NavItem label="Home" src="#" />
        <NavItem label="Servicios" src="#" />
        <NavItem label="Shop" src="#" />
        <NavItem label="Galeria" src="#" />
      </div>
    </nav>
  )
}