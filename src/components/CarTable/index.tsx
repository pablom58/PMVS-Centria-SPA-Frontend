import React , { useState , useEffect } from 'react'
import { connect } from 'react-redux'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import { emptyCar , removeFromCar } from '../../store/actions/CarActions'
import { ProductInterface } from '../../store/interfaces'

import { TableContainer } from './styles' 

const CarTable = (props : any) => {
    const paginatorLeft = <Button type='button' icon='pi pi-refresh' className='p-button-text' />
    const paginatorRight = <Button type='button' icon='pi pi-cloud' className='p-button-text' />

    const [products,setProducts] = useState([])

    useEffect(() => {
        if(props.products.length){
            let data = props.products.map((product: ProductInterface) => ({
                name: product.name,
                amount: product.amount,
                price: product.price,
                total: product.amount * product.price,
            }))
            setProducts(data)
        }else{
            setProducts([])
        }
    },[props.products])

    return (
        <TableContainer>
            <div className='card'>
                <DataTable value={products} paginator
                    paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
                    currentPageReportTemplate='Showing {first} to {last} of {totalRecords}' rows={10} rowsPerPageOptions={[10,20,50]}
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                    <Column field='name' header='Name'></Column>
                    <Column field='amount' header='Amount'></Column>
                    <Column field='price' header='Price'></Column>
                    <Column field='total' header='Total'></Column>
                </DataTable>
            </div>
        </TableContainer>
    )
}

const mapState = (state : any) => ({
    products: state.Car.products
})

const mapDispatch = {
    removeFromCar,
    emptyCar
}

export default connect(mapState,mapDispatch)(CarTable)