'use strict'
const Home = use('App/Models/Home')

class HomeController {

    async store ({ request }) {
        let {
            title,
            description,
            photo,
            price,
            type,
            locale,
            rooms,
            bathrooms,
            kitchens,
            floors,
            sq_footage
        } = request.all()
    
        let home = await Home.findOrCreate({
            title,
            description,
            photo,
            price,
            type,
            locale,
            rooms,
            bathrooms,
            kitchens,
            floors,
            sq_footage
        })
    
      return home.toJSON()            
    }

}

module.exports = HomeController
