import {Column, MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

const rule = new TableForeignKey({
    columnNames:['rule_id'],
    referencedTableName: 'rule',
    onDelete: 'SET NULL',
    referencedColumnNames:['id']
});

const period = new TableForeignKey({
    columnNames:['period_id'],
    referencedTableName: 'period',
    onDelete: 'SET NULL',
    referencedColumnNames:['id']
});

const period_id = new TableColumn({
    name:'period_id',
    type: 'uuid'
});

const rule_id = new TableColumn({
    name:'rule_id',
    type: 'uuid'
});

export class addForwignkeyUser1615682802825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('user',[period_id,rule_id]);
        await queryRunner.createForeignKeys('user',[period,rule]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys('user',[period,rule]);
        await queryRunner.dropColumns('user',[period_id,rule_id]);
    }

}
