import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsMoviesSchedulesAndStudios1673591883110 implements MigrationInterface {
    name = 'AddRelationsMoviesSchedulesAndStudios1673591883110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` CHANGE \`studio_id\` \`studio_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` ADD CONSTRAINT \`FK_f184925c27f9998be18d144a447\` FOREIGN KEY (\`studio_id\`) REFERENCES \`studios\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` DROP FOREIGN KEY \`FK_f184925c27f9998be18d144a447\``);
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` CHANGE \`studio_id\` \`studio_id\` int NOT NULL`);
    }

}
