
exports.up = async function(knex) {
    //tables with no foreign keys first
    await knex.schema
    .createTable('project', tbl =>{
        tbl.increments('project_id')
        tbl.string('project_name', 100).notNullable()
        tbl.string('project_description', 250)
        tbl.integer('project_completed').unsigned().defaultTo(0)
    })
    .createTable('resource', tbl=>{
        tbl.increments('resource_id')
        tbl.string('resource_name', 100).notNullable().unique()
        tbl.string('resource_description', 250)
    })
    .createTable('task', tbl=>{
        tbl.increments('task_id')
        tbl.string('task_description', 250).notNullable()
        tbl.string('notes', 250)
        tbl.integer('task_completed')
            .unsigned()
            .notNullable()
            .defaultTo(0)
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('project')

    })
    .createTable('project_resources', tbl =>{
        tbl.increments('project_resources_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resource')
    })

};

exports.down =  async function(knex) {
    //tables with no foreign keys last 
    await knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resources')
    .dropTableIfExists('project')
};
