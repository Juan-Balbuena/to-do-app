CREATE TABLE "weekend-to-do-app" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"description" VARCHAR(80) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE

);

INSERT INTO "weekend-to-do-app" ("name", "description")
VALUES ('Laundry', 'Make sure to air dry'),
('Workout', 'Do not forget to stretch'),
('Homework', 'To Do App');