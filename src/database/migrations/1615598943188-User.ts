import {MigrationInterface, QueryRunner, Table} from "typeorm";

const table = new Table({
    name: "user",

    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
        },
        {
            name: 'name',
            type: 'varchar'
        },
        {
            name: 'last_name',
            type: 'varchar'
        },
        {
            name: 'email',
            type: 'varchar',
            isUnique: true
        },
        {
            name: 'password',
            type: 'varchar'
        },

     {
         name: 'created_at',
         type: 'timestamp',
         default: 'now()'
     },
     {
         name: 'updated_at',
         type: 'timestamp',
         default: 'now()'
     }
    ]
})

export class User1615598943188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        await queryRunner.createTable(table);
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp";')
        await queryRunner.dropTable(table);
    }

}
