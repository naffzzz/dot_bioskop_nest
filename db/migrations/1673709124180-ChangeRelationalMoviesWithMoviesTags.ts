import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeRelationalMoviesWithMoviesTags1673709124180 implements MigrationInterface {
    name = 'ChangeRelationalMoviesWithMoviesTags1673709124180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_feb1a8dd4b126ec7d2452bf055\` ON \`movies_tags\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_feb1a8dd4b126ec7d2452bf055\` ON \`movies_tags\` (\`movie_id\`)`);
    }

}
