import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

const table = new Table({
    name: "reset_password",

    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
        },
        {
            name:"user_id",
            type:"uuid"
        },
        {
            name:"expire_in",
            type:"float"
        },
        {
            name:"token",
            type:"varchar"
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

const user = new TableForeignKey({
    columnNames:['user_id'],
    referencedTableName: 'user',
    onDelete: 'CASCADE',
    referencedColumnNames:['id']
});

export class resetPassword1615758204694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(table);
        await queryRunner.createForeignKey(table,user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(table,user);
        await queryRunner.dropTable(table);     
    }

}
