import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsMoviesSchedulesAndMovies1673591740698 implements MigrationInterface {
    name = 'AddRelationsMoviesSchedulesAndMovies1673591740698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` CHANGE \`schedule_id\` \`schedule_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` ADD CONSTRAINT \`FK_9d8bffcc77d3646c631f485e98a\` FOREIGN KEY (\`schedule_id\`) REFERENCES \`schedules\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` DROP FOREIGN KEY \`FK_9d8bffcc77d3646c631f485e98a\``);
        await queryRunner.query(`ALTER TABLE \`movies_schedules\` CHANGE \`schedule_id\` \`schedule_id\` int NOT NULL`);
    }

}
