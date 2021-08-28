
exports.up = async function(knex) {
    //tables with no foreign keys first
    await knex.schema
    .createTable('project', tbl =>{
        tbl.increments('project_id')
        tbl.string('project_name').notNullable().defaultTo(0)
        tbl.string('project_description')
        tbl.integer('project_completed')
    })
    .createTable('resouces', tbl=>{
        tbl.increments('resource_id')
        tbl.string('resource_name').notNullable().unique()
        tbl.string('resource_description')
    })
};

exports.down =  async function(knex) {
    //tables with no foreign keys last 
    await knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('project')
};
