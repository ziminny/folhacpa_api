import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

const toltipColumn = new TableColumn({
    name: 'toltip',
    type: 'varchar',
    isNullable: true
})

export class addToltipColumnToQuestion1616889933859 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('question',toltipColumn)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('question',toltipColumn)
    }

}
