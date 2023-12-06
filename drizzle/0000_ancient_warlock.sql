CREATE TABLE `agency` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`public_id` char(16),
	`name_jp` text,
	`name_en` text,
	`name_ko` text,
	`default_lang` char(2) NOT NULL,
	`x_id` varchar(64),
	`youtube_id` varchar(32),
	`youtube_handle` text,
	`website` text,
	CONSTRAINT `agency_id` PRIMARY KEY(`id`),
	CONSTRAINT `agency_public_id_unique` UNIQUE(`public_id`)
);
--> statement-breakpoint
CREATE TABLE `artist` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`public_id` char(16),
	`name_jp` text,
	`name_en` text,
	`name_ko` text,
	`default_lang` char(2) NOT NULL,
	CONSTRAINT `artist_id` PRIMARY KEY(`id`),
	CONSTRAINT `artist_public_id_unique` UNIQUE(`public_id`)
);
--> statement-breakpoint
CREATE TABLE `composer` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`x_id` varchar(64),
	`youtube_id` varchar(32),
	`youtube_handle` text,
	`artist_id` bigint NOT NULL,
	CONSTRAINT `composer_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `singer` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`x_id` varchar(64),
	`youtube_id` varchar(32),
	`youtube_handle` text,
	`artist_id` bigint NOT NULL,
	CONSTRAINT `singer_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `song` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`public_id` char(16),
	`name_jp` text,
	`name_en` text,
	`name_ko` text,
	`default_lang` char(2) NOT NULL,
	`video_id` bigint,
	CONSTRAINT `song_id` PRIMARY KEY(`id`),
	CONSTRAINT `song_public_id_unique` UNIQUE(`public_id`)
);
--> statement-breakpoint
CREATE TABLE `song_participant` (
	`song_id` bigint NOT NULL,
	`artist_id` bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `uta` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`public_id` char(16),
	`type` varchar(16) NOT NULL,
	`timestamp` time,
	`song_id` bigint NOT NULL,
	`video_id` bigint NOT NULL,
	CONSTRAINT `uta_id` PRIMARY KEY(`id`),
	CONSTRAINT `uta_public_id_unique` UNIQUE(`public_id`)
);
--> statement-breakpoint
CREATE TABLE `uta_participant` (
	`artist_id` bigint NOT NULL,
	`uta_id` bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `video` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`video_id` text,
	`platform` text,
	`length` time,
	`release_time` datetime,
	CONSTRAINT `video_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `vocaloid` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`artist_id` bigint NOT NULL,
	CONSTRAINT `vocaloid_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `vtuber` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`youtube_id` varchar(32),
	`youtube_handle` text,
	`x_id` varchar(64),
	`agency_id` bigint NOT NULL,
	`artist_id` bigint NOT NULL,
	CONSTRAINT `vtuber_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `composer` ADD CONSTRAINT `composer_artist_id_artist_id_fk` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `singer` ADD CONSTRAINT `singer_artist_id_artist_id_fk` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `song` ADD CONSTRAINT `song_video_id_video_id_fk` FOREIGN KEY (`video_id`) REFERENCES `video`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `song_participant` ADD CONSTRAINT `song_participant_song_id_song_id_fk` FOREIGN KEY (`song_id`) REFERENCES `song`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `song_participant` ADD CONSTRAINT `song_participant_artist_id_artist_id_fk` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `uta` ADD CONSTRAINT `uta_song_id_song_id_fk` FOREIGN KEY (`song_id`) REFERENCES `song`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `uta` ADD CONSTRAINT `uta_video_id_video_id_fk` FOREIGN KEY (`video_id`) REFERENCES `video`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `uta_participant` ADD CONSTRAINT `uta_participant_artist_id_artist_id_fk` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `uta_participant` ADD CONSTRAINT `uta_participant_uta_id_uta_id_fk` FOREIGN KEY (`uta_id`) REFERENCES `uta`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `vocaloid` ADD CONSTRAINT `vocaloid_artist_id_artist_id_fk` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `vtuber` ADD CONSTRAINT `vtuber_agency_id_agency_id_fk` FOREIGN KEY (`agency_id`) REFERENCES `agency`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `vtuber` ADD CONSTRAINT `vtuber_artist_id_artist_id_fk` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`id`) ON DELETE no action ON UPDATE no action;