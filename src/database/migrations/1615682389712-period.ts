import {MigrationInterface, QueryRunner, Table} from "typeorm";

const table = new Table(
    {
        name: 'period',
        columns:[
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
            },
            {
                name:'name',
                type:'varchar',
                default: 'user',
                isUnique:true
                
            },
            {
                name:'code',
                type: 'int'
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
    }
)


export class period1615682389712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(table);
    }

}
