import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsOrderItemsWithOrdersAndMovieSchedules1673592218487 implements MigrationInterface {
    name = 'AddRelationsOrderItemsWithOrdersAndMovieSchedules1673592218487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_items\` CHANGE \`order_id\` \`order_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_items\` CHANGE \`movie_schedule_id\` \`movie_schedule_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_items\` ADD UNIQUE INDEX \`IDX_1c385103935dd0007b77467b2c\` (\`movie_schedule_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_1c385103935dd0007b77467b2c\` ON \`order_items\` (\`movie_schedule_id\`)`);
        await queryRunner.query(`ALTER TABLE \`order_items\` ADD CONSTRAINT \`FK_145532db85752b29c57d2b7b1f1\` FOREIGN KEY (\`order_id\`) REFERENCES \`orders\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_items\` ADD CONSTRAINT \`FK_1c385103935dd0007b77467b2cc\` FOREIGN KEY (\`movie_schedule_id\`) REFERENCES \`movies_schedules\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_items\` DROP FOREIGN KEY \`FK_1c385103935dd0007b77467b2cc\``);
        await queryRunner.query(`ALTER TABLE \`order_items\` DROP FOREIGN KEY \`FK_145532db85752b29c57d2b7b1f1\``);
        await queryRunner.query(`DROP INDEX \`REL_1c385103935dd0007b77467b2c\` ON \`order_items\``);
        await queryRunner.query(`ALTER TABLE \`order_items\` DROP INDEX \`IDX_1c385103935dd0007b77467b2c\``);
        await queryRunner.query(`ALTER TABLE \`order_items\` CHANGE \`movie_schedule_id\` \`movie_schedule_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order_items\` CHANGE \`order_id\` \`order_id\` int NOT NULL`);
    }

}
