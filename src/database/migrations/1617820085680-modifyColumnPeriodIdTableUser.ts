import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";


export class modifyColumnPeriodIdTableUser1617820085680 implements MigrationInterface {

    

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('user','period_id',new TableColumn({
            name:'period_id',
            type: 'uuid',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn("user","period_id" , new TableColumn({
            name:'period_id',
            type: 'uuid',
        }))
    }

}
