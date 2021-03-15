import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

const table = new Table({
    name: "question_date_response_question",

    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
        },
        {
            name:"date_response_id",
            type:"uuid"
        },
        {
            name:"question_id",
            type:"uuid"
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
});

const dateResponseQuestion = new TableForeignKey({
    columnNames:['date_response_id'],
    referencedTableName: 'date_response_question',
    onDelete: 'CASCADE',
    referencedColumnNames:['id']
});

const question = new TableForeignKey({
    columnNames:['question_id'],
    referencedTableName: 'question',
    onDelete: 'CASCADE',
    referencedColumnNames:['id']
});

export class questionDateResponseQuestion1615687601515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(table);
        await queryRunner.createForeignKeys(table,[question,dateResponseQuestion])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys(table,[question,dateResponseQuestion])
        await queryRunner.dropTable(table);

    }

}
