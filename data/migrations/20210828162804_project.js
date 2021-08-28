
exports.up = async function(knex) {
    //tables with no foreign keys first
    await knex.schema.createTable('projects', tbl =>{
        tbl.increments('project_id')
        tbl.string('project_name').notNullable().defaultTo(0)
        tbl.string('project_description')
        tbl.integer('project_completed')
    })
};

exports.down =  async function(knex) {
    //tables with no foreign keys last 
    await knex.schema
    .dropTableIfExists('project')
};
