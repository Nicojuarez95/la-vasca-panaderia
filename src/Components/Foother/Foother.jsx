import React from 'react'
import './foother.css'

export default function Foother() {
 
  return (
    <section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>Direccion</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sit debitis.</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box">
            <h3>E-mail</h3>
            <a href="mailto:panaderialavasca@gmail.com" class="link">PanaderiaLaVasca@gmail.com</a>
            <a href="#" class="link">ejemplo@gmail.com</a>
        </div>

        <div class="box">
            <h3>Llamános</h3>
            <p>+543584834854</p>
            <p>+543584834854</p>
        </div>

        <div class="box">
            <h3>Horarios</h3>
            <p>Lunes - Viernes: 9:00 - 23:00 <br /> Sabados: 8:00 - 24:00 </p>
        </div>

    </div>

    <div class="credit">Panaderia y Reposteria <span>LA VASCA</span> 2023 </div>

</section>
  )
}