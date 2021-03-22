import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

const columnColor = new TableColumn({
    name: 'color_id',
    type: 'uuid',

});

const category = new TableForeignKey({
    columnNames:['color_id'],
    referencedTableName: 'color',
    onDelete: 'SET NULL',
    referencedColumnNames:['id'],
});

export class addColumnColorToCategory1616368559123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('category',columnColor);
        await queryRunner.createForeignKey('category',category);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('category',category);
        await queryRunner.dropColumn('category',columnColor);  
    }

}
