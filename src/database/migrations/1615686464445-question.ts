import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

const table = new Table({
    name: "question",

    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
        },
        {
            name: 'description',
            type: 'varchar'
        },
        {
            name:"category_id",
            type:"uuid"
        },
        {
            name:"type_question_id",
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

const typeQuestion = new TableForeignKey({
    columnNames:['type_question_id'],
    referencedTableName: 'type_question',
    onDelete: 'CASCADE',
    referencedColumnNames:['id']
});

const category = new TableForeignKey({
    columnNames:['category_id'],
    referencedTableName: 'category',
    onDelete: 'CASCADE',
    referencedColumnNames:['id']
});

export class question1615686464445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(table);
        await queryRunner.createForeignKeys(table,[typeQuestion,category])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys(table,[typeQuestion,category])
        await queryRunner.dropTable(table);
        
    }

}
