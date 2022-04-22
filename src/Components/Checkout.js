import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { database } from '../firebase/config'
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { Navigate, Link } from 'react-router-dom'


function Checkout() {
    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        tel: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.tel]: e.target.value,
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            items: cart,
            total: cartTotal(),
            comprador: {
                nombre: values.nombre,
                email: values.email,
                tel: values.tel
            },
            fyh: Timestamp.fromDate(new Date())
        }

        const orderRef = collection(database, "orders")
        
        addDoc(orderRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                emptyCart()
            })

    }

    if (orderId) {
        return <div className='container my-5 center'>
            <h1>Tu orden se ha procesado exitosamente!</h1>
            <hr />
            <h3>Guarda tu código de orden: {orderId}</h3>
            <hr />
            <Link to="/" className='btn btn-success'>Volver a la tienda</Link>
        </div>
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <br />
            <h1>Checkout</h1>
            <hr />
            <form className='container  justify-content-start' style={{ width: "60%", marginTop: "30px" }} onSubmit={handleSubmit}>
                <div className='card'>
                    <div style={{marginBottom: "20px", marginTop: "20px"}}>
                        <label className='fs-4'>Nombre:</label>
                        <input className='form-control my-2 center' type={"text"} style={{ width: "70%" }} placeholder="Joseph Joestar" value={values.nombre} name="nombre" onChange={handleInputChange} required></input>
                    </div>

                    <div style={{marginBottom: "20px"}}>
                        <label className='fs-4'>Email:</label>
                        <input className='form-control my-2 center' type={"email"} style={{ width: "70%" }} placeholder="josephrulz@joestar.com" value={values.email} name="email" onChange={handleInputChange} required></input>
                    </div>

                    <div style={{marginBottom: "20px"}}>
                        <label className='fs-4'>Telefono:</label>
                        <input className='form-control my-2 center' type={"tel"} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" style={{ width: "70%" }} placeholder="011 - Joestar" value={values.tel} name="tel" onChange={handleInputChange} required></input>
                    </div>

                    <button className='btn btn-success center' style={{marginBottom: "20px", width:"20%"}} type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout