import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeStudioIdToMovieIdOnMovieTags1673708663661 implements MigrationInterface {
    name = 'ChangeStudioIdToMovieIdOnMovieTags1673708663661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1c385103935dd0007b77467b2c\` ON \`order_items\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` CHANGE \`studio_id\` \`movie_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD UNIQUE INDEX \`IDX_feb1a8dd4b126ec7d2452bf055\` (\`movie_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_feb1a8dd4b126ec7d2452bf055\` ON \`movies_tags\` (\`movie_id\`)`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD CONSTRAINT \`FK_feb1a8dd4b126ec7d2452bf0555\` FOREIGN KEY (\`movie_id\`) REFERENCES \`movies\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP FOREIGN KEY \`FK_feb1a8dd4b126ec7d2452bf0555\``);
        await queryRunner.query(`DROP INDEX \`REL_feb1a8dd4b126ec7d2452bf055\` ON \`movies_tags\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP INDEX \`IDX_feb1a8dd4b126ec7d2452bf055\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` CHANGE \`movie_id\` \`studio_id\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_1c385103935dd0007b77467b2c\` ON \`order_items\` (\`movie_schedule_id\`)`);
    }

}
