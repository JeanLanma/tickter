/**
 * type {DataBaseMap} SQL
 */

/**
 * type {Table} SQL
 */
const Applicant = {
    "id": "int(11) not null",
    "name": "varchar(255) not null",
    "email": "varchar(255) not null",
    "user_id": "int(11) null",
    "created_at": "timestamp null default current_timestamp",
    "updated_at": "timestamp null default current_timestamp",
}

/**
 * type {Table} SQL
 */
const Ticket = {
    "id": "int(11) not null auto_increment primary key",
    "title": "varchar(255) not null",
    "description": "text null",
    "status": "varchar(255) not null",
    "applicant": "int(11) null",
    "created_at": "timestamp null default current_timestamp",
    "updated_at": "timestamp null default current_timestamp",
}

/**
 * type {Table} SQL
 */
const TicketUser = {
    "user_id": "int(11) not null",
    "ticket_id": "int(11) not null",
}

/**
 * type {Table} SQL
 */
const Task = {
    "id": "int(11) not null auto_increment primary key",
    "title": "varchar(255) not null",
    "description": "text not null",
    "status": "varchar(255) not null",
    "belongs": "int(11) null fk:Ticket.id on delete cascade on update cascade",
    "created_at": "timestamp null default current_timestamp",
    "updated_at": "timestamp null default current_timestamp",
}

/**
 * type {Table} SQL
 */
const Category = {
    "id": "int(11) not null auto_increment primary key",
    "name": "varchar(255) not null",
    "created_at": "timestamp null default current_timestamp",
    "updated_at": "timestamp null default current_timestamp",
}

/**
 * type {Table} SQL
 */
const CategoryTask = {
    "id": "int(11) not null auto_increment primary key",
    "task_id": "int(11) not null, FOREIGN KEY (task_id) REFERENCES Task(id) ON DELETE CASCADE",
    "category_id": "int(11) not null, FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE CASCADE"
}

/**
 * type {Table} SQL
*/
const Gallery = {
    "id": "int(11) not null auto_increment primary key",
    "name": "varchar(255) not null",
    "src": "varchar(255) not null",
    "created_at": "timestamp null default current_timestamp",
    "updated_at": "timestamp null default current_timestamp",
}
