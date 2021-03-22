import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

const note = new TableColumn({
    name: 'note',
    type: 'varchar'
})

export class addColumnNodeToQuestionDateResponseQuestion1616432172625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('question_date_response_question',note);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('question_date_response_question',note);
    }

}
