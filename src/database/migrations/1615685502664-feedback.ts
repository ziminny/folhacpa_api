import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

const table = new Table({
    name: "feedback",

    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
        },
        {
            name: 'opinion',
            type: 'varchar',
            isNullable:true
        },
        {
            name:"category_id",
            type:"uuid"
        },
        {
            name:"user_id",
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
})

const category = new TableForeignKey({
    columnNames:['category_id'],
    referencedTableName: 'category',
    onDelete: 'CASCADE',
    referencedColumnNames:['id']
});

const user = new TableForeignKey({
    columnNames:['user_id'],
    referencedTableName: 'user',
    onDelete: 'CASCADE',
    referencedColumnNames:['id']
});

export class feedback1615685502664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(table);
        await queryRunner.createForeignKeys(table,[category,user]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(table);
        await queryRunner.dropForeignKeys(table,[category,user]);
    }

}
