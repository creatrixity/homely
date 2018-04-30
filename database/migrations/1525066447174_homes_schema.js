'use strict'

const Schema = use('Schema')

class HomesSchema extends Schema {
  async up () {
    if (await this.hasTable('homes')) return;
    
    this.create('homes', (table) => {
      table.increments()
      table.string('title').notNullable().unique();
      table.text('description').nullable();
      table.string('photo').nullable().defaultTo('default.jpg');
      table.float('price').notNullable().defaultTo(0.00);
      table.text('locale').nullable();
      table.enu('type', ['duplex', 'bungalow', 'penthouse', 'detached']).defaultTo('duplex').nullable();    
      table.integer('rooms').defaultTo(0);      
      table.integer('bathrooms').defaultTo(0);      
      table.integer('kitchens').defaultTo(0);      
      table.integer('floors').defaultTo(0);      
      table.float('sq_footage').defaultTo(0);      
      table.timestamps()
    })
  }

  down () {
    this.drop('homes')
  }
}

module.exports = HomesSchema
