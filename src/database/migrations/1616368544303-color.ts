import {MigrationInterface, QueryRunner, Table} from "typeorm";

const table = new Table({
    name: 'color',
    
    columns: [
    {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
    },
    {
        name: 'hex',
        type:'varchar',
        isUnique: true
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
    }]
})

export class color1616368544303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(table);
    }

}
