import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsMoviesTagsWithMoviesAndTags1673591990662 implements MigrationInterface {
    name = 'AddRelationsMoviesTagsWithMoviesAndTags1673591990662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP COLUMN \`movie_id\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD \`studio_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD UNIQUE INDEX \`IDX_0217ac7bcae85ab193b1f88066\` (\`studio_id\`)`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` CHANGE \`tag_id\` \`tag_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD UNIQUE INDEX \`IDX_f8441bbc11afbe11cef7e5193a\` (\`tag_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_0217ac7bcae85ab193b1f88066\` ON \`movies_tags\` (\`studio_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f8441bbc11afbe11cef7e5193a\` ON \`movies_tags\` (\`tag_id\`)`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD CONSTRAINT \`FK_0217ac7bcae85ab193b1f880668\` FOREIGN KEY (\`studio_id\`) REFERENCES \`movies\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD CONSTRAINT \`FK_f8441bbc11afbe11cef7e5193aa\` FOREIGN KEY (\`tag_id\`) REFERENCES \`tags\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP FOREIGN KEY \`FK_f8441bbc11afbe11cef7e5193aa\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP FOREIGN KEY \`FK_0217ac7bcae85ab193b1f880668\``);
        await queryRunner.query(`DROP INDEX \`REL_f8441bbc11afbe11cef7e5193a\` ON \`movies_tags\``);
        await queryRunner.query(`DROP INDEX \`REL_0217ac7bcae85ab193b1f88066\` ON \`movies_tags\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP INDEX \`IDX_f8441bbc11afbe11cef7e5193a\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` CHANGE \`tag_id\` \`tag_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP INDEX \`IDX_0217ac7bcae85ab193b1f88066\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` DROP COLUMN \`studio_id\``);
        await queryRunner.query(`ALTER TABLE \`movies_tags\` ADD \`movie_id\` int NOT NULL`);
    }

}
