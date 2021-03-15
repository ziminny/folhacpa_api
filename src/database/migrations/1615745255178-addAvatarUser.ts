import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

const avatar = new TableColumn({
    name:"avatar",
    type:"varchar",
    isNullable:true
});

export class addAvatarUser1615745255178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("user",avatar);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user",avatar);
    }

}
