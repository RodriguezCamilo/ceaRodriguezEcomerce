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
        console.log(orden)
        addDoc(orderRef, orden)
            .then((doc) => { console.log(doc.id)
            setOrderId(doc.id)
            emptyCart()
            })

    }

    if (orderId) {
        return <div className='container my-5 center'>
            <h1>Tu orden se ha procesado exitosamente!</h1>
            <hr/>
            <h3>Guarda tu código de orden: {orderId}</h3>
            <hr/>
            <Link to="/" className='btn btn-success'>Volver a la tienda</Link>
        </div>
    }

    if (cart.length === 0){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <br />
            <h1>Checkout</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input className='form-control my-2' type={"text"} placeholder="Nombre" value={values.nombre} name="nombre" onChange={handleInputChange}></input>
                <input className='form-control my-2' type={"email"} placeholder="Email" value={values.email} name="email" onChange={handleInputChange}></input>
                <input className='form-control my-2' type={"tel"} placeholder="Telefono" value={values.tel} name="tel" onChange={handleInputChange}></input>
                <button className='btn btn-success' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Checkout