
exports.up = async function(knex) {
    //tables with no foreign keys first
    await knex.schema
    .createTable('projects', tbl =>{
        tbl.increments('project_id')
        tbl.string('project_name', 100).notNullable()
        tbl.string('project_description', 250)
        tbl.boolean('project_completed').unsigned().defaultTo(false)
    })
    .createTable('resources', tbl=>{
        tbl.increments('resource_id')
        tbl.string('resource_name', 100).notNullable().unique()
        tbl.string('resource_description', 250)
    })
    .createTable('tasks', tbl=>{
        tbl.increments('task_id')
        tbl.string('task_description', 250).notNullable()
        tbl.string('task_notes', 250)
        tbl.boolean('task_completed')
            .notNullable()
            .defaultTo(false)
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')

    })
    .createTable('project_resources', tbl =>{
        tbl.increments('project_resources_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
    })

};

exports.down =  async function(knex) {
    //tables with no foreign keys last 
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
