'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Customer = use('App/Models/Customer');

class CustomerController {

    test(){
        return "Hello world";
    }

    //index({view}){
     //   const message = "Developed by Artyon";
       // return view.render("customer",{message});
    //}

    //----------API REST-------------

    async index ({ request, response, view }) {
        let customer = await Customer.query().with('user').fetch()
        return response.json(customer)
    }

    async store ({ request, response }) {

        const name = request.input('name')
        const email = request.input('email')
        const address = request.input('title')
        const phone = request.input('tel')
    
        const customer = new Customer()
        customer.name = name
        customer.email = email
        customer.address = address
        customer.phone = phone
    
        await customer.save()
        return response.json(customer)
    }

    async update ({ params, request, response }) { 
        const {id} = params   
        const name = request.input('name')
        const email = request.input('email')
        const address = request.input('address')
        const phone = request.input('phone')
    
        let encuentra = await Customer.find(id)
    
        customer.name = name
        customer.email = email
        customer.address = address
        customer.phone = phone
        await customer.save()
        return response.json(customer)
    }

    async destroy ({ params, request, response }) {
        const {id} = params
        await customer.find(id).delete()
        return response.json({message: 'Contact deleted!'})
    } 
    
}

module.exports = CustomerController
